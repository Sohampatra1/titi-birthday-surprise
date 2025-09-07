import { Heart, Home, Gamepad2, Quote, Gift } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/quotes", icon: Quote, label: "Quotes" },
    { href: "/games", icon: Gamepad2, label: "Games" },
    { href: "/love-notes", icon: Gift, label: "Love Notes" },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="card-gradient rounded-full p-2 rose-shadow">
        <div className="flex gap-2">
          {navItems.map(({ href, icon: Icon, label }) => (
            <Link
              key={href}
              to={href}
              className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                location.pathname === href
                  ? "bg-primary text-primary-foreground rose-shadow"
                  : "text-black-soft hover:bg-rose-gold-light"
              }`}
              title={label}
            >
              <Icon className="w-6 h-6" />
            </Link>
          ))}
        </div>
      </div>
      
      {/* Floating heart */}
      <Heart className="absolute -top-8 -right-4 w-4 h-4 text-heart-red heart-pulse fill-current" />
    </nav>
  );
};

export default Navigation;