-- Remove dangerous public modification policies for posts
DROP POLICY IF EXISTS "Allow public to delete posts" ON public.posts;
DROP POLICY IF EXISTS "Allow public to insert posts" ON public.posts;
DROP POLICY IF EXISTS "Allow public to update posts" ON public.posts;

-- Remove dangerous public modification policies for categories
DROP POLICY IF EXISTS "Allow public to insert categories" ON public.categories;

-- Remove dangerous public modification policies for tags
DROP POLICY IF EXISTS "Allow public to insert tags" ON public.tags;

-- Remove dangerous public modification policies for post_tags
DROP POLICY IF EXISTS "Allow public to insert post_tags" ON public.post_tags;
DROP POLICY IF EXISTS "Allow public to delete post_tags" ON public.post_tags;

-- Now only admin-restricted policies remain for content management:
-- - admins insert/update/delete posts
-- - admins insert/update/delete categories  
-- - admins insert/update/delete tags
-- - admins insert/delete post_tags
-- Public users can only read published content