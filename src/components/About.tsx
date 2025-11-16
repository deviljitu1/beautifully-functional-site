import { Heart, Award, Users, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  const features = [
    {
      icon: <Leaf className="w-10 h-10 text-accent" />,
      title: "100% Pure Veg",
      description: "All our dishes are completely vegetarian with no compromise on taste",
    },
    {
      icon: <Heart className="w-10 h-10 text-accent" />,
      title: "Made with Love",
      description: "Every dish is prepared with care, using traditional recipes and fresh ingredients",
    },
    {
      icon: <Award className="w-10 h-10 text-accent" />,
      title: "Award Winning",
      description: "Recognized as one of Raipur's finest vegetarian restaurants",
    },
    {
      icon: <Users className="w-10 h-10 text-accent" />,
      title: "Family Friendly",
      description: "Perfect ambiance for family gatherings and special occasions",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            About Elaichi
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Welcome to Elaichi Multi Cuisine Marvels, where we celebrate the rich heritage of vegetarian cuisine. 
            Established with a vision to bring authentic flavors to Raipur, we take pride in serving delicious, 
            wholesome food in a warm and welcoming atmosphere.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-muted/50 border-border">
            <h3 className="text-3xl font-bold text-accent mb-6 text-center">
              Our Story
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
          </Card>
        </div>
      </div>
    </section>
  );
};
