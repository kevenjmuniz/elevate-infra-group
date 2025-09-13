import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "5511956093623";
  
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    const win = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (!win) {
      window.location.href = whatsappUrl;
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="rounded-full w-16 h-16 bg-secondary text-secondary-foreground shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;
