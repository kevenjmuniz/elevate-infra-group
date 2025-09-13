import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import technovaLogo from "@/assets/technova-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src={technovaLogo} 
              alt="Technova Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                Contato
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" onClick={() => scrollToSection('contact')}>
              Orçamento
            </Button>
            <Button variant="default" onClick={() => scrollToSection('contact')}>
              Fale Conosco
            </Button>
          </div>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button 
                onClick={() => scrollToSection('home')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Contato
              </button>
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" className="w-full" onClick={() => scrollToSection('contact')}>
                  Orçamento
                </Button>
                <Button variant="default" className="w-full" onClick={() => scrollToSection('contact')}>
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;