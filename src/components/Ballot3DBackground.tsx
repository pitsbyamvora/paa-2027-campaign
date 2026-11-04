"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Ballot3DBackground() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [ballotStage, setBallotStage] = useState<"ready" | "stamping" | "stamped" | "deposited">("ready");

  // 1. PERFORMANCE OPTIMIZATION: Only enable on desktop screens (>= 768px)
  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport, { passive: true });
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  useEffect(() => {
    if (!isDesktop || !mountRef.current) return;

    const container = mountRef.current;
    let animationFrameId: number;
    let isDisposed = false;

    // --- THREE.JS SCENE SETUP ---
    const scene = new THREE.Scene();

    // Camera with cinematic perspective
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    // Renderer with transparent background and high performance
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);

    // --- LIGHTING ---
    // Ambient light: Soft fill
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    // Polling booth overhead spotlight
    const boothSpot = new THREE.SpotLight(0xfff8ee, 3.5);
    boothSpot.position.set(2.5, 6, 5);
    boothSpot.angle = Math.PI / 4;
    boothSpot.penumbra = 0.5;
    boothSpot.castShadow = true;
    boothSpot.shadow.mapSize.width = 1024;
    boothSpot.shadow.mapSize.height = 1024;
    scene.add(boothSpot);

    // Campaign emerald edge light
    const emeraldRim = new THREE.DirectionalLight(0x10b981, 1.5);
    emeraldRim.position.set(-5, 2, -1);
    scene.add(emeraldRim);

    // Warm presidential accent light
    const warmRim = new THREE.DirectionalLight(0xf59e0b, 0.9);
    warmRim.position.set(5, -2, 2);
    scene.add(warmRim);

    // --- TEXTURE GENERATION: OFFICIAL NIGERIAN BALLOT PAPER ---
    const createBallotTexture = (): THREE.CanvasTexture => {
      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = 1400;
      const ctx = canvas.getContext("2d");
      if (!ctx) return new THREE.CanvasTexture(canvas);

      // Paper background
      ctx.fillStyle = "#fafdfa";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Subtle paper watermark pattern
      ctx.fillStyle = "rgba(16, 185, 129, 0.035)";
      ctx.font = "bold 26px sans-serif";
      for (let y = 120; y < canvas.height; y += 140) {
        for (let x = -50; x < canvas.width; x += 320) {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(-Math.PI / 12);
          ctx.fillText("INEC 2027 OFFICIAL BALLOT", 0, 0);
          ctx.restore();
        }
      }

      // Top green header banner
      ctx.fillStyle = "#042f1f";
      ctx.fillRect(0, 0, canvas.width, 150);

      // Gold accent line
      ctx.fillStyle = "#f59e0b";
      ctx.fillRect(0, 145, canvas.width, 5);

      // Header text
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 24px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("FEDERAL REPUBLIC OF NIGERIA", canvas.width / 2, 42);

      ctx.fillStyle = "#a7f3d0";
      ctx.font = "bold 32px sans-serif";
      ctx.fillText("INDEPENDENT NATIONAL ELECTORAL COMMISSION", canvas.width / 2, 85);

      ctx.fillStyle = "#fde68a";
      ctx.font = "bold 24px sans-serif";
      ctx.fillText("PRESIDENTIAL ELECTION 2027 • OFFICIAL BALLOT PAPER", canvas.width / 2, 125);

      // Instructions band
      ctx.fillStyle = "#f1f5f9";
      ctx.fillRect(30, 165, canvas.width - 60, 48);
      ctx.fillStyle = "#0f172a";
      ctx.font = "bold 17px sans-serif";
      ctx.fillText("VOTE FOR ONE PARTY ONLY BY THUMBPRINTING IN THE SPACE PROVIDED", canvas.width / 2, 196);

      // Table headers
      const tableTop = 230;
      ctx.fillStyle = "#e2e8f0";
      ctx.fillRect(30, tableTop, canvas.width - 60, 42);
      ctx.fillStyle = "#334155";
      ctx.font = "bold 16px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText("PARTY", 60, tableTop + 27);
      ctx.fillText("LOGO", 220, tableTop + 27);
      ctx.fillText("PRESIDENTIAL CANDIDATE", 360, tableTop + 27);
      ctx.textAlign = "center";
      ctx.fillText("THUMBPRINT HERE", 860, tableTop + 27);

      // Party rows data
      const rows = [
        { acronym: "APC", name: "All Progressives Congress", candidate: "Official Nominee", isSDP: false },
        { acronym: "PDP", name: "Peoples Democratic Party", candidate: "Official Nominee", isSDP: false },
        { acronym: "SDP", name: "Social Democratic Party", candidate: "PRINCE (DR.) ADEWOLE ADEBAYO", vp: "DR. USMAN BUGAJE", isSDP: true },
        { acronym: "LP", name: "Labour Party", candidate: "Official Nominee", isSDP: false },
        { acronym: "NNPP", name: "New Nigeria Peoples Party", candidate: "Official Nominee", isSDP: false },
      ];

      const rowHeight = 175;
      rows.forEach((row, i) => {
        const y = tableTop + 55 + i * (rowHeight + 15);

        if (row.isSDP) {
          // Highlighted SDP Row
          ctx.fillStyle = "#ecfdf5";
          ctx.strokeStyle = "#059669";
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.roundRect(30, y, canvas.width - 60, rowHeight, 12);
          ctx.fill();
          ctx.stroke();

          // Green badge tag
          ctx.fillStyle = "#059669";
          ctx.fillRect(30, y, 12, rowHeight);

          // SDP Acronym
          ctx.fillStyle = "#041c14";
          ctx.font = "900 48px sans-serif";
          ctx.textAlign = "left";
          ctx.fillText("SDP", 65, y + 70);

          ctx.fillStyle = "#059669";
          ctx.font = "bold 16px sans-serif";
          ctx.fillText("SOCIAL DEMOCRATIC PARTY", 65, y + 105);

          // Draw Stallion Horse Logo Symbol
          ctx.save();
          ctx.translate(245, y + 75);
          ctx.fillStyle = "#041c14";
          ctx.beginPath();
          ctx.arc(0, 0, 38, 0, Math.PI * 2);
          ctx.strokeStyle = "#059669";
          ctx.lineWidth = 3;
          ctx.stroke();
          ctx.font = "40px sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("🐎", 0, 0);
          ctx.restore();

          // Candidate Name
          ctx.fillStyle = "#041c14";
          ctx.font = "900 24px sans-serif";
          ctx.textAlign = "left";
          ctx.fillText(row.candidate, 360, y + 65);

          ctx.fillStyle = "#ea580c";
          ctx.font = "bold 17px sans-serif";
          ctx.fillText("RUNNING MATE: " + row.vp, 360, y + 98);

          ctx.fillStyle = "#059669";
          ctx.font = "bold 14px sans-serif";
          ctx.fillText("✓ CHAPTER II CONSTITUTIONAL GOVERNANCE", 360, y + 128);

          // Thumbprint Box
          ctx.fillStyle = "#ffffff";
          ctx.strokeStyle = "#059669";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.roundRect(750, y + 15, 220, rowHeight - 30, 10);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = "#059669";
          ctx.font = "bold 14px sans-serif";
          ctx.textAlign = "center";
          ctx.fillText("TARGET ZONE", 860, y + 42);
        } else {
          // Placeholder Faded Row
          ctx.fillStyle = "#ffffff";
          ctx.strokeStyle = "#e2e8f0";
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.roundRect(30, y, canvas.width - 60, rowHeight, 8);
          ctx.fill();
          ctx.stroke();

          ctx.fillStyle = "#94a3b8";
          ctx.font = "bold 32px sans-serif";
          ctx.textAlign = "left";
          ctx.fillText(row.acronym, 65, y + 75);

          ctx.fillStyle = "#cbd5e1";
          ctx.font = "14px sans-serif";
          ctx.fillText(row.name, 65, y + 105);

          ctx.fillStyle = "#94a3b8";
          ctx.font = "bold 18px sans-serif";
          ctx.fillText(row.candidate, 360, y + 80);

          // Neutral Thumbprint Box
          ctx.fillStyle = "#f8fafc";
          ctx.strokeStyle = "#cbd5e1";
          ctx.lineWidth = 1.5;
          ctx.strokeRect(750, y + 20, 220, rowHeight - 40);
        }
      });

      // Bottom footer bar
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, canvas.height - 50, canvas.width, 50);
      ctx.fillStyle = "#94a3b8";
      ctx.font = "bold 14px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(
        "OFFICIAL ELECTION WATERMARK • SECURITY REF: PAA-2027-SDP-NG • DO NOT WRITE OUTSIDE BOX",
        canvas.width / 2,
        canvas.height - 20
      );

      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = 4;
      return texture;
    };

    // --- INDELIBLE PURPLE THUMBPRINT TEXTURE ---
    const createThumbprintTexture = (): THREE.CanvasTexture => {
      const canvas = document.createElement("canvas");
      canvas.width = 300;
      canvas.height = 380;
      const ctx = canvas.getContext("2d");
      if (!ctx) return new THREE.CanvasTexture(canvas);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Authentic election purple/violet ink (#581c87)
      ctx.strokeStyle = "#581c87";
      ctx.lineWidth = 3.5;
      ctx.lineCap = "round";

      // Concentric fingerprint ridges & whorls
      for (let r = 12; r < 120; r += 7.5) {
        ctx.beginPath();
        const numSegments = 24;
        for (let i = 0; i <= numSegments; i++) {
          const angle = (i / numSegments) * Math.PI * 2;
          const wobble = Math.sin(angle * 7) * 2.5 + Math.cos(angle * 3) * 2;
          const radiusX = (r + wobble) * 0.75;
          const radiusY = r + wobble;

          const px = cx + Math.cos(angle) * radiusX;
          const py = cy + Math.sin(angle) * radiusY;

          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.globalAlpha = 0.75 + (r / 120) * 0.2;
        ctx.stroke();
      }

      // Central dense ink pool
      ctx.fillStyle = "rgba(74, 21, 75, 0.55)";
      ctx.beginPath();
      ctx.ellipse(cx, cy, 32, 45, 0, 0, Math.PI * 2);
      ctx.fill();

      // Delicate ink splatter dots
      ctx.fillStyle = "rgba(88, 28, 135, 0.7)";
      for (let i = 0; i < 35; i++) {
        const angle = Math.random() * Math.PI * 2;
        const dist = 70 + Math.random() * 55;
        const dotX = cx + Math.cos(angle) * (dist * 0.75);
        const dotY = cy + Math.sin(angle) * dist;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 1 + Math.random() * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    // --- 3D OBJECTS CREATION ---
    const boothGroup = new THREE.Group();
    scene.add(boothGroup);

    // 1. Official Ballot Paper Mesh
    const paperWidth = 3.2;
    const paperHeight = 4.38;
    const paperGeometry = new THREE.PlaneGeometry(paperWidth, paperHeight, 16, 16);
    const ballotTexture = createBallotTexture();
    const paperMaterial = new THREE.MeshStandardMaterial({
      map: ballotTexture,
      roughness: 0.45,
      metalness: 0.05,
      side: THREE.DoubleSide,
    });

    const ballotMesh = new THREE.Mesh(paperGeometry, paperMaterial);
    ballotMesh.castShadow = true;
    ballotMesh.receiveShadow = true;
    // Initial placement: Resting in the right half of the desktop viewport
    ballotMesh.position.set(2.2, 0.1, 0.4);
    ballotMesh.rotation.set(-0.35, -0.28, 0.1);
    boothGroup.add(ballotMesh);

    // 2. Inked Purple Thumbprint (Stamps directly on SDP box)
    const stampGeometry = new THREE.PlaneGeometry(0.72, 0.92);
    const stampTexture = createThumbprintTexture();
    const stampMaterial = new THREE.MeshBasicMaterial({
      map: stampTexture,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });
    const stampMesh = new THREE.Mesh(stampGeometry, stampMaterial);
    stampMesh.position.set(1.12, 0.06, 0.015);
    ballotMesh.add(stampMesh);

    // 3. INEC-Style Acrylic Ballot Box
    const boxGroup = new THREE.Group();
    const boxSize = 2.2;
    const boxGeometry = new THREE.BoxGeometry(boxSize, boxSize * 1.15, boxSize);

    // Semi-transparent acrylic glass material
    const acrylicMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.28,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.6,
      ior: 1.45,
    });

    const ballotBoxMesh = new THREE.Mesh(boxGeometry, acrylicMaterial);
    ballotBoxMesh.castShadow = true;
    boxGroup.add(ballotBoxMesh);

    // Emerald Green Frame & Top Lid
    const lidGeometry = new THREE.BoxGeometry(boxSize * 1.05, 0.15, boxSize * 1.05);
    const lidMaterial = new THREE.MeshStandardMaterial({
      color: 0x064e3b,
      metalness: 0.3,
      roughness: 0.4,
    });
    const lidMesh = new THREE.Mesh(lidGeometry, lidMaterial);
    lidMesh.position.y = (boxSize * 1.15) / 2 + 0.075;
    boxGroup.add(lidMesh);

    // Top Ballot Slot
    const slotGeometry = new THREE.BoxGeometry(1.6, 0.04, 0.16);
    const slotMaterial = new THREE.MeshBasicMaterial({ color: 0x02140d });
    const slotMesh = new THREE.Mesh(slotGeometry, slotMaterial);
    slotMesh.position.y = lidMesh.position.y + 0.08;
    boxGroup.add(slotMesh);

    // Front Official Seal Badge
    const sealGeometry = new THREE.PlaneGeometry(1.1, 0.7);
    const sealCanvas = document.createElement("canvas");
    sealCanvas.width = 400;
    sealCanvas.height = 250;
    const sctx = sealCanvas.getContext("2d");
    if (sctx) {
      sctx.fillStyle = "#042f1f";
      sctx.fillRect(0, 0, 400, 250);
      sctx.strokeStyle = "#f59e0b";
      sctx.lineWidth = 6;
      sctx.strokeRect(8, 8, 384, 234);
      sctx.fillStyle = "#ffffff";
      sctx.font = "bold 26px sans-serif";
      sctx.textAlign = "center";
      sctx.fillText("INEC 2027", 200, 70);
      sctx.fillStyle = "#10b981";
      sctx.font = "bold 22px sans-serif";
      sctx.fillText("OFFICIAL BALLOT BOX", 200, 125);
      sctx.fillStyle = "#f59e0b";
      sctx.font = "bold 18px sans-serif";
      sctx.fillText("PRESIDENTIAL ELECTION", 200, 180);
    }
    const sealTexture = new THREE.CanvasTexture(sealCanvas);
    const sealMesh = new THREE.Mesh(
      sealGeometry,
      new THREE.MeshBasicMaterial({ map: sealTexture, side: THREE.DoubleSide })
    );
    sealMesh.position.set(0, 0, boxSize / 2 + 0.01);
    boxGroup.add(sealMesh);

    // Position ballot box on the right / rear
    boxGroup.position.set(4.3, -0.6, -1.8);
    boxGroup.rotation.y = -0.4;
    boothGroup.add(boxGroup);

    // --- SCROLLYTELLING ANIMATION ENGINE ---
    let currentScroll = 0;
    let targetScroll = 0;

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        targetScroll = Math.min(Math.max(window.scrollY / docHeight, 0), 1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Subtle mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.4;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // --- RENDER LOOP ---
    const clock = new THREE.Clock();
    let lastReportedStage = "";

    const render = () => {
      if (isDisposed) return;
      animationFrameId = requestAnimationFrame(render);

      // Smooth interpolation for 60fps/120fps motion
      currentScroll += (targetScroll - currentScroll) * 0.08;
      const elapsedTime = clock.getElapsedTime();

      // Parallax camera tilt
      camera.position.x = mouseX * 0.5;
      camera.position.y = -mouseY * 0.5;
      camera.lookAt(0.5, 0, 0);

      // SCROLL STAGES:
      // Stage 1 (0.0 to 0.25): Hero View — Ballot rests on desk, waiting
      // Stage 2 (0.25 to 0.50): Thumbprint stamps decisively onto SDP box
      // Stage 3 (0.50 to 0.75): Stamped ballot paper lifts and tilts towards box
      // Stage 4 (0.75 to 1.0): Ballot slides into the ballot box slot!

      if (currentScroll < 0.25) {
        // Hero section view
        const p = currentScroll / 0.25;
        ballotMesh.position.x = THREE.MathUtils.lerp(2.2, 1.8, p);
        ballotMesh.position.y = THREE.MathUtils.lerp(0.1, 0.2, p);
        ballotMesh.position.z = THREE.MathUtils.lerp(0.4, 0.8, p);
        ballotMesh.rotation.x = THREE.MathUtils.lerp(-0.35, -0.2, p);
        ballotMesh.rotation.y = THREE.MathUtils.lerp(-0.28, -0.15, p);
        stampMaterial.opacity = 0;

        if (lastReportedStage !== "ready") {
          lastReportedStage = "ready";
          setBallotStage("ready");
        }
      } else if (currentScroll < 0.5) {
        // Stamping action!
        const p = (currentScroll - 0.25) / 0.25;
        ballotMesh.position.set(1.8, 0.2, 0.8);
        ballotMesh.rotation.set(-0.2, -0.15, 0.08);

        // Thumbprint impact: opacity ramps up, slight tactile stamp scale
        stampMaterial.opacity = Math.min(p * 1.5, 1);
        const stampScale = 1 + Math.max(0, (1 - p) * 0.4);
        stampMesh.scale.set(stampScale, stampScale, 1);

        if (lastReportedStage !== "stamping") {
          lastReportedStage = "stamping";
          setBallotStage("stamping");
        }
      } else if (currentScroll < 0.75) {
        // Lifting up towards the ballot box
        const p = (currentScroll - 0.5) / 0.25;
        stampMaterial.opacity = 1;
        stampMesh.scale.set(1, 1, 1);

        ballotMesh.position.x = THREE.MathUtils.lerp(1.8, 3.2, p);
        ballotMesh.position.y = THREE.MathUtils.lerp(0.2, 1.4, p);
        ballotMesh.position.z = THREE.MathUtils.lerp(0.8, -0.8, p);

        ballotMesh.rotation.x = THREE.MathUtils.lerp(-0.2, -Math.PI / 2.2, p);
        ballotMesh.rotation.y = THREE.MathUtils.lerp(-0.15, -0.4, p);
        ballotMesh.rotation.z = THREE.MathUtils.lerp(0.08, 0.1, p);

        if (lastReportedStage !== "stamped") {
          lastReportedStage = "stamped";
          setBallotStage("stamped");
        }
      } else {
        // Sliding into the ballot box slot!
        const p = (currentScroll - 0.75) / 0.25;
        stampMaterial.opacity = 1;

        ballotMesh.position.x = THREE.MathUtils.lerp(3.2, 4.3, p);
        ballotMesh.position.y = THREE.MathUtils.lerp(1.4, 0.1, p);
        ballotMesh.position.z = THREE.MathUtils.lerp(-0.8, -1.8, p);

        ballotMesh.rotation.x = -Math.PI / 2;
        ballotMesh.rotation.y = -0.4;
        ballotMesh.scale.setScalar(THREE.MathUtils.lerp(1, 0.85, p));

        if (lastReportedStage !== "deposited") {
          lastReportedStage = "deposited";
          setBallotStage("deposited");
        }
      }

      // Gentle floating animation to keep scene feeling alive
      boothGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.03;

      renderer.render(scene, camera);
    };

    render();

    // --- RESIZE HANDLER ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // --- CLEANUP ---
    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      // Dispose geometries and materials
      paperGeometry.dispose();
      paperMaterial.dispose();
      ballotTexture.dispose();
      stampGeometry.dispose();
      stampMaterial.dispose();
      stampTexture.dispose();
      boxGeometry.dispose();
      acrylicMaterial.dispose();
      lidGeometry.dispose();
      lidMaterial.dispose();
      slotGeometry.dispose();
      slotMaterial.dispose();
      sealGeometry.dispose();
      sealTexture.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [isDesktop]);

  // Mobile optimization: Render nothing on mobile viewports (< 768px)
  if (!isDesktop) return null;

  return (
    <>
      {/* Fixed 3D Canvas Layer */}
      <div
        ref={mountRef}
        aria-hidden="true"
        className="fixed inset-0 z-10 pointer-events-none overflow-hidden select-none"
      />

      {/* Floating Scrollytelling Progress Pill (Desktop only) */}
      <aside 
        aria-label="3D Polling Unit Scrollytelling Status" 
        className="fixed bottom-6 right-6 z-40 hidden md:flex items-center gap-3 bg-slate-950/85 backdrop-blur-md border border-emerald-500/40 text-white px-4 py-2.5 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.5)] text-xs font-bold pointer-events-none transition-all duration-300"
      >
        <span
          className={`w-2.5 h-2.5 rounded-full transition-colors ${
            ballotStage === "deposited"
              ? "bg-emerald-400 animate-ping"
              : ballotStage === "stamped" || ballotStage === "stamping"
              ? "bg-purple-400 animate-pulse"
              : "bg-emerald-400 animate-pulse"
          }`}
        />
        <span className="tracking-wide">
          {ballotStage === "ready" && "🗳️ 2027 Official Ballot • Scroll down to vote"}
          {ballotStage === "stamping" && "✍️ Stamping SDP Horse with Indelible Ink..."}
          {ballotStage === "stamped" && "✅ Vote Cast: Prince Adewole Adebayo (SDP)"}
          {ballotStage === "deposited" && "🎉 Ballot Deposited in Official Box!"}
        </span>
        <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded-full font-mono uppercase tracking-wider">
          3D Polling Unit
        </span>
      </aside>
    </>
  );
}
