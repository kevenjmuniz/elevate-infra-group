-- Create newsletter subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true,
  unsubscribe_token TEXT DEFAULT gen_random_uuid()
);

-- Enable Row Level Security
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create policies for newsletter subscribers
CREATE POLICY "Anyone can subscribe to newsletter" 
ON public.newsletter_subscribers 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view all subscribers" 
ON public.newsletter_subscribers 
FOR SELECT 
USING (is_admin(auth.uid()));

CREATE POLICY "Admins can update subscribers" 
ON public.newsletter_subscribers 
FOR UPDATE 
USING (is_admin(auth.uid()));

CREATE POLICY "Admins can delete subscribers" 
ON public.newsletter_subscribers 
FOR DELETE 
USING (is_admin(auth.uid()));

-- Allow unsubscribe via token (without authentication)
CREATE POLICY "Allow unsubscribe via token" 
ON public.newsletter_subscribers 
FOR UPDATE 
USING (true)
WITH CHECK (is_active = false);

-- Create index for better performance
CREATE INDEX idx_newsletter_subscribers_email ON public.newsletter_subscribers(email);
CREATE INDEX idx_newsletter_subscribers_active ON public.newsletter_subscribers(is_active);

-- Create trigger for timestamp updates
CREATE TRIGGER update_newsletter_subscribers_updated_at
BEFORE UPDATE ON public.newsletter_subscribers
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();