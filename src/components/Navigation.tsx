import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg"
          : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 animate-fade-in-up">
            <div className="text-2xl md:text-3xl font-bold text-accent">
              🍃 Elaichi
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-primary-foreground hover:text-accent transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary-foreground hover:text-accent transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-primary-foreground hover:text-accent transition-colors duration-200"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-primary-foreground hover:text-accent transition-colors duration-200"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-primary-foreground hover:text-accent transition-colors duration-200"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("reservation")}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Reserve Table
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-primary-foreground hover:text-accent transition-colors py-2 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-primary-foreground hover:text-accent transition-colors py-2 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-primary-foreground hover:text-accent transition-colors py-2 text-left"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-primary-foreground hover:text-accent transition-colors py-2 text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-primary-foreground hover:text-accent transition-colors py-2 text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("reservation")}
                className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
              >
                Reserve Table
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
