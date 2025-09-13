import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "5511956093623";
  const message = "Olá! Gostaria de saber mais sobre os serviços da Technova.";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-8 w-8 group-hover:scale-110 transition-transform" />
      </Button>
    </div>
  );
};

export default WhatsAppButton;