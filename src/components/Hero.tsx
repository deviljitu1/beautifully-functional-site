import { Button } from "@/components/ui/button";
import { Sparkles, Leaf, UtensilsCrossed } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Restaurant ambiance"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Animated Decorative Elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <Leaf className="w-16 h-16 text-primary/50" />
      </div>
      <div className="absolute top-40 right-20 animate-float opacity-30" style={{ animationDelay: '1s' }}>
        <Sparkles className="w-12 h-12 text-accent/60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <UtensilsCrossed className="w-14 h-14 text-primary/40" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 text-foreground tracking-tight">
            Elaichi
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-primary font-display font-semibold">
            Authentic Indian Cuisine
          </p>
          <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-2xl mx-auto font-light">
            Experience the rich flavors and aromatic spices of traditional Indian cooking,
            crafted with passion and served with love.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow text-lg px-8 py-6 font-semibold"
              onClick={() => scrollToSection('menu')}
            >
              Explore Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-soft text-lg px-8 py-6 font-semibold"
              onClick={() => scrollToSection('reservation')}
            >
              Reserve Table
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div className="text-center animate-slideInFromLeft border-r border-border/30" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-5xl font-display font-bold text-primary mb-2">50+</h3>
              <p className="text-muted-foreground font-light">Dishes</p>
            </div>
            <div className="text-center animate-slideInFromLeft border-r border-border/30" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-5xl font-display font-bold text-primary mb-2">15+</h3>
              <p className="text-muted-foreground font-light">Years</p>
            </div>
            <div className="text-center animate-slideInFromLeft" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-5xl font-display font-bold text-primary mb-2">10k+</h3>
              <p className="text-muted-foreground font-light">Happy Guests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
