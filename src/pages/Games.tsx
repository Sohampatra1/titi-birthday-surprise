import { useState } from "react";
import { Gamepad2, Dice1, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Games = () => {
  const questions = [
    "What's your favorite memory of us together?",
    "If you could travel anywhere in the world, where would you go?",
    "What's one thing that never fails to make you smile?",
    "Describe your perfect day in three words.",
    "What's your biggest dream for the future?",
    "What song always puts you in a good mood?",
    "If you could have dinner with anyone, who would it be?",
    "What's the best compliment you've ever received?",
    "What's something you've always wanted to learn?",
    "What's your favorite thing about yourself?",
    "If you could have any superpower, what would it be?",
    "What's the most adventurous thing you've ever done?",
    "What makes you feel most grateful?",
    "What's your favorite way to spend a rainy day?",
    "If you could relive one day, which would it be?"
  ];

  const dares = [
"Give me a 5-minute blowjob while looking into my eyes.",
"Lick my pussy slowly and teasingly for 3 minutes.",
"Fuck me in doggy style until I moan your name.",
"Bend over and let me take you in missionary position.",
"Get into the 69 position and pleasure each other simultaneously.",
"Ride me reverse cowgirl style while I spank you.",
"Suck my nipples while fingering me deeply.",
"Let me tie your hands and fuck you from behind.",
"Spread your legs and let me eat you out until you cum.",
"Give me a handjob while whispering dirty things in my ear.",
"Fuck me against the wall in standing position.",
"Do the spooning position and thrust slowly inside me.",
"Lick my balls while stroking my cock.",
"Sit on my face and grind until you orgasm.",
"Let me cum on your tits after tit-fucking you.",
"Deepthroat my cock for as long as you can.",
"Finger my pussy while sucking my tits.",
"Let me fuck your tits until I cum.",
"Ride my face in cowgirl position.",
"Use a vibrator on your clit while I watch.",
"Squeeze my balls during a blowjob with a big smile.",
"Cum on my face after I blow you.",
"Fuck me in the shower doggy style.",
"Do reverse 69 and eat me out from below.",
"Spank my ass red while fucking from behind.",
"Let me choke you lightly while pounding missionary.",
"Play with your tits while riding me cowgirl.",
"Suck and bite my nipples until I beg for more.",
"Oil up your tits and give me a slippery titjob.",
"Bounce your tits while riding my cock hard.",
"Let me motorboat your tits for 30 seconds.",
"Pinch your nipples while I fuck you missionary."
];

  const [currentItem, setCurrentItem] = useState("");
  const [gameType, setGameType] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomItem = (type: string) => {
    setIsAnimating(true);
    setGameType(type);
    
    setTimeout(() => {
      if (type === "question") {
        const randomIndex = Math.floor(Math.random() * questions.length);
        setCurrentItem(questions[randomIndex]);
      } else {
        const randomIndex = Math.floor(Math.random() * dares.length);
        setCurrentItem(dares[randomIndex]);
      }
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen birthday-gradient py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <Gamepad2 className="inline w-12 h-12 mr-4" />
            Fun Games
            <Gamepad2 className="inline w-12 h-12 ml-4" />
          </h1>
          <p className="text-xl text-rose-gold-light">
            Let's have some fun together!
          </p>
        </div>

        {/* Game Buttons */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="card-gradient border-0 rose-shadow animate-fade-in-up hover:scale-105 transition-transform">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-black-soft">
                <Sparkles className="inline w-8 h-8 mr-2" />
                Random Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Get thought-provoking and fun questions to answer!
              </p>
              <Button 
                onClick={() => getRandomItem("question")}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rose-shadow"
              >
                <Dice1 className="w-6 h-6 mr-2" />
                Get Random Question
              </Button>
            </CardContent>
          </Card>

          <Card className="card-gradient border-0 rose-shadow animate-fade-in-up hover:scale-105 transition-transform">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-black-soft">
                <Heart className="inline w-8 h-8 mr-2" />
                Fun Dares
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Get fun and silly dares to complete!
              </p>
              <Button 
                onClick={() => getRandomItem("dare")}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-6 text-lg rose-shadow"
              >
                <Dice1 className="w-6 h-6 mr-2" />
                Get Random Dare
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Display Area */}
        {currentItem && (
          <div className="card-gradient rounded-2xl p-8 rose-shadow animate-fade-in-up">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-8 text-center">
                <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
                  <div className="mb-6">
                    {gameType === "question" ? (
                      <Sparkles className="w-12 h-12 text-primary mx-auto" />
                    ) : (
                      <Heart className="w-12 h-12 text-heart-red mx-auto heart-pulse fill-current" />
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-black-soft mb-4">
                    {gameType === "question" ? "Your Question:" : "Your Dare:"}
                  </h3>
                  
                  <p className="text-2xl md:text-3xl font-serif text-black-soft leading-relaxed mb-6">
                    {currentItem}
                  </p>
                  
                  <div className="flex justify-center gap-2">
                    <Heart className="w-6 h-6 text-heart-red heart-pulse fill-current" />
                    <Heart className="w-8 h-8 text-heart-red heart-pulse fill-current" />
                    <Heart className="w-6 h-6 text-heart-red heart-pulse fill-current" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Instructions */}
        {!currentItem && (
          <div className="text-center animate-fade-in-up">
            <p className="text-xl text-white/80">
              Choose a game above to get started! 🎮
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;