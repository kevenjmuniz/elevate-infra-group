import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-secondary/20 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
            Soluções Tecnológicas
            <span className="block text-secondary">Completas</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Transformamos sua infraestrutura de TI com soluções profissionais em cabeamento estruturado, 
            virtualização de servidores e monitoramento avançado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection('services')}
              className="group text-lg px-8 py-4"
            >
              Nossos Serviços
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Solicitar Orçamento
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Shield className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Segurança</h3>
              <p className="text-primary-foreground/80">
                Infraestrutura segura e confiável para sua empresa
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Zap className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-primary-foreground/80">
                Otimização máxima da sua rede e servidores
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <Users className="h-12 w-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Suporte 24/7</h3>
              <p className="text-primary-foreground/80">
                Equipe especializada sempre disponível
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;