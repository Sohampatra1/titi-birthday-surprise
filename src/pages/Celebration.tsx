import { useState, useEffect, useRef } from "react";
import { Sparkles, Music, Play, Pause } from "lucide-react";

const Celebration = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [balloons, setBalloons] = useState<Array<{ id: number; left: number; color: string; delay: number; size: number }>>([]);
  const [stars, setStars] = useState<Array<{ id: number; left: number; top: number; delay: number; size: number }>>([]);
  const [fireworks, setFireworks] = useState<Array<{ id: number; left: number; top: number; delay: number }>>([]);
  const videoRef = useRef<HTMLVideoElement>(null);

  const balloonColors = ['bg-red-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400', 'bg-blue-400', 'bg-orange-400'];

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
        startCelebration();
      }
    }
  };

  const startCelebration = () => {
    if (!showCelebration) {
      setShowCelebration(true);
      
      // Create floating balloons
      const newBalloons = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: Math.random() * 95,
        color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
        delay: Math.random() * 4,
        size: 8 + Math.random() * 4
      }));
      setBalloons(newBalloons);
      
      // Create glittering stars
      const newStars = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 3,
        size: 12 + Math.random() * 8
      }));
      setStars(newStars);
      
      // Create fireworks
      const newFireworks = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: 20 + Math.random() * 60,
        top: 20 + Math.random() * 40,
        delay: Math.random() * 2
      }));
      setFireworks(newFireworks);
    }
  };

  return (
    <div className="min-h-screen birthday-gradient overflow-hidden relative">
      {/* Floating balloons flowing upward */}
      {showCelebration && balloons.map((balloon) => (
        <div
          key={balloon.id}
          className={`absolute ${balloon.color} rounded-full balloon-float shadow-lg`}
          style={{
            left: `${balloon.left}%`,
            width: `${balloon.size}px`,
            height: `${balloon.size * 1.2}px`,
            animationDelay: `${balloon.delay}s`,
            bottom: '-20px'
          }}
        >
          <div className="w-0.5 h-8 bg-gray-600 mx-auto mt-2 opacity-70"></div>
        </div>
      ))}

      {/* Glittering stars */}
      {showCelebration && stars.map((star) => (
        <Sparkles
          key={star.id}
          className="absolute text-yellow-300 animate-pulse star-twinkle"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
          }}
          size={star.size}
        />
      ))}

      {/* Fireworks/Blasters */}
      {showCelebration && fireworks.map((firework) => (
        <div
          key={firework.id}
          className="absolute firework"
          style={{
            left: `${firework.left}%`,
            top: `${firework.top}%`,
            animationDelay: `${firework.delay}s`,
          }}
        >
          <div className="w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="w-3 h-3 bg-red-400 rounded-full animate-ping absolute top-0 left-0" style={{animationDelay: '0.5s'}}></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping absolute top-0 left-0" style={{animationDelay: '1s'}}></div>
        </div>
      ))}

      {/* Header */}
      <header className="text-center py-8 px-4 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif">
          🎉 Birthday Video Celebration 🎉
        </h1>
        <p className="text-xl text-rose-gold-light mb-4">
          Click the video to start the celebration!
        </p>
      </header>

      {/* Video Player Section */}
      <div className="flex flex-col items-center justify-center py-8 relative z-10">
        <div className="relative">
          {/* Video Player */}
          <div 
            className="relative cursor-pointer transform transition-transform hover:scale-105 rounded-lg overflow-hidden shadow-2xl"
            onClick={handleVideoClick}
          >
            <video
              ref={videoRef}
              className="w-96 h-64 bg-black rounded-lg"
              poster="/placeholder-video-poster.jpg"
              muted
              loop
            >
              <source src="/assets/birthday-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play/Pause Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-lg">
              {!isVideoPlaying ? (
                <div className="bg-white/90 rounded-full p-4 shadow-lg">
                  <Play className="w-8 h-8 text-black ml-1" />
                </div>
              ) : (
                <div className="bg-white/90 rounded-full p-4 shadow-lg opacity-0 hover:opacity-100 transition-opacity">
                  <Pause className="w-8 h-8 text-black" />
                </div>
              )}
            </div>
          </div>
          
          {/* Video Title */}
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-2 font-serif tracking-wider drop-shadow-lg">
              Special Birthday Message for TITI
            </h2>
            <p className="text-rose-gold-light">
              From Soham with love 💕
            </p>
          </div>
        </div>

        {/* Celebration message */}
        {showCelebration && (
          <div className="mt-8 text-center animate-fade-in">
            <h3 className="text-3xl font-bold text-white mb-2">
              🎊 HAPPY BIRTHDAY TITI! 🎊
            </h3>
            <p className="text-xl text-rose-gold-light">
              Enjoy your special day! 🎈
            </p>
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <div className="bg-black/50 rounded-lg px-4 py-2 backdrop-blur-sm">
          <p className="text-white text-sm">
            {isVideoPlaying ? 'Celebration in progress! 🎉' : 'Click video to start celebration! 🎬'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Celebration;