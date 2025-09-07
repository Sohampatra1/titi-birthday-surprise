import { Heart } from "lucide-react";

const BirthdayCake = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      {/* Candles */}
      <div className="flex gap-8 mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="flex flex-col items-center">
            {/* Flame */}
            <div className="w-3 h-4 bg-gradient-to-t from-yellow-400 to-red-500 rounded-full candle-flame mb-1"></div>
            {/* Candle */}
            <div className="w-2 h-8 bg-gradient-to-b from-rose-gold to-rose-gold-dark rounded-sm"></div>
          </div>
        ))}
      </div>
      
      {/* Cake */}
      <div className="relative">
        {/* Cake Base */}
        <div className="w-80 h-32 bg-gradient-to-b from-rose-gold-light to-rose-gold rounded-lg rose-shadow">
          {/* Frosting */}
          <div className="w-full h-6 bg-gradient-to-r from-pink-soft to-rose-gold-light rounded-t-lg"></div>
          
          {/* Name on cake */}
          <div className="flex items-center justify-center h-full">
            <h2 className="text-2xl font-bold text-black-soft font-serif tracking-wider">
              Happy Birthday TITI
            </h2>
          </div>
          
          {/* Decorative hearts */}
          <div className="absolute -top-2 -right-2">
            <Heart className="w-6 h-6 text-heart-red heart-pulse fill-current" />
          </div>
          <div className="absolute -bottom-2 -left-2">
            <Heart className="w-4 h-4 text-heart-red heart-pulse fill-current" />
          </div>
        </div>
        
        {/* Cake Plate */}
        <div className="w-96 h-4 bg-gradient-to-r from-black-soft to-gray-600 rounded-full mx-auto mt-2 opacity-80"></div>
      </div>
    </div>
  );
};

export default BirthdayCake;