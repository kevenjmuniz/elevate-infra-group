-- Add admin policies for creating/editing posts
CREATE POLICY "Allow public to insert posts" 
ON public.posts 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public to update posts" 
ON public.posts 
FOR UPDATE 
USING (true);

CREATE POLICY "Allow public to delete posts" 
ON public.posts 
FOR DELETE 
USING (true);

-- Allow public to insert categories and tags
CREATE POLICY "Allow public to insert categories" 
ON public.categories 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public to insert tags" 
ON public.tags 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public to insert post_tags" 
ON public.post_tags 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Allow public to delete post_tags" 
ON public.post_tags 
FOR DELETE 
USING (true);