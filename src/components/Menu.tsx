import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Flame, Star } from "lucide-react";
import menuSpread from "@/assets/menu-spread.jpg";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  isSpicy?: boolean;
  isPopular?: boolean;
};

const menuItems: MenuItem[] = [
  // Starters
  { id: 1, name: "Paneer Tikka", description: "Marinated cottage cheese grilled to perfection", price: 250, category: "Starters", isSpicy: true, isPopular: true },
  { id: 2, name: "Veg Spring Rolls", description: "Crispy rolls with mixed vegetables", price: 180, category: "Starters" },
  { id: 3, name: "Hara Bhara Kabab", description: "Spinach and pea patties with spices", price: 200, category: "Starters", isPopular: true },
  { id: 4, name: "Corn Cheese Balls", description: "Deep fried corn and cheese croquettes", price: 220, category: "Starters" },
  
  // Main Course
  { id: 5, name: "Dal Makhani", description: "Creamy black lentils cooked overnight", price: 280, category: "Main Course", isPopular: true },
  { id: 6, name: "Paneer Butter Masala", description: "Cottage cheese in rich tomato gravy", price: 320, category: "Main Course", isSpicy: true },
  { id: 7, name: "Veg Biryani", description: "Fragrant basmati rice with mixed vegetables", price: 300, category: "Main Course", isPopular: true },
  { id: 8, name: "Palak Paneer", description: "Cottage cheese in spinach gravy", price: 290, category: "Main Course" },
  { id: 9, name: "Chole Bhature", description: "Spicy chickpeas with fluffy fried bread", price: 250, category: "Main Course", isSpicy: true },
  { id: 10, name: "Malai Kofta", description: "Fried veggie balls in creamy gravy", price: 310, category: "Main Course" },
  
  // Breads
  { id: 11, name: "Butter Naan", description: "Soft leavened bread with butter", price: 60, category: "Breads", isPopular: true },
  { id: 12, name: "Garlic Naan", description: "Naan topped with garlic and coriander", price: 70, category: "Breads" },
  { id: 13, name: "Tandoori Roti", description: "Whole wheat flatbread from tandoor", price: 40, category: "Breads" },
  { id: 14, name: "Stuffed Paratha", description: "Wheat bread stuffed with your choice", price: 80, category: "Breads" },
  
  // Desserts
  { id: 15, name: "Gulab Jamun", description: "Sweet dumplings in rose syrup", price: 120, category: "Desserts", isPopular: true },
  { id: 16, name: "Rasmalai", description: "Cottage cheese dumplings in sweetened milk", price: 140, category: "Desserts" },
  { id: 17, name: "Gajar Halwa", description: "Carrot pudding with nuts", price: 130, category: "Desserts" },
  { id: 18, name: "Ice Cream", description: "Choice of flavors", price: 100, category: "Desserts" },
  
  // Beverages
  { id: 19, name: "Masala Chai", description: "Traditional Indian spiced tea", price: 50, category: "Beverages" },
  { id: 20, name: "Fresh Lime Soda", description: "Refreshing lime drink", price: 70, category: "Beverages" },
  { id: 21, name: "Mango Lassi", description: "Sweet yogurt drink with mango", price: 90, category: "Beverages", isPopular: true },
  { id: 22, name: "Filter Coffee", description: "South Indian style coffee", price: 60, category: "Beverages" },
];

const categories = ["All", "Starters", "Main Course", "Breads", "Desserts", "Beverages"];

export const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Food Menu</p>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-foreground">
            Most Popular <span className="text-primary">Items</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Discover our selection of authentic Indian dishes
          </p>
        </div>

        {/* Menu Image Banner */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-strong max-w-5xl mx-auto">
          <img
            src={menuSpread}
            alt="Menu dishes"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              onClick={() => setSelectedCategory(category)}
              className="capitalize font-semibold px-6"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="p-6 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-fadeInUp"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {item.name}
                </h3>
                <div className="flex gap-1">
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
              </div>
              <p className="text-muted-foreground text-sm mb-4 font-light">
                {item.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-display font-bold text-primary">
                  ₹{item.price}
                </span>
                <Badge variant="outline" className="border-primary text-primary">
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
