-- ===================================================
-- PAA 2027 CAMPAIGN DATABASE SETUP SCRIPT
-- Paste this into your Supabase SQL Editor and click RUN
-- ===================================================

-- 1. Table for Movement Members (Join Movement)
CREATE TABLE IF NOT EXISTS public.movement_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    state TEXT,
    volunteer_interests TEXT[] DEFAULT '{}'
);

-- Enable RLS for movement_members
ALTER TABLE public.movement_members ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors to submit (Insert)
CREATE POLICY "Allow public insert to movement_members" 
ON public.movement_members FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Allow public/authenticated read (Admin Dashboard)
CREATE POLICY "Allow read on movement_members" 
ON public.movement_members FOR SELECT 
TO anon, authenticated
USING (true);


-- 2. Table for Citizen Surveys
CREATE TABLE IF NOT EXISTS public.citizen_surveys (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    email TEXT NOT NULL,
    zone TEXT NOT NULL,
    age_range TEXT NOT NULL,
    gender TEXT NOT NULL,
    direction TEXT NOT NULL,
    national_mission TEXT NOT NULL,
    security_policy TEXT NOT NULL,
    cost_of_living TEXT,
    youth_plan TEXT,
    welfare_commitment TEXT,
    support_likelihood TEXT,
    newsletter_consent BOOLEAN DEFAULT true
);

-- Enable RLS for citizen_surveys
ALTER TABLE public.citizen_surveys ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors to submit (Insert)
CREATE POLICY "Allow public insert to citizen_surveys" 
ON public.citizen_surveys FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Allow public/authenticated read (Admin Dashboard)
CREATE POLICY "Allow read on citizen_surveys" 
ON public.citizen_surveys FOR SELECT 
TO anon, authenticated
USING (true);


-- 3. Table for Official Contact Messages
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT DEFAULT 'General Inquiry',
    message TEXT NOT NULL
);

-- Enable RLS for contact_messages
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors to submit (Insert)
CREATE POLICY "Allow public insert to contact_messages" 
ON public.contact_messages FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Allow read on contact_messages for Admin Dashboard
CREATE POLICY "Allow read on contact_messages" 
ON public.contact_messages FOR SELECT 
TO anon, authenticated
USING (true);
