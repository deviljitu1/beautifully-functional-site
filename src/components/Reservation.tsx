import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Reservation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.guests) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Show success message
    toast({
      title: "Reservation Requested!",
      description: "We'll confirm your reservation shortly via phone/email.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="reservation" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Reservation</p>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-foreground">
            Book a <span className="text-primary">Table</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Book your table and let us prepare a memorable dining experience for you
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-border shadow-soft">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="border-border"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="border-border"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">
                Phone Number *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="border-border"
                required
              />
            </div>

            {/* Date, Time, Guests Row */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  Date *
                </Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border-border"
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time" className="text-foreground flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Time *
                </Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="border-border"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-foreground flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Guests *
                </Label>
                <Input
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="20"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="2"
                  className="border-border"
                  required
                />
              </div>
            </div>

            {/* Special Requests */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Special Requests
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any dietary restrictions or special occasions?"
                className="border-border min-h-[100px]"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg shadow-glow font-semibold"
            >
              Confirm Reservation
            </Button>

            <p className="text-sm text-muted-foreground text-center font-light">
              * Required fields. We'll call to confirm your reservation.
            </p>
          </form>
        </Card>
      </div>
    </section>
  );
};
