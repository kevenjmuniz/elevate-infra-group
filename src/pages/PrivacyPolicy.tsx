import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Site
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Política de Privacidade
          </h1>
          <p className="text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <div className="max-w-4xl space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Informações Gerais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                A Technova Solutions TI ("nós", "nosso" ou "empresa") está comprometida em proteger 
                e respeitar sua privacidade. Esta política explica como coletamos, usamos e protegemos 
                suas informações pessoais quando você visita nosso site ou utiliza nossos serviços.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Informações que Coletamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold">2.1 Informações fornecidas diretamente por você:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone</li>
                <li>Nome da empresa</li>
                <li>Mensagens e comunicações enviadas através de nossos formulários</li>
              </ul>
              
              <h4 className="font-semibold mt-6">2.2 Informações coletadas automaticamente:</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Endereço IP</li>
                <li>Tipo de navegador e versão</li>
                <li>Sistema operacional</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Dados de cookies e tecnologias similares</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Como Usamos suas Informações</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Responder às suas solicitações e consultas</li>
                <li>Fornecer informações sobre nossos serviços</li>
                <li>Enviar propostas comerciais e orçamentos</li>
                <li>Melhorar nosso site e serviços</li>
                <li>Comunicações de marketing (apenas com seu consentimento)</li>
                <li>Cumprir obrigações legais</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Compartilhamento de Informações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                exceto nas seguintes situações:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Com prestadores de serviços que nos ajudam a operar nosso negócio</li>
                <li>Quando exigido por lei ou autoridades competentes</li>
                <li>Para proteger nossos direitos, propriedade ou segurança</li>
                <li>Com seu consentimento explícito</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Segurança dos Dados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para 
                proteger suas informações pessoais contra acesso não autorizado, alteração, 
                divulgação ou destruição. Isso inclui:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Criptografia de dados em trânsito e em repouso</li>
                <li>Controle de acesso restrito às informações</li>
                <li>Monitoramento regular de nossos sistemas</li>
                <li>Treinamento de funcionários sobre privacidade de dados</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Seus Direitos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Acesso aos seus dados pessoais</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Exclusão de dados pessoais</li>
                <li>Portabilidade dos dados</li>
                <li>Revogação do consentimento</li>
                <li>Informação sobre compartilhamento dos dados</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Nosso site utiliza cookies para melhorar sua experiência de navegação. 
                Os cookies são pequenos arquivos de texto armazenados em seu dispositivo 
                que nos ajudam a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Lembrar suas preferências</li>
                <li>Analisar o tráfego do site</li>
                <li>Personalizar conteúdo</li>
                <li>Melhorar a funcionalidade do site</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Você pode configurar seu navegador para recusar cookies, mas isso pode 
                afetar a funcionalidade do site.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Retenção de Dados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Manteremos suas informações pessoais apenas pelo tempo necessário para 
                cumprir os propósitos descritos nesta política, a menos que um período 
                de retenção mais longo seja exigido ou permitido por lei.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Alterações nesta Política</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Podemos atualizar esta política de privacidade periodicamente. 
                Quaisquer alterações serão publicadas nesta página com a data de 
                atualização. Recomendamos que você revise esta política regularmente.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Se você tiver dúvidas sobre esta política de privacidade ou quiser 
                exercer seus direitos, entre em contato conosco:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>E-mail:</strong> contato@technovasolutionsti.com.br</p>
                <p><strong>Telefone:</strong> (11) 95609-3623</p>
                <p><strong>Endereço:</strong> São Paulo, SP - Brasil</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;