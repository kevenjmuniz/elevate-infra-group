import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: [] as string[],
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return { ...prev, service: [...prev.service, value] };
      } else {
        return { ...prev, service: prev.service.filter((s) => s !== value) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      toast({
        title: "Verificação necessária",
        description: "Por favor, complete a verificação reCAPTCHA.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service:
          formData.service.length > 0
            ? `{${formData.service.join(",")}}`
            : "{}", // formato array do Postgres
        message: formData.message,
        source: "Technova Website",
        recaptcha_token: recaptchaToken,
      };

      const { error } = await supabase.from("contact_messages").insert([payload]);

      if (error) throw error;

      toast({
        title: "Mensagem enviada com sucesso!",
        description:
          "Recebemos sua solicitação e entraremos em contato em breve. Obrigado!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: [],
        message: "",
      });
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro no envio",
        description:
          "Ocorreu um erro ao enviar sua mensagem. Tente novamente ou entre em contato pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(11) 95609-3623",
      link: "tel:+5511956093623",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@technovasolutionsti.com.br",
      link: "mailto:contato@technovasolutionsti.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "São Paulo, SP - Brasil",
      link: "#",
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg à Sex: 8h às 18h",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar sua infraestrutura de TI? Fale conosco e descubra
            como podemos ajudar sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Solicite um Orçamento</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(11) 95609-3623"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="mb-2 block">Serviços de Interesse</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        "Cabeamento Estruturado",
                        "Virtualização",
                        "Monitoramento",
                        "Consultoria em TI",
                        "Backup & Recuperação",
                        "Cloud Computing",
                      ].map((service) => (
                        <label
                          key={service}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="checkbox"
                            name="service"
                            value={service}
                            checked={formData.service.includes(service)}
                            onChange={handleCheckboxChange}
                            className="rounded border-gray-300"
                          />
                          <span>{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Descreva suas necessidades e como podemos ajudar..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>

                  <div className="flex justify-center mb-4">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6Lf8s8orAAAAAMsrkqTGrPQB12hzMhQ-5DXIO0A0"
                      onChange={(token) => setRecaptchaToken(token)}
                      onExpired={() => setRecaptchaToken(null)}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isLoading || !recaptchaToken}
                  >
                    {isLoading ? "Enviando..." : "Enviar Solicitação"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {info.title}
                          </h4>
                          {info.link && info.link !== "#" ? (
                            <a
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-colors break-all"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground break-all">
                              {info.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Atendimento Especializado
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nossa equipe técnica está pronta para analisar suas necessidades e
                  propor a melhor solução para sua empresa. Oferecemos consultoria
                  gratuita e orçamentos personalizados.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Consultoria técnica gratuita
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Orçamento sem compromisso
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Resposta em até 24 horas
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Atendimento personalizado
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
