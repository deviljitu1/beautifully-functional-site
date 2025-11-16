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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(4, 84, 54, 0.85), rgba(84, 112, 53, 0.85)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float">
          <Leaf className="text-accent/20 w-16 h-16" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
          <Sparkles className="text-accent/20 w-12 h-12" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: "2s" }}>
          <UtensilsCrossed className="text-accent/20 w-14 h-14" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <Leaf className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">100% Pure Vegetarian</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Elaichi Multi Cuisine
            <span className="block text-accent mt-2">Marvels</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            Where Tradition Meets Culinary Excellence
          </p>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Experience the finest vegetarian delicacies in Raipur, crafted with love and authentic spices
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("menu")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6"
            >
              Explore Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("reservation")}
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
            >
              Reserve Table
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "1s" }}>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">150+</div>
              <div className="text-primary-foreground/80">Dishes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">10+</div>
              <div className="text-primary-foreground/80">Years</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50K+</div>
              <div className="text-primary-foreground/80">Happy Guests</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
