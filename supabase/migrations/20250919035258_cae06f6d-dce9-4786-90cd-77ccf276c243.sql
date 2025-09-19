-- This migration regenerates the types to include the contact_messages table
-- The table already exists with proper RLS policies, we just need to ensure types are updated

-- Verify contact_messages table structure and RLS policies are correct
-- Table already exists with:
-- - id (uuid, primary key)
-- - name (text, not null)  
-- - email (text, not null)
-- - phone (text, nullable)
-- - company (text, nullable)
-- - service (text array, nullable)
-- - message (text, not null)
-- - created_at (timestamp, not null, default now())
-- - source (text, nullable, default 'site')

-- RLS policies are already properly configured:
-- - contact_messages_insert_anon: allows public inserts (needed for contact forms)
-- - contact_messages_select_admin: only admins can read
-- - contact_messages_update_admin: only admins can update  
-- - contact_messages_delete_admin: only admins can delete

-- This is a no-op migration to trigger type regeneration
SELECT 1;