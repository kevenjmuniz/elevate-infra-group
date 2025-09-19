import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const COOKIE_CONSENT_KEY = "technova-cookie-consent";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já deu consentimento
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-4xl border shadow-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6">
          <div className="flex items-center gap-3 flex-1">
            <Cookie className="h-6 w-6 text-primary flex-shrink-0" />
            <div className="space-y-2">
              <p className="text-sm text-foreground font-medium">
                Este site utiliza cookies
              </p>
              <p className="text-xs text-muted-foreground">
                Utilizamos cookies para melhorar sua experiência de navegação, analisar o tráfego do site e personalizar conteúdo. 
                Ao continuar navegando, você concorda com nossa{" "}
                <Link 
                  to="/privacy-policy" 
                  className="text-primary hover:underline"
                >
                  Política de Privacidade
                </Link>.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={rejectCookies}
              className="text-xs"
            >
              Rejeitar
            </Button>
            <Button
              size="sm"
              onClick={acceptCookies}
              className="text-xs"
            >
              Aceitar Cookies
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieBanner;