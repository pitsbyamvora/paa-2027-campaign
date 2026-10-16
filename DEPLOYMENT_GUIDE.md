# PAA 2027 Presidential Campaign Website
## Deployment & Setup Guide (GitHub, Supabase & Vercel)

---

### Step 1: Set Up Supabase Database (Takes 3 mins)
1. Go to [https://supabase.com](https://supabase.com) and click **Start your project** (Free).
2. Create a new organization and project (e.g. `paa-2027-campaign`).
3. Once created, in the left sidebar, click on **SQL Editor**.
4. Click **New Query** and copy & paste the contents of `supabase-schema.sql` (found in your project root) into the editor.
5. Click **Run** (green button). This creates the two tables:
   - `movement_members`
   - `citizen_surveys`
6. Now go to **Project Settings** (gear icon at bottom left) -> **API**.
7. Copy your:
   - **Project URL**
   - **anon / public key**

You will need these two values for Vercel and your `.env.local`.

---

### Step 2: Push to GitHub (Takes 2 mins)
1. Go to [https://github.com](https://github.com) and click **New Repository**.
2. Name it `paa-2027-campaign` (choose Private or Public) and click **Create repository**.
3. In your terminal in this project folder (`c:\Users\USERR\Documents\antigravity\splendid-oppenheimer`), run:

```bash
git add .
git commit -m "feat: complete PAA 2027 presidential campaign website and admin dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/paa-2027-campaign.git
git push -u origin main
```

*(Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username)*

---

### Step 3: Deploy to Vercel (Takes 2 mins)
1. Go to [https://vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New...** -> **Project**.
3. Select your newly pushed `paa-2027-campaign` repository and click **Import**.
4. Expand **Environment Variables** and add these:
   - `NEXT_PUBLIC_SUPABASE_URL` = (Your Supabase Project URL from Step 1)
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = (Your Supabase anon key from Step 1)
   - `NEXT_PUBLIC_ADMIN_PIN` = `2027` (or any custom pass-key for your admin panel)
5. Click **Deploy**!
6. In about 60 seconds, your site is live with a free SSL link like `paa-2027.vercel.app`!

---

### Step 4: Access Your Campaign Admin Dashboard
- Go to `https://your-site.vercel.app/admin` (or `http://localhost:3000/admin` locally).
- Enter the pass-key: `2027`.
- You can now view all:
  1. **Registered Movement Members** (Names, emails, phone numbers, state, volunteer choices).
  2. **Citizen Survey Responses** (Demographics, state zone, policy priorities).
  3. Search and filter by name, state, or topic in real-time.
