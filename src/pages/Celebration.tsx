import { useState, useEffect } from "react";
import { Sparkles, Music } from "lucide-react";

const Celebration = () => {
  const [stage, setStage] = useState(0);
  const [balloons, setBalloons] = useState<Array<{ id: number; left: number; delay: number }>>([]);
  const [sparkles, setSparkles] = useState<Array<{ id: number; left: number; top: number; delay: number }>>([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCakeClick = () => {
    if (stage < 3) {
      setStage(stage + 1);
      
      if (stage === 1) {
        // Create balloons
        const newBalloons = Array.from({ length: 15 }, (_, i) => ({
          id: i,
          left: Math.random() * 90,
          delay: Math.random() * 2
        }));
        setBalloons(newBalloons);
        
        // Create sparkles
        const newSparkles = Array.from({ length: 30 }, (_, i) => ({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 3
        }));
        setSparkles(newSparkles);
      }
    }
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // In a real app, you'd control audio playback here
  };

  return (
    <div className="min-h-screen birthday-gradient overflow-hidden relative">
      {/* Floating balloons */}
      {stage >= 2 && balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute bottom-0 animate-bounce"
          style={{
            left: `${balloon.left}%`,
            animationDelay: `${balloon.delay}s`,
            animationDuration: '3s'
          }}
        >
          <div className="w-8 h-10 rounded-full bg-gradient-to-b from-red-400 to-red-600 shadow-lg"></div>
          <div className="w-0.5 h-16 bg-gray-600 mx-auto"></div>
        </div>
      ))}

      {/* Floating sparkles */}
      {stage >= 2 && sparkles.map((sparkle) => (
        <Sparkles
          key={sparkle.id}
          className="absolute text-yellow-300 animate-pulse"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: '2s'
          }}
          size={16}
        />
      ))}

      {/* Header */}
      <header className="text-center py-8 px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif">
          🎉 Interactive Celebration 🎉
        </h1>
        <p className="text-xl text-rose-gold-light mb-4">
          Click the cake to start the celebration!
        </p>
        
        {/* Music Toggle */}
        <button
          onClick={toggleMusic}
          className={`flex items-center gap-2 mx-auto px-4 py-2 rounded-full transition-all ${
            isPlaying 
              ? 'bg-rose-gold text-black-soft' 
              : 'bg-white/20 text-white hover:bg-white/30'
          }`}
        >
          <Music className="w-5 h-5" />
          {isPlaying ? 'Music Playing' : 'Play Birthday Song'}
        </button>
      </header>

      {/* Interactive Cake */}
      <div className="flex flex-col items-center justify-center py-8 relative z-10">
        {/* Stage indicators */}
        <div className="mb-6 text-center">
          <p className="text-white text-lg mb-2">
            {stage === 0 && "Click the cake to light the candles! 🕯️"}
            {stage === 1 && "Click again for celebration! 🎈"}
            {stage === 2 && "One more click to cut the cake! 🍰"}
            {stage === 3 && "Celebration complete! 🎉"}
          </p>
        </div>

        {/* Candles */}
        <div className="flex gap-8 mb-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Flame - only visible after first click */}
              {stage >= 1 && (
                <div className="w-3 h-4 bg-gradient-to-t from-yellow-400 to-red-500 rounded-full candle-flame mb-1 animate-pulse"></div>
              )}
              {/* Candle */}
              <div className="w-2 h-8 bg-gradient-to-b from-rose-gold to-rose-gold-dark rounded-sm"></div>
            </div>
          ))}
        </div>
        
        {/* Chocolate Cake */}
        <div 
          className="relative cursor-pointer transform transition-transform hover:scale-105"
          onClick={handleCakeClick}
        >
          {/* Cake Base - Rich Chocolate */}
          <div className="w-80 h-32 bg-gradient-to-b from-amber-900 to-amber-950 rounded-lg shadow-2xl border-4 border-amber-800">
            {/* Chocolate Frosting */}
            <div className="w-full h-8 bg-gradient-to-r from-amber-800 to-amber-900 rounded-t-lg"></div>
            
            {/* Cake cutting line - visible after third click */}
            {stage >= 3 && (
              <div className="absolute top-8 left-20 w-0.5 h-20 bg-white/50 transform rotate-12"></div>
            )}
            
            {/* Name and message on cake */}
            <div className="flex flex-col items-center justify-center h-full pt-2">
              <h2 className="text-2xl font-bold text-white mb-1 font-serif tracking-wider drop-shadow-lg">
                TITI
              </h2>
              {stage >= 3 && (
                <p className="text-sm text-rose-gold-light font-medium animate-fade-in">
                  First piece for Soham ❤️
                </p>
              )}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2">
              <div className="w-6 h-6 text-rose-gold-light animate-pulse">🌹</div>
            </div>
            <div className="absolute -bottom-2 -left-2">
              <div className="w-4 h-4 text-rose-gold-light animate-pulse">💖</div>
            </div>
          </div>
          
          {/* Cake Plate */}
          <div className="w-96 h-4 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full mx-auto mt-2 opacity-80 shadow-lg"></div>
        </div>

        {/* Celebration message */}
        {stage >= 2 && (
          <div className="mt-8 text-center animate-fade-in">
            <h3 className="text-3xl font-bold text-white mb-2">
              🎊 HAPPY BIRTHDAY TITI! 🎊
            </h3>
            <p className="text-xl text-rose-gold-light">
              From Soham with all my love! 💕
            </p>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <div className="bg-black/50 rounded-lg px-4 py-2 backdrop-blur-sm">
          <p className="text-white text-sm">
            Stage {stage + 1}/4 - {stage < 3 ? 'Keep clicking!' : 'Complete! 🎉'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Celebration;