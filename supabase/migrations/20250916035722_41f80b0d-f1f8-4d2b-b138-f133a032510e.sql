-- Create categories table
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create posts table
CREATE TABLE public.posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  category_id UUID REFERENCES public.categories(id),
  published BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tags table
CREATE TABLE public.tags (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create post_tags junction table
CREATE TABLE public.post_tags (
  post_id UUID REFERENCES public.posts(id) ON DELETE CASCADE,
  tag_id UUID REFERENCES public.tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- Enable Row Level Security
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_tags ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (blog is public)
CREATE POLICY "Categories are publicly readable" 
ON public.categories 
FOR SELECT 
USING (true);

CREATE POLICY "Published posts are publicly readable" 
ON public.posts 
FOR SELECT 
USING (published = true);

CREATE POLICY "Tags are publicly readable" 
ON public.tags 
FOR SELECT 
USING (true);

CREATE POLICY "Post tags are publicly readable" 
ON public.post_tags 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_categories_updated_at
BEFORE UPDATE ON public.categories
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_posts_updated_at
BEFORE UPDATE ON public.posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample categories
INSERT INTO public.categories (name, slug, description) VALUES
('Tecnologia', 'tecnologia', 'Artigos sobre tecnologia e inovação'),
('Desenvolvimento', 'desenvolvimento', 'Conteúdo sobre desenvolvimento de software'),
('Design', 'design', 'Artigos sobre design e UX/UI');

-- Insert some sample tags
INSERT INTO public.tags (name, slug) VALUES
('React', 'react'),
('JavaScript', 'javascript'),
('CSS', 'css'),
('HTML', 'html'),
('UX', 'ux'),
('UI', 'ui');

-- Insert a sample post
INSERT INTO public.posts (title, slug, excerpt, content, category_id, published, published_at) VALUES
('Como criar um site moderno com React', 'como-criar-site-moderno-react', 'Aprenda as melhores práticas para desenvolver sites modernos usando React e tecnologias atuais.', 'React é uma das tecnologias mais populares para desenvolvimento frontend. Neste artigo, vamos explorar como criar um site moderno e responsivo.\n\n## Por que React?\n\nReact oferece uma experiência de desenvolvimento incrível com:\n- Componentização\n- Virtual DOM\n- Ecossistema rico\n- Performance otimizada\n\n## Primeiros passos\n\nPara começar com React, você precisa ter Node.js instalado em sua máquina...', (SELECT id FROM public.categories WHERE slug = 'desenvolvimento'), true, now());