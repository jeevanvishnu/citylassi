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
    name: "Lassi",
    description: "Thick, creamy, and traditional yogurt-based drink perfectly blended for a refreshing taste.",
    price: "80",
    emoji: "🥭",
    tag: "Best Seller",
    imagePath: "/product-image/Lassi.webp",
  },
  {
    id: 2,
    name: "Falooda",
    description: "Rich, creamy milk layered with vermicelli, sweet basil seeds, jelly, and topped with ice cream.",
    price: "120",
    emoji: "🍨",
    tag: "Fan Favourite",
    imagePath: "/product-image/Falooda_citylassi.webp",
  },
  {
    id: 3,
    name: "Mojito",
    description: "Refreshing fizzy mocktail infused with fresh mint leaves, lime juice, and crushed ice.",
    price: "90",
    emoji: "🍃",
    tag: "Refreshing",
    imagePath: "/product-image/Mojito.webp",
  },
  {
    id: 4,
    name: "Avil Milk",
    description: "Classic Kerala delight made with roasted rice flakes, mashed bananas, milk, and crunchy nuts.",
    price: "70",
    emoji: "🥛",
    tag: "Pure & Natural",
    imagePath: "/product-image/Avilmilk_citylassi.webp",
  },
  {
    id: 5,
    name: "Smoothies",
    description: "Rich and thick blended fresh fruit smoothies packed with natural flavor and goodness.",
    price: "110",
    emoji: "🍓",
    tag: "Seasonal",
    imagePath: "/product-image/Smoothies.webp",
  },
  {
    id: 6,
    name: "Ice Cream",
    description: "Creamy, smooth, and delightful ice cream scoops available in your favorite flavors.",
    price: "60",
    emoji: "🍦",
    tag: "Classic",
    imagePath: "/product-image/Icecream.webp",
  },
];
