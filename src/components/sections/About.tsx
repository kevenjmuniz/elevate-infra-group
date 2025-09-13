import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "200+",
      label: "Clientes Atendidos"
    },
    {
      icon: Award,
      number: "5+",
      label: "Anos de Experiência"
    },
    {
      icon: CheckCircle,
      number: "500+",
      label: "Projetos Concluídos"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Suporte Disponível"
    }
  ];

  const values = [
    {
      title: "Excelência Técnica",
      description: "Utilizamos as melhores práticas e tecnologias mais avançadas do mercado para garantir soluções de alta qualidade."
    },
    {
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe uma solução única, desenvolvida especificamente para suas necessidades e objetivos de negócio."
    },
    {
      title: "Suporte Contínuo",
      description: "Nossa equipe está disponível 24/7 para garantir que sua infraestrutura funcione sempre com máxima eficiência."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sobre a <span className="text-primary">Technova</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Somos uma empresa especializada em soluções tecnológicas completas, oferecendo serviços de 
            infraestrutura de TI com foco em qualidade, confiabilidade e inovação. Nossa missão é 
            transformar a tecnologia em uma vantagem competitiva para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-border/50 hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
        {/*
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Nossa Expertise</h3>
            <p className="text-muted-foreground mb-6">
              Com anos de experiência no mercado de tecnologia, nossa equipe é composta por profissionais 
              certificados e especializados nas principais tecnologias do mercado, incluindo VMware, 
              Microsoft, Cisco e muito mais.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["VMware Certified", "Microsoft Partner", "Cisco Certified", "Zabbix Specialist", "PRTG Expert"].map((cert, index) => (
                <div key={index} className="px-4 py-2 bg-white/50 rounded-full text-sm font-medium text-foreground">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default About;
