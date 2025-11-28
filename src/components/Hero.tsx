import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cardamom-bg.jpg";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elaichi Restaurant - Cardamom themed ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Floating Cardamom Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="cardamom-pod absolute top-[15%] left-[10%] w-8 h-12 opacity-30" style={{ animationDelay: '0s' }} />
        <div className="cardamom-pod absolute top-[25%] right-[15%] w-6 h-10 opacity-20" style={{ animationDelay: '1.5s' }} />
        <div className="cardamom-pod absolute bottom-[30%] left-[20%] w-7 h-11 opacity-25" style={{ animationDelay: '3s' }} />
        <div className="cardamom-pod absolute top-[60%] right-[10%] w-5 h-8 opacity-20" style={{ animationDelay: '2s' }} />
        <div className="cardamom-pod absolute bottom-[20%] right-[25%] w-6 h-9 opacity-15" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl animate-fadeInUp">
          {/* Tagline */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary text-sm font-sans uppercase tracking-[0.3em] font-medium">
              Since 2009
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-4 text-foreground leading-[1.1]">
            Elaichi
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-2 text-primary/90 font-display font-semibold italic">
            The Essence of Cardamom
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 font-light leading-relaxed">
            Where every dish is infused with the aromatic magic of cardamom and the warmth of authentic Indian hospitality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button
              size="lg"
              className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 font-semibold"
              onClick={() => scrollToSection('menu')}
            >
              <span className="relative z-10">Explore Menu</span>
              <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground backdrop-blur-sm text-base px-8 py-6 font-semibold"
              onClick={() => scrollToSection('reservation')}
            >
              Reserve Your Table
            </Button>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-8 md:gap-12">
            <div className="text-left">
              <h3 className="text-4xl md:text-5xl font-display font-bold text-primary">50+</h3>
              <p className="text-muted-foreground text-sm font-light uppercase tracking-wider mt-1">Signature Dishes</p>
            </div>
            <div className="text-left">
              <h3 className="text-4xl md:text-5xl font-display font-bold text-primary">15+</h3>
              <p className="text-muted-foreground text-sm font-light uppercase tracking-wider mt-1">Years of Excellence</p>
            </div>
            <div className="text-left">
              <h3 className="text-4xl md:text-5xl font-display font-bold text-primary">10k+</h3>
              <p className="text-muted-foreground text-sm font-light uppercase tracking-wider mt-1">Happy Guests</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-xs uppercase tracking-widest font-light">Scroll</span>
        <div className="w-6 h-10 border border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
