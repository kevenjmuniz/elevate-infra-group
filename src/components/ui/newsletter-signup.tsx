import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanEmail = email.toLowerCase().trim();
    const cleanName = name.trim() || null;

    if (!cleanEmail) {
      toast({
        title: "Email obrigatório",
        description: "Por favor, insira seu email para se inscrever.",
        variant: "destructive",
      });
      return;
    }

    // (opcional) validação simples de formato
    if (!/^\S+@\S+\.\S+$/.test(cleanEmail)) {
      toast({
        title: "Email inválido",
        description: "Verifique o endereço de email e tente novamente.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: cleanEmail, name: cleanName }]);

      if (error) {
        if ((error as any).code === '23505') {
          // unique_violation no Postgres
          toast({
            title: "Email já cadastrado",
            description: "Este email já está inscrito na nossa newsletter.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Inscrição realizada!",
          description: "Você foi inscrito com sucesso na nossa newsletter.",
        });
        setEmail('');
        setName('');
      }
    } catch (err) {
      console.error('Erro ao inscrever na newsletter:', err);
      toast({
        title: "Erro na inscrição",
        description: "Ocorreu um erro ao processar sua inscrição. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
      <div className="flex items-center space-x-2 mb-4">
        <Mail className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Newsletter</h3>
      </div>
      <p className="text-muted-foreground mb-4">
        Receba novidades sobre tecnologia e nossas soluções diretamente no seu email.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="text"
          placeholder="Seu nome (opcional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full"
        />
        <Input
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full"
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Inscrevendo...' : 'Inscrever-se'}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
