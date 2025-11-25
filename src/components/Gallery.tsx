import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

// For demo purposes - in production, these would be real gallery images
const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800",
    title: "Delicious Paneer Tikka",
    category: "Food",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800",
    title: "Fragrant Biryani",
    category: "Food",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800",
    title: "Elegant Dining Space",
    category: "Ambiance",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
    title: "Butter Naan & Dal",
    category: "Food",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    title: "Cozy Restaurant Interior",
    category: "Ambiance",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1606491780214-6ce8c18611bd?w=800",
    title: "Indian Thali",
    category: "Food",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800",
    title: "Sweet Desserts",
    category: "Food",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
    title: "Perfect Dining Setup",
    category: "Ambiance",
  },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState("All");

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Gallery</p>
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-foreground">
            Our <span className="text-primary">Ambiance</span>
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            A glimpse into our culinary journey
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {["All", "Food", "Ambiance"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 font-semibold ${
                filter === category
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-card text-foreground hover:bg-primary/20 border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fadeInUp aspect-square"
              style={{ animationDelay: `${index * 0.05}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <h3 className="text-foreground font-semibold mb-1">
                    {image.title}
                  </h3>
                  <span className="text-primary text-sm">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <div className="relative">
            <img
              src={selectedImage?.url}
              alt={selectedImage?.title}
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-card/80 hover:bg-card p-2 rounded-full text-foreground"
            >
              <X className="w-6 h-6" />
            </button>
            {selectedImage && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-6 rounded-b-lg">
                <h3 className="text-foreground text-2xl font-display font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <span className="text-primary text-lg">{selectedImage.category}</span>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
