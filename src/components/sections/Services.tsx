import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Network, 
  Server, 
  Settings, 
  Monitor, 
  Cable, 
  Shield 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cable,
      title: "Cabeamento Estruturado",
      description: "Instalação e manutenção de infraestrutura de rede com padrões internacionais de qualidade.",
      features: ["Certificação de cabos", "Projeto técnico", "Documentação completa", "Garantia estendida"]
    },
    {
      icon: Server,
      title: "Virtualização de Servidores",
      description: "Soluções completas em virtualização para otimizar recursos e reduzir custos operacionais.",
      features: ["VMware vSphere", "Hyper-V", "Migração de sistemas", "Backup automatizado"]
    },
    {
      icon: Settings,
      title: "Gestão de Servidores",
      description: "Administração completa da sua infraestrutura de servidores com monitoramento 24/7.",
      features: ["Manutenção preventiva", "Atualizações de segurança", "Otimização de performance", "Relatórios detalhados"]
    },
    {
      icon: Network,
      title: "Gestão de Switch",
      description: "Configuração e gerenciamento de switches para redes corporativas de alta performance.",
      features: ["VLANs configuradas", "QoS implementado", "Segurança de rede", "Balanceamento de carga"]
    },
    {
      icon: Monitor,
      title: "Monitoramento Zabbix",
      description: "Monitoramento proativo da infraestrutura com Zabbix para máxima disponibilidade.",
      features: ["Alertas em tempo real", "Dashboards personalizados", "Métricas detalhadas", "Histórico completo"]
    },
    {
      icon: Shield,
      title: "Monitoramento PRTG",
      description: "Solução avançada de monitoramento de rede com PRTG para visibilidade completa.",
      features: ["Monitoramento de bandwidth", "Análise de tráfego", "Sensores customizados", "Relatórios automáticos"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em tecnologia para impulsionar o crescimento da sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={scrollToContact}
            className="text-lg px-8 py-4"
          >
            Solicite um Orçamento Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;