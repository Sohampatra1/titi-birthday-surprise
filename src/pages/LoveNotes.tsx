import { useState } from "react";
import { Gift, Heart, Shuffle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LoveNotes = () => {
  const loveNotes = [
    "You are my sunshine on the cloudiest days",
    "You are my favorite notification",
    "You are my heart's greatest adventure",
    "You are my perfect cup of coffee in the morning",
    "You are my favorite reason to smile",
    "You are my safe haven in this crazy world",
    "You are my favorite melody",
    "You are my lucky star",
    "You are my sweetest dream come true",
    "You are my favorite chapter in life's book",
    "You are my rainbow after every storm",
    "You are my favorite feeling",
    "You are my home, wherever we are",
    "You are my greatest blessing",
    "You are my favorite hello and hardest goodbye",
    "You are my inspiration every single day",
    "You are my favorite thought",
    "You are my heart's compass",
    "You are my forever and always",
    "You are my favorite kind of magic",
    "You are my peace in the midst of chaos",
    "You are my favorite love song",
    "You are my brightest light",
    "You are my sweetest addiction",
    "You are my favorite view",
    "You are my heart's perfect match",
    "You are my favorite daydream",
    "You are my strongest motivation",
    "You are my favorite color in life's palette",
    "You are my everything and more"
  ];

  const [currentNote, setCurrentNote] = useState("");
  const [noteIndex, setNoteIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomNote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * loveNotes.length);
      } while (randomIndex === noteIndex && loveNotes.length > 1);
      
      setNoteIndex(randomIndex);
      setCurrentNote(loveNotes[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  const showAllNotes = () => {
    // This will show all notes at once
    setCurrentNote("all");
  };

  return (
    <div className="min-h-screen birthday-gradient py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <Gift className="inline w-12 h-12 mr-4" />
            Love Notes
            <Gift className="inline w-12 h-12 ml-4" />
          </h1>
          <p className="text-xl text-rose-gold-light">
            Sweet messages just for you, Titi ❤️
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up">
          <Button 
            onClick={getRandomNote}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rose-shadow"
            size="lg"
          >
            <Shuffle className="w-6 h-6 mr-2" />
            Random Love Note
          </Button>
          
          <Button 
            onClick={showAllNotes}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black-soft px-8 py-6 text-lg"
            size="lg"
          >
            <Sparkles className="w-6 h-6 mr-2" />
            Show All Notes
          </Button>
        </div>

        {/* Single Note Display */}
        {currentNote && currentNote !== "all" && (
          <div className="card-gradient rounded-2xl p-8 rose-shadow mb-8 animate-fade-in-up">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-8 text-center">
                <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
                  <Heart className="w-12 h-12 text-heart-red mx-auto mb-6 heart-pulse fill-current" />
                  <p className="text-3xl md:text-4xl font-serif text-black-soft leading-relaxed mb-6">
                    "{currentNote}"
                  </p>
                  <div className="flex justify-center gap-2">
                    <Heart className="w-6 h-6 text-heart-red heart-pulse fill-current" />
                    <Heart className="w-8 h-8 text-heart-red heart-pulse fill-current" />
                    <Heart className="w-6 h-6 text-heart-red heart-pulse fill-current" />
                  </div>
                  <p className="text-lg text-muted-foreground mt-4">
                    - With all my love, Soham 💕
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* All Notes Display */}
        {currentNote === "all" && (
          <div className="grid gap-6 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
              All My Love Notes For You ❤️
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loveNotes.map((note, index) => (
                <Card key={index} className="card-gradient border-0 rose-shadow hover:scale-105 transition-transform">
                  <CardContent className="p-6 text-center">
                    <Heart className="w-6 h-6 text-heart-red mx-auto mb-4 heart-pulse fill-current" />
                    <p className="text-lg font-medium text-black-soft">
                      "{note}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <p className="text-2xl text-white font-serif">
                Every single one is true, my love 💕
              </p>
              <p className="text-xl text-rose-gold-light mt-4">
                - Forever yours, Soham
              </p>
            </div>
          </div>
        )}

        {/* Initial Message */}
        {!currentNote && (
          <div className="text-center animate-fade-in-up">
            <div className="card-gradient rounded-2xl p-12 rose-shadow">
              <Heart className="w-16 h-16 text-heart-red mx-auto mb-6 heart-pulse fill-current" />
              <p className="text-2xl text-black-soft font-serif mb-4">
                "Choose an option above to read beautiful messages written just for you!"
              </p>
              <p className="text-lg text-muted-foreground">
                Each note comes straight from my heart ❤️
              </p>
            </div>
          </div>
        )}

        {/* Floating Hearts */}
        <div className="fixed top-32 left-8 opacity-20">
          <Heart className="w-12 h-12 text-rose-gold-light heart-pulse fill-current" />
        </div>
        <div className="fixed top-48 right-12 opacity-20">
          <Heart className="w-8 h-8 text-pink-soft heart-pulse fill-current" />
        </div>
        <div className="fixed bottom-48 left-16 opacity-20">
          <Heart className="w-10 h-10 text-heart-red heart-pulse fill-current" />
        </div>
      </div>
    </div>
  );
};

export default LoveNotes;