import { QrCode, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const QRCodeSection = () => {
  // Generate QR code URL using qr-server.com API
  const currentUrl = window.location.href;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}&bgcolor=FDF2F8&color=BE185D`;

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="card-gradient rounded-2xl p-8 rose-shadow max-w-sm w-full text-center">
        <h3 className="text-xl font-semibold text-black-soft mb-4">
          Share This Love
        </h3>
        
        <div className="relative mb-6">
          <div className="w-48 h-48 mx-auto bg-white rounded-xl p-4 shadow-inner">
            <img 
              src={qrCodeUrl} 
              alt="QR Code to this website"
              className="w-full h-full object-contain"
            />
          </div>
          <Heart className="absolute -top-2 -right-2 w-6 h-6 text-heart-red heart-pulse fill-current" />
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          Scan this QR code to visit this special website
        </p>
        
        <Button 
          variant="outline"
          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          onClick={() => {
            navigator.share?.({
              title: "Happy Birthday Titi!",
              text: "Check out this special birthday website!",
              url: currentUrl
            }) || navigator.clipboard.writeText(currentUrl);
          }}
        >
          <QrCode className="w-4 h-4 mr-2" />
          Share This Site
        </Button>
      </div>
    </div>
  );
};

export default QRCodeSection;