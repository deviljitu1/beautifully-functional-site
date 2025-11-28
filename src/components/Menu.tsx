import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Star } from "lucide-react";

// Import all menu images
import paneerTikka from "@/assets/menu/paneer-tikka.jpg";
import vegSpringRolls from "@/assets/menu/veg-spring-rolls.jpg";
import haraBharaKabab from "@/assets/menu/hara-bhara-kabab.jpg";
import cornCheeseBalls from "@/assets/menu/corn-cheese-balls.jpg";
import dalMakhani from "@/assets/menu/dal-makhani.jpg";
import paneerButterMasala from "@/assets/menu/paneer-butter-masala.jpg";
import vegBiryani from "@/assets/menu/veg-biryani.jpg";
import palakPaneer from "@/assets/menu/palak-paneer.jpg";
import choleBhature from "@/assets/menu/chole-bhature.jpg";
import malaiKofta from "@/assets/menu/malai-kofta.jpg";
import butterNaan from "@/assets/menu/butter-naan.jpg";
import garlicNaan from "@/assets/menu/garlic-naan.jpg";
import tandooriRoti from "@/assets/menu/tandoori-roti.jpg";
import stuffedParatha from "@/assets/menu/stuffed-paratha.jpg";
import gulabJamun from "@/assets/menu/gulab-jamun.jpg";
import rasmalai from "@/assets/menu/rasmalai.jpg";
import gajarHalwa from "@/assets/menu/gajar-halwa.jpg";
import iceCream from "@/assets/menu/ice-cream.jpg";
import masalaChai from "@/assets/menu/masala-chai.jpg";
import freshLimeSoda from "@/assets/menu/fresh-lime-soda.jpg";
import mangoLassi from "@/assets/menu/mango-lassi.jpg";
import filterCoffee from "@/assets/menu/filter-coffee.jpg";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isSpicy?: boolean;
  isPopular?: boolean;
};

const menuItems: MenuItem[] = [
  // Starters
  { id: 1, name: "Paneer Tikka", description: "Marinated cottage cheese grilled to perfection", price: 250, category: "Starters", image: paneerTikka, isSpicy: true, isPopular: true },
  { id: 2, name: "Veg Spring Rolls", description: "Crispy rolls with mixed vegetables", price: 180, category: "Starters", image: vegSpringRolls },
  { id: 3, name: "Hara Bhara Kabab", description: "Spinach and pea patties with spices", price: 200, category: "Starters", image: haraBharaKabab, isPopular: true },
  { id: 4, name: "Corn Cheese Balls", description: "Deep fried corn and cheese croquettes", price: 220, category: "Starters", image: cornCheeseBalls },
  
  // Main Course
  { id: 5, name: "Dal Makhani", description: "Creamy black lentils cooked overnight", price: 280, category: "Main Course", image: dalMakhani, isPopular: true },
  { id: 6, name: "Paneer Butter Masala", description: "Cottage cheese in rich tomato gravy", price: 320, category: "Main Course", image: paneerButterMasala, isSpicy: true },
  { id: 7, name: "Veg Biryani", description: "Fragrant basmati rice with mixed vegetables", price: 300, category: "Main Course", image: vegBiryani, isPopular: true },
  { id: 8, name: "Palak Paneer", description: "Cottage cheese in spinach gravy", price: 290, category: "Main Course", image: palakPaneer },
  { id: 9, name: "Chole Bhature", description: "Spicy chickpeas with fluffy fried bread", price: 250, category: "Main Course", image: choleBhature, isSpicy: true },
  { id: 10, name: "Malai Kofta", description: "Fried veggie balls in creamy gravy", price: 310, category: "Main Course", image: malaiKofta },
  
  // Breads
  { id: 11, name: "Butter Naan", description: "Soft leavened bread with butter", price: 60, category: "Breads", image: butterNaan, isPopular: true },
  { id: 12, name: "Garlic Naan", description: "Naan topped with garlic and coriander", price: 70, category: "Breads", image: garlicNaan },
  { id: 13, name: "Tandoori Roti", description: "Whole wheat flatbread from tandoor", price: 40, category: "Breads", image: tandooriRoti },
  { id: 14, name: "Stuffed Paratha", description: "Wheat bread stuffed with your choice", price: 80, category: "Breads", image: stuffedParatha },
  
  // Desserts
  { id: 15, name: "Gulab Jamun", description: "Sweet dumplings in rose syrup", price: 120, category: "Desserts", image: gulabJamun, isPopular: true },
  { id: 16, name: "Rasmalai", description: "Cottage cheese dumplings in sweetened milk", price: 140, category: "Desserts", image: rasmalai },
  { id: 17, name: "Gajar Halwa", description: "Carrot pudding with nuts", price: 130, category: "Desserts", image: gajarHalwa },
  { id: 18, name: "Ice Cream", description: "Choice of flavors", price: 100, category: "Desserts", image: iceCream },
  
  // Beverages
  { id: 19, name: "Masala Chai", description: "Traditional Indian spiced tea", price: 50, category: "Beverages", image: masalaChai },
  { id: 20, name: "Fresh Lime Soda", description: "Refreshing lime drink", price: 70, category: "Beverages", image: freshLimeSoda },
  { id: 21, name: "Mango Lassi", description: "Sweet yogurt drink with mango", price: 90, category: "Beverages", image: mangoLassi, isPopular: true },
  { id: 22, name: "Filter Coffee", description: "South Indian style coffee", price: 60, category: "Beverages", image: filterCoffee },
];

const categories = ["All", "Starters", "Main Course", "Breads", "Desserts", "Beverages"];

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Food Menu</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-6 text-foreground">
            Most Popular <span className="text-primary">Items</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-light">
            Discover our selection of authentic Indian dishes
          </p>
        </div>

        {/* Category Filter - Scrollable on mobile */}
        <div className="mb-10 md:mb-16">
          <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap md:justify-center gap-3 md:gap-4 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                onClick={() => setSelectedCategory(category)}
                className="capitalize font-semibold px-5 md:px-6 whitespace-nowrap flex-shrink-0"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-fadeInUp group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Image Container */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Badges overlay */}
                <div className="absolute top-3 right-3 flex gap-1.5">
                  {item.isSpicy && (
                    <Badge variant="destructive" className="px-2 py-1">
                      <Flame className="w-3 h-3" />
                    </Badge>
                  )}
                  {item.isPopular && (
                    <Badge className="bg-primary text-primary-foreground px-2 py-1">
                      <Star className="w-3 h-3" />
                    </Badge>
                  )}
                </div>
                {/* Price tag */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-lg font-display font-bold">
                    ₹{item.price}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-foreground line-clamp-1">
                    {item.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-3 font-light line-clamp-2">
                  {item.description}
                </p>
                <Badge variant="outline" className="border-primary/50 text-primary text-xs">
                  {item.category}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
