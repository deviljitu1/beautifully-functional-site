import { Heart, Award, Users, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";
import restaurantInterior from "@/assets/restaurant-interior.jpg";

export const About = () => {
  const features = [
    {
      icon: <Leaf className="w-10 h-10 text-primary" />,
      title: "100% Pure Veg",
      description: "All our dishes are completely vegetarian with no compromise on taste",
    },
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: "Made with Love",
      description: "Every dish is prepared with care, using traditional recipes and fresh ingredients",
    },
    {
      icon: <Award className="w-10 h-10 text-primary" />,
      title: "Award Winning",
      description: "Recognized as one of Raipur's finest vegetarian restaurants",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Family Friendly",
      description: "Perfect ambiance for family gatherings and special occasions",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">About Us</p>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-foreground">
            Welcome to <span className="text-primary">Elaichi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Bringing authentic Indian flavors to your table since 2009
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-light">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="max-w-6xl mx-auto">
          <Card className="p-0 overflow-hidden bg-card border-border shadow-soft">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <img 
                  src={restaurantInterior} 
                  alt="Elaichi Restaurant Interior - Beautiful dining space with hanging plants and elegant seating" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 md:bg-gradient-to-l" />
              </div>
              
              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-display font-bold text-primary mb-6">
                  Our Story
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed font-light">
                  <p>
                    Elaichi Multi Cuisine Marvels began with a simple dream: to create a haven for food lovers 
                    who appreciate the beauty of vegetarian cuisine. Our journey started over a decade ago, 
                    and today we're proud to be one of Raipur's most beloved dining destinations.
                  </p>
                  <p>
                    Our chefs bring years of experience and passion to every dish they create. We source the 
                    freshest ingredients, use authentic spices, and follow traditional cooking methods to ensure 
                    that every meal is not just food, but an experience to remember.
                  </p>
                  <p>
                    Whether you're here for a quick lunch, a family dinner, or a special celebration, we promise 
                    to make your visit memorable with our exceptional food, warm hospitality, and inviting ambiance.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
