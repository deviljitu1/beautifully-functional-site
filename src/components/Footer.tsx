import { Facebook, Instagram, Twitter, Youtube, Leaf } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold text-accent">Elaichi</h3>
            </div>
            <p className="text-primary-foreground/80">
              Raipur's finest 100% pure vegetarian multi-cuisine restaurant, 
              serving delicious food with love since 2013.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent/10 p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent/10 p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent/10 p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent/10 p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("menu")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>123 Main Street, Civil Lines</li>
              <li>Raipur, Chhattisgarh 492001</li>
              <li className="pt-2">Phone: +91 771 234 5678</li>
              <li>Email: info@elaichimarvels.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Hours</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Monday - Friday</li>
              <li>11:00 AM - 10:00 PM</li>
              <li className="pt-2">Saturday - Sunday</li>
              <li>11:00 AM - 11:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>
            © {currentYear} Elaichi Multi Cuisine Marvels. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Made with <span className="text-accent">♥</span> for food lovers
          </p>
        </div>
      </div>
    </footer>
  );
};
