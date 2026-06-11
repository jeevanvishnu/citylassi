export interface Drink {
  id: number;
  name: string;
  description: string;
  price: string;
  emoji: string;
  tag: string;
  imagePath?: string;
}

export const drinks: Drink[] = [
  {
    id: 1,
    name: "Mango Lassi",
    description: "Thick Alphonso mango blended with chilled yogurt and a whisper of cardamom.",
    price: "80",
    emoji: "🥭",
    tag: "Best Seller",
    imagePath: "/product-image/Lassi.webp",
  },
  {
    id: 2,
    name: "Rose Lassi",
    description: "Creamy yogurt swirled with rose syrup, topped with saffron strands.",
    price: "75",
    emoji: "🌹",
    tag: "Fan Favourite",
    imagePath: "/product-image/Falooda_citylassi.webp",
  },
  {
    id: 3,
    name: "Fresh Lime Soda",
    description: "Hand-pressed lime, fresh mint, and fizzy soda — the original summer fix.",
    price: "55",
    emoji: "🍋",
    tag: "Refreshing",
    imagePath: "/product-image/Mojito.webp",
  },
  {
    id: 4,
    name: "Sugarcane Juice",
    description: "Cold-pressed from fresh sugarcane stalks with ginger and lemon.",
    price: "60",
    emoji: "🌿",
    tag: "Pure & Natural",
    imagePath: "/product-image/Avilmilk_citylassi.webp",
  },
  {
    id: 5,
    name: "Watermelon Cooler",
    description: "Juiced-to-order watermelon with mint and black salt. Zero sugar added.",
    price: "65",
    emoji: "🍉",
    tag: "Seasonal",
    imagePath: "/product-image/Smoothies.webp",
  },
  {
    id: 6,
    name: "Masala Chaas",
    description: "Spiced buttermilk with roasted cumin, ginger, and fresh coriander.",
    price: "50",
    emoji: "🥛",
    tag: "Traditional",
    imagePath: "/product-image/Icecream.webp",
  },
];
