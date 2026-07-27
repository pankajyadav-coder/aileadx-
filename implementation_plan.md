# Connect Contact and Demo Forms to Supabase `internal_leads` Table

Yes, this is absolutely possible! We can map the fields from both forms into the single `public.internal_leads` table.

## User Review Required

> [!IMPORTANT]
> Based on your feedback, we will apply these adjustments:
>
> 1. **Make Company Field Required**: 
>    - We will update the HTML `input` fields for the Company Name in both the Contact and Demo forms to have the `required` attribute. This guarantees a company name is always provided and prevents `NOT NULL` constraint violations on `company_name`.
> 
> 2. **Allow Anonymous Submissions**:
>    - Run this SQL in your Supabase SQL Editor to make `created_by` optional:
>      ```sql
>      ALTER TABLE public.internal_leads ALTER COLUMN created_by DROP NOT NULL;
>      ```
> 
> 3. **Row Level Security (RLS)**:
>    - Run this SQL to allow public inserts:
>      ```sql
>      CREATE POLICY "Allow public inserts to internal_leads" 
>      ON public.internal_leads 
>      FOR INSERT 
>      TO anon, authenticated 
>      WITH CHECK (true);
>      ```
> 
> 4. **`industry_type` Enum mapping (Using `'other'`)**:
>    - Since you will run `ALTER TYPE public.industry_type ADD VALUE IF NOT EXISTS 'other';`, we can map both "Coaching & Consulting" and "Other" to `'other'`.
>    - The final mapping for the Demo Form will be:
>      - Real Estate (`real-estate`) -> `'real_estate'`
>      - Automobile (`automobile`) -> `'automobile_dealers'`
>      - Coaching & Consulting (`coaching`) -> `'other'`
>      - Other (`other`) -> `'other'`
>    - The Contact Form will default to `'other'`.

## Proposed Changes

We will create a Supabase client configuration and update both forms to insert records into the `public.internal_leads` table.

### Supabase Integration

#### [NEW] [supabase.ts](file:///c:/Users/mayan/Downloads/aileadx--pankajyadav/src/lib/supabase.ts)
Create a helper to initialize the Supabase client using environment variables.

### Forms Update

#### [MODIFY] [Contact.tsx](file:///c:/Users/mayan/Downloads/aileadx--pankajyadav/src/pages/Contact.tsx)
- Import the Supabase client.
- Set the `company` input field as `required`.
- Map the contact form fields to the table:
  - `lead_name` <- `formData.name`
  - `email` <- `formData.email`
  - `company_name` <- `formData.company`
  - `phone_no` <- `formData.phone || null`
  - `address` <- `formData.message` (storing the message text in the `address` field since there is no `message` column)
  - `industry` <- `'other'` (defaulting to the newly added `'other'` option)
  - `stage` <- `'new'` (default stage)

#### [MODIFY] [Demo.tsx](file:///c:/Users/mayan/Downloads/aileadx--pankajyadav/src/pages/Demo.tsx)
- Import the Supabase client.
- Map the demo form fields to the table:
  - `lead_name` <- `${formData.firstName} ${formData.lastName}`
  - `email` <- `formData.email`
  - `phone_no` <- `formData.phone || null`
  - `company_name` <- `formData.company`
  - `industry` <- Map frontend select value to database enum (e.g. `real-estate` -> `real_estate`, `automobile` -> `automobile_dealers`, `coaching`/`other` -> `other`)
  - `stage` <- `'demo_scheduled'`

## Verification Plan

### Manual Verification
- Create a `.env` file containing the Supabase credentials.
- Fill out the Contact Form and submit; verify that a new row is successfully inserted into the `internal_leads` table.
- Fill out the Demo Form and submit; verify that a new row is successfully inserted with the `stage` set to `'demo_scheduled'`.
