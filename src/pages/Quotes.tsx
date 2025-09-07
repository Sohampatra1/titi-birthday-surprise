import { useState } from "react";
import { Quote, Shuffle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Quotes = () => {
  const quotes = [
    "Life is what happens to you while you're busy making other plans.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It is during our darkest moments that we must focus to see the light.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "The only way to do great work is to love what you do.",
    "Life is really simple, but we insist on making it complicated.",
    "The purpose of our lives is to be happy.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success.",
    "The way to get started is to quit talking and begin doing.",
    "Don't let yesterday take up too much of today.",
    "You learn more from failure than from success.",
    "If you are working on something that you really care about, you don't have to be pushed.",
    "Experience is the teacher of all things.",
    "The only impossible journey is the one you never begin.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Your time is limited, so don't waste it living someone else's life.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier."
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomQuote = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen birthday-gradient py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <Quote className="inline w-12 h-12 mr-4" />
            Inspiring Quotes
            <Quote className="inline w-12 h-12 ml-4" />
          </h1>
          <p className="text-xl text-rose-gold-light">
            Beautiful words for a beautiful soul
          </p>
        </div>

        {/* Quote Display */}
        <div className="card-gradient rounded-2xl p-8 rose-shadow mb-8 animate-fade-in-up">
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="p-8 text-center">
              <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
                <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
                <blockquote className="text-2xl md:text-3xl font-serif text-black-soft leading-relaxed mb-6">
                  "{currentQuote}"
                </blockquote>
                <div className="flex justify-center">
                  <Heart className="w-8 h-8 text-heart-red heart-pulse fill-current" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Random Quote Button */}
        <div className="text-center animate-fade-in-up">
          <Button 
            onClick={getRandomQuote}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rose-shadow"
            size="lg"
          >
            <Shuffle className="w-6 h-6 mr-2" />
            Get Random Quote
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="fixed top-20 left-10 opacity-30">
          <Heart className="w-16 h-16 text-rose-gold-light heart-pulse fill-current" />
        </div>
        <div className="fixed bottom-40 right-10 opacity-30">
          <Heart className="w-12 h-12 text-pink-soft heart-pulse fill-current" />
        </div>
      </div>
    </div>
  );
};

export default Quotes;