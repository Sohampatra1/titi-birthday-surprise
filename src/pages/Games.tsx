import { useState } from "react";
import { Gamepad2, Dice1, Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Games = () => {
  const questions = [
"When we first met, what color was the shirt I was wearing?",
"What about the shirt you were wearing on our first meeting?",
"On our first date, what was the color of the flowers I gave you?",
"What was the first food we shared together, and why do you think I chose it?",
"Describe our first meeting in three words that capture how you felt.",
"What is your most treasured memory from our second date?",
"On our second date, what color shirt was I wearing, and did it catch your eye?",
"What was your favorite moment from our early dates in Kolkata?",
"If you could relive one of our dates, which one would it be and why?",
"What is your favorite place in Kolkata that we've visited together?",
"What is your favorite food we've shared in Kolkata, and what makes it special?",
"What is your favorite color, and has it changed since we met?",
"What is one little thing about our first meeting that still makes you smile?",
"Given the choice of anyone in the world, whom would you want as a dinner guest, and how might that connect to our relationship?",
"Would you like to be famous? In what way, and how would that affect us?",
"What would constitute a 'perfect' day for you now that we're together?",
"If you could wake up tomorrow having gained any one quality or ability, what would it be, and how would you use it in our relationship?",
"What do you value most in our friendship and partnership?",
"What roles do love and affection play in your life with me?",
"Share three things you consider positive characteristics of me as your partner.",
"How close and warm is your family? Do you feel your childhood was happier than most, and how has that shaped our relationship?",
"Make three true 'we' statements about us as a couple.",
"Complete this sentence: 'I wish I had someone with whom I could share...' and explain why.",
"If you were going to become even closer to me, what would be important for me to know?",
"Tell me what you like most about our intimate moments together.",
"Share an embarrassing moment from your life before we met, and how you've grown from it.",
"When did you last cry in front of me or because of something in our relationship?",
"What, if anything, is too serious to be joked about in our partnership?",
"If you knew that in one year you would die suddenly, would you change anything about how we live now?",
"Of all the people in your family, whose death would you find most disturbing, and how would that affect us?",
"Share a personal problem in our relationship and ask for my advice on handling it.",
"What do you want more of in our relationship to make it even stronger?",
"How has our relationship changed you psychologically?",
"What behavioral patterns from your past do you think influence how you love me?",
"If you could change one thing about how we communicate, what would it be?",
"What is one deep fear you have about our future together?"
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