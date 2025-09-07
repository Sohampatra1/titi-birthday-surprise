import { Heart, Sparkles } from "lucide-react";
import BirthdayCake from "@/components/BirthdayCake";
import QRCodeSection from "@/components/QRCodeSection";
import titi1 from "@/assets/titi-1.jpg";
import titi2 from "@/assets/titi-2.jpg";

const Home = () => {
  return (
    <div className="min-h-screen birthday-gradient">
      {/* Header */}
      <header className="text-center py-12 px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif">
            Happy Birthday
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-rose-gold-light mb-6">
            TITI
          </h2>
          <div className="flex justify-center items-center gap-4 text-white">
            <Heart className="w-8 h-8 heart-pulse fill-current" />
            <p className="text-xl">With Love from Soham</p>
            <Heart className="w-8 h-8 heart-pulse fill-current" />
          </div>
        </div>
      </header>

      {/* Birthday Cake */}
      <section className="animate-fade-in-up">
        <BirthdayCake />
      </section>

      {/* Photo Gallery */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            <Sparkles className="inline w-8 h-8 mr-2" />
            Beautiful Memories
            <Sparkles className="inline w-8 h-8 ml-2" />
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-gradient rounded-2xl p-6 rose-shadow animate-fade-in-up">
              <img 
                src={titi1} 
                alt="Titi in blue dress" 
                className="w-full h-80 object-cover rounded-xl mb-4"
              />
              <p className="text-center text-black-soft font-medium">
                Looking absolutely stunning! 💙
              </p>
            </div>
            
            <div className="card-gradient rounded-2xl p-6 rose-shadow animate-fade-in-up">
              <img 
                src={titi2} 
                alt="Titi in red saree" 
                className="w-full h-80 object-cover rounded-xl mb-4"
              />
              <p className="text-center text-black-soft font-medium">
                Gorgeous in traditional wear! ❤️
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="py-12 px-4">
        <QRCodeSection />
      </section>

      {/* Love Message */}
      <section className="py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto card-gradient rounded-2xl p-8 rose-shadow">
          <h3 className="text-2xl font-bold text-black-soft mb-4">
            A Special Day for a Special Person
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Today is all about celebrating YOU, Titi! Your smile lights up every room, 
            your laughter is the sweetest sound, and your presence makes everything better. 
            May this new year bring you endless joy, love, and beautiful moments.
          </p>
          <div className="flex justify-center mt-6">
            <Heart className="w-12 h-12 text-heart-red heart-pulse fill-current" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;