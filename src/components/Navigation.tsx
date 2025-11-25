import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
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
          ? "bg-card/98 backdrop-blur-md shadow-strong border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-3xl font-display font-bold text-foreground hover:text-primary transition-colors"
          >
            Elaichi
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium uppercase text-sm tracking-wide"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium uppercase text-sm tracking-wide"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("menu")}
              className="text-foreground hover:text-primary transition-colors font-medium uppercase text-sm tracking-wide"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-foreground hover:text-primary transition-colors font-medium uppercase text-sm tracking-wide"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium uppercase text-sm tracking-wide"
            >
              Contact
            </button>
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow font-semibold"
              onClick={() => scrollToSection('reservation')}
            >
              BOOK A TABLE
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 pt-4 animate-fadeInUp">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors py-2 text-left font-medium uppercase text-sm tracking-wide"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors py-2 text-left font-medium uppercase text-sm tracking-wide"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("menu")}
                className="text-foreground hover:text-primary transition-colors py-2 text-left font-medium uppercase text-sm tracking-wide"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-foreground hover:text-primary transition-colors py-2 text-left font-medium uppercase text-sm tracking-wide"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors py-2 text-left font-medium uppercase text-sm tracking-wide"
              >
                Contact
              </button>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow w-full font-semibold"
                onClick={() => scrollToSection('reservation')}
              >
                BOOK A TABLE
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
