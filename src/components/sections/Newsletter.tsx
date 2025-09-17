import NewsletterSignup from "@/components/ui/newsletter-signup";

const Newsletter = () => {
  return (
    <section id="newsletter" className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Fique por Dentro das Novidades
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Receba conteúdo exclusivo sobre tecnologia, dicas de infraestrutura de TI 
            e atualizações sobre nossos serviços diretamente no seu email.
          </p>
          
          <div className="max-w-lg mx-auto">
            <NewsletterSignup />
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            Prometemos não fazer spam. Você pode cancelar a inscrição a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;