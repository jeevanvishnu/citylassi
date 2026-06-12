export interface BlogPost {
  slug: string;
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  content: BlogContentBlock[];
}

export type BlogContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'highlight'; text: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'callout'; icon: string; text: string }
  | { type: 'divider' };

export const blogPosts: BlogPost[] = [
  {
    slug: 'smoothies-vs-milkshakes',
    image: '/blog/blog01.webp',
    category: 'Health & Wellness',
    date: 'September 29, 2025',
    title: 'Smoothies vs. Milkshakes – Which is Better for You?',
    excerpt:
      'When it comes to refreshing drinks in Dubai, two favorites always stand out – smoothies and milkshakes. Both are delicious, but which one is the healthier choice? Discover the key differences, nutritional benefits, and when to reach for each.',
    author: 'City Lassi',
    readTime: '5 min read',
    content: [
      {
        type: 'paragraph',
        text: 'When it comes to refreshing drinks in Dubai, two favorites always stand out – smoothies and milkshakes. Both are delicious, creamy, and satisfying, but they are quite different in terms of ingredients, nutrition, and health benefits. At City Lassi, we serve both, and our customers often ask: "Which one is better for me?"',
      },
      {
        type: 'paragraph',
        text: "Let's break it down for you.",
      },
      {
        type: 'heading',
        text: 'What is a Smoothie?',
      },
      {
        type: 'paragraph',
        text: 'A smoothie is a thick, blended drink made from fresh fruits, vegetables, and sometimes yogurt or milk. They are naturally sweet, refreshing, and often considered a healthy choice.',
      },
      {
        type: 'subheading',
        text: '✅ Benefits of Smoothies:',
      },
      {
        type: 'list',
        items: [
          'Made from 100% fresh fruits like mango, strawberry, avocado, and blueberry.',
          'High in vitamins, fiber, and antioxidants.',
          'Perfect for a quick energy boost.',
          'Often lower in sugar compared to milkshakes.',
        ],
      },
      {
        type: 'highlight',
        text: '👉 Popular at City Lassi: Mango Smoothie, Passion Fruit Smoothie, Avocado Smoothie.',
      },
      {
        type: 'heading',
        text: 'What is a Milkshake?',
      },
      {
        type: 'paragraph',
        text: 'A milkshake is a creamy, indulgent drink made with milk, ice cream, and flavorings like chocolate, Oreo, or fruits. They are thicker, sweeter, and more dessert-like compared to smoothies.',
      },
      {
        type: 'subheading',
        text: '✅ Benefits of Milkshakes:',
      },
      {
        type: 'list',
        items: [
          'Rich, creamy, and satisfying for sweet cravings.',
          'A good source of calcium and energy.',
          'Perfect as a dessert drink or a treat.',
        ],
      },
      {
        type: 'highlight',
        text: '👉 Popular at City Lassi: Oreo Milkshake, Ferrero Rocher Milkshake, Lotus Milkshake.',
      },
      {
        type: 'heading',
        text: 'Smoothie vs. Milkshake – The Key Differences',
      },
      {
        type: 'table',
        headers: ['Feature', 'Smoothie 🥤', 'Milkshake 🍦'],
        rows: [
          ['Main Ingredients', 'Fresh fruits, yogurt, juice', 'Milk, ice cream, flavors'],
          ['Taste', 'Light, fruity, refreshing', 'Sweet, creamy, indulgent'],
          ['Nutrition', 'High in vitamins & fiber', 'High in sugar & calories'],
          ['Best For', 'Health-conscious, daily refreshment', 'Dessert lovers, occasional treat'],
          ['Popular in Dubai', 'Mango Smoothie, Avocado Smoothie', 'Oreo Milkshake, Kit Kat Milkshake'],
        ],
      },
      {
        type: 'heading',
        text: 'Which One Should You Choose?',
      },
      {
        type: 'paragraph',
        text: 'It depends on your mood!',
      },
      {
        type: 'list',
        items: [
          'If you want something healthy and energizing – go for a smoothie.',
          "If you're in the mood for a treat or dessert – a milkshake will hit the spot.",
          "At City Lassi Dubai, we serve both – so you don't have to choose!",
        ],
      },
      {
        type: 'heading',
        text: 'Final Thoughts',
      },
      {
        type: 'paragraph',
        text: "Both smoothies and milkshakes bring their own charm. Whether you're craving a fresh smoothie to beat Dubai's heat or a rich milkshake as a sweet indulgence, City Lassi has something for you.",
      },
      { type: 'divider' },
      {
        type: 'callout',
        icon: '📍',
        text: 'Visit us in Deira, Dubai, or order online for free home delivery.',
      },
      {
        type: 'callout',
        icon: '📞',
        text: 'Call: +971 52 106 4442',
      },
      {
        type: 'highlight',
        text: 'Sip. Smile. Repeat. – Only at City Lassi.',
      },
    ],
  },
  {
    slug: 'top-5-refreshing-drinks-dubai-heat',
    image: '/blog/blog02.webp',
    category: 'Dubai Lifestyle',
    date: 'June 5, 2026',
    title: 'Top 5 Refreshing Drinks to Beat the Dubai Heat',
    excerpt:
      "Dubai's sunny weather calls for something cool, fresh, and full of flavor. Whether you're working, shopping, or just relaxing, a chilled drink can instantly lift your mood. Here are our top 5 picks to keep you refreshed all summer long.",
    author: 'City Lassi',
    readTime: '4 min read',
    content: [
      {
        type: 'paragraph',
        text: "Dubai's sunny weather calls for something cool, fresh, and full of flavor. Whether you're working, shopping, or just relaxing, a chilled drink can instantly lift your mood. Here are our top 5 picks to keep you refreshed all summer long.",
      },
      {
        type: 'heading',
        text: '1. Classic Mango Lassi',
      },
      {
        type: 'paragraph',
        text: 'Nothing beats the tropical sweetness of a perfectly blended mango lassi. Made with fresh Alphonso mangoes and creamy yogurt, it\'s the ultimate refresher that Dubai residents can\'t get enough of.',
      },
      {
        type: 'heading',
        text: '2. Fresh Watermelon Juice',
      },
      {
        type: 'paragraph',
        text: 'Light, hydrating, and naturally sweet – watermelon juice is your best friend during the scorching summer months. We serve it ice-cold with a hint of mint for that extra kick.',
      },
      {
        type: 'heading',
        text: '3. Avocado Smoothie',
      },
      {
        type: 'paragraph',
        text: 'Creamy, nutritious, and absolutely delicious. Our avocado smoothie is packed with healthy fats and makes for a perfect mid-day energy boost.',
      },
      {
        type: 'heading',
        text: '4. Passion Fruit Mojito',
      },
      {
        type: 'paragraph',
        text: 'A non-alcoholic twist on a classic favorite. The tangy passion fruit combined with fresh mint and sparkling water creates a drink that\'s both exotic and refreshing.',
      },
      {
        type: 'heading',
        text: '5. Rose Falooda',
      },
      {
        type: 'paragraph',
        text: 'A traditional favorite with a City Lassi twist. Our rose falooda features layers of rose syrup, vermicelli, basil seeds, and creamy ice cream – a dessert and drink in one!',
      },
      { type: 'divider' },
      {
        type: 'paragraph',
        text: "Visit City Lassi in Deira, Dubai, and try all five – you won't be disappointed!",
      },
      {
        type: 'callout',
        icon: '📍',
        text: 'Visit us in Deira, Dubai, or order online for free home delivery.',
      },
      {
        type: 'callout',
        icon: '📞',
        text: 'Call: +971 52 106 4442',
      },
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count = 2): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== currentSlug).slice(0, count);
}
