import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Visit Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Come experience the magic of authentic vegetarian cuisine
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 flex items-start gap-4 border-border hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Location
                </h3>
                <p className="text-muted-foreground">
                  123 Main Street, Civil Lines
                  <br />
                  Raipur, Chhattisgarh 492001
                  <br />
                  India
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 border-border hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 p-3 rounded-full">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Phone
                </h3>
                <p className="text-muted-foreground">
                  +91 771 234 5678
                  <br />
                  +91 771 234 5679
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 border-border hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 p-3 rounded-full">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Email
                </h3>
                <p className="text-muted-foreground">
                  info@elaichimarvels.com
                  <br />
                  reservations@elaichimarvels.com
                </p>
              </div>
            </Card>

            <Card className="p-6 flex items-start gap-4 border-border hover:shadow-lg transition-shadow">
              <div className="bg-accent/10 p-3 rounded-full">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Opening Hours
                </h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                  <p>Saturday - Sunday: 11:00 AM - 11:00 PM</p>
                  <p className="text-sm text-accent mt-2">Closed on major holidays</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Map */}
          <div className="h-[600px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41569921454!2d81.57787944999998!3d21.250000000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddd8fa7b3d83%3A0xf2a3bf5822824206!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Elaichi Multi Cuisine Marvels Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
