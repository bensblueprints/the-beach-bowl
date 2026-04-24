export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  kicker: string;
  blurb: string;
  accent: "acai" | "coral" | "seafoam" | "sand";
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "bowls",
    title: "Açaí Bowls",
    kicker: "Signature",
    blurb:
      "Pure unsweetened açaí blended thick. Loaded with fruit, crunch and a little something sweet on top.",
    accent: "acai",
    items: [
      {
        name: "Traditional",
        description:
          "Strawberries, banana, blueberries. Granola, shredded coconut, drizzled honey.",
        price: "$10–13",
        tag: "Fan Favorite",
      },
      {
        name: "PB & Açaí",
        description:
          "Strawberries, banana, blueberries, peanut butter, granola, chocolate shavings, dark chocolate drizzle.",
        price: "$10–13",
      },
      {
        name: "Midwest Fresh",
        description:
          "Strawberries, blackberries, raspberries, blueberries. Granola, hemp hearts, honey.",
        price: "$10–13",
      },
      {
        name: "Tropical",
        description:
          "Mango, banana, kiwi. Chia seeds, granola, shredded coconut, agave syrup.",
        price: "$10–13",
      },
      {
        name: "Custom Bowl",
        description:
          "Pick 3 fruits, 2 non-fruits, 1 sweetener. Extra toppings diversify the bowl — no upcharge.",
        price: "$11–14",
        tag: "Build Yours",
      },
    ],
  },
  {
    id: "boba",
    title: "Boba Tea",
    kicker: "16oz",
    blurb:
      "Twelve flavors, tapioca pearls, one flat price. Cold, chewy, perfect on the pier.",
    accent: "coral",
    items: [
      { name: "Mango", description: "Tapioca pearls.", price: "$6" },
      { name: "Lavender", description: "Tapioca pearls.", price: "$6" },
      { name: "Honey Dew", description: "Tapioca pearls.", price: "$6" },
      { name: "Coconut", description: "Tapioca pearls.", price: "$6" },
      { name: "Lychee", description: "Tapioca pearls.", price: "$6" },
      { name: "Strawberry", description: "Tapioca pearls.", price: "$6" },
      { name: "Matcha", description: "Tapioca pearls.", price: "$6" },
      { name: "Taro", description: "Tapioca pearls.", price: "$6" },
      { name: "Thai Tea", description: "Tapioca pearls.", price: "$6" },
      { name: "Mocha", description: "Tapioca pearls.", price: "$6" },
      { name: "Pistachio", description: "Tapioca pearls.", price: "$6" },
      { name: "Peach", description: "Tapioca pearls.", price: "$6" },
    ],
  },
  {
    id: "smoothies",
    title: "Smoothies",
    kicker: "Blended",
    blurb:
      "Thick 16oz blends. Several pair perfectly with a shot of espresso — ask us.",
    accent: "seafoam",
    items: [
      {
        name: "Blueberry Banana",
        description: "Blueberries, bananas, honey.",
        price: "$10",
      },
      {
        name: "Peanut Butter Banana",
        description:
          "Banana, peanut butter, nutella, dark chocolate. Try with coffee.",
        price: "$10",
      },
      {
        name: "Mango Pineapple",
        description: "Mango, pineapple, banana, agave.",
        price: "$10",
      },
      {
        name: "Strawberry Banana",
        description: "Strawberries, banana, agave.",
        price: "$10",
      },
      {
        name: "Blended Matcha",
        description:
          "Matcha, unsweetened coconut cream for texture. Try with coffee.",
        price: "$10",
      },
      {
        name: "DC Cherry Chocolate",
        description:
          "Door County Lautenbach tart cherries, dark chocolate, dark chocolate sauce. Try with coffee.",
        price: "$10",
        tag: "Local",
      },
    ],
  },
  {
    id: "mac",
    title: "Loaded Mac N' Cheese",
    kicker: "Savory",
    blurb:
      "Oven-finished loaded macs — the reason people come back at dinner. Local beer cheese included.",
    accent: "sand",
    items: [
      {
        name: "Beer Cheese Mac",
        description:
          "Beer cheese (Peach Barn 6-4 IPA), boneless wings, green onions, soft pretzel bites, spicy peach BBQ.",
        price: "$15–18",
        tag: "Local Beer",
      },
      {
        name: "Poblano Chicken Mac",
        description:
          "Poblano queso, roasted bell peppers, avocado, spicy breaded chicken.",
        price: "$15–18",
      },
      {
        name: "Buffalo Chicken Mac",
        description:
          "Cheddar sauce, green onions, spicy breaded chicken, buffalo, ranch.",
        price: "$15–18",
      },
      {
        name: "Pesto Parm",
        description:
          "Pesto, BelGioioso Parmesan, tomato, Italian sausage.",
        price: "$15–18",
      },
    ],
  },
];

export const SIDES: MenuItem[] = [
  {
    name: "Lotus Energy Drink",
    description: "No sugar. 160mg natural caffeine.",
    price: "$3",
  },
];

export const ORDER_URL = "https://the-beach-bowl.square.site/";
