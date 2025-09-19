import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import technovaLogo from "@/assets/technova-logo-optimized.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src={technovaLogo} 
              alt="Technova Logo" 
              className="h-10 w-auto mb-6"
              loading="lazy"
            />
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Transformamos tecnologia em soluções eficientes para sua empresa. 
              Especialistas em infraestrutura de TI com foco em qualidade e inovação.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80">(11) 95609-3623</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80">contato@technovasolutionsti.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-primary-foreground/80">São Paulo, SP - Brasil</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/techn.ovasolutions?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <button 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors cursor-not-allowed opacity-50"
                  title="Em breve"
                >
                  <Linkedin className="h-6 w-6" />
                </button>
                <button 
                  className="text-primary-foreground/80 hover:text-secondary transition-colors cursor-not-allowed opacity-50"
                  title="Em breve"
                >
                  <Facebook className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Cabeamento Estruturado</li>
              <li>Virtualização de Servidores</li>
              <li>Gestão de Servidores</li>
              <li>Gestão de Switch</li>
              <li>Monitoramento de ambientes criticos</li>
              <li>Implementação de firewall</li>
              <li>Implementação Pabx</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Technova Solutions TI. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-secondary transition-colors text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
