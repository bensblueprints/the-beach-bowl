export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
  image?: string;
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
        image: "/menu/acai_bowl_traditional.jpg",
      },
      {
        name: "PB & Açaí",
        description:
          "Strawberries, banana, blueberries, peanut butter, granola, chocolate shavings, dark chocolate drizzle.",
        price: "$10–13",
        image: "/menu/acai_pb.jpg",
      },
      {
        name: "Midwest Fresh",
        description:
          "Strawberries, blackberries, raspberries, blueberries. Granola, hemp hearts, honey.",
        price: "$10–13",
        image: "/menu/acai_midwest_fresh.jpg",
      },
      {
        name: "Tropical",
        description:
          "Mango, banana, kiwi. Chia seeds, granola, shredded coconut, agave syrup.",
        price: "$10–13",
        image: "/menu/acai_bowl_tropical.jpg",
      },
      {
        name: "Custom Bowl",
        description:
          "Pick 3 fruits, 2 non-fruits, 1 sweetener. Extra toppings diversify the bowl — no upcharge.",
        price: "$11–14",
        tag: "Build Yours",
        image: "/menu/acai_custom.jpg",
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
      { name: "Mango", description: "Tapioca pearls.", price: "$6", image: "/menu/boba_mango.jpg" },
      { name: "Lavender", description: "Tapioca pearls.", price: "$6", image: "/menu/boba_lavender.jpg" },
      { name: "Honey Dew", description: "Tapioca pearls.", price: "$6", image: "/menu/boba_honeydew.jpg" },
      { name: "Coconut", description: "Tapioca pearls.", price: "$6", image: "/menu/boba_coconut.jpg" },
      { name: "Lychee", description: "Tapioca pearls.", price: "$6", image: "/menu/boba_lychee.jpg" },
      { name: "Strawberry", description: "Tapioca pearls.", price: "$6", image: "/menu/boba_strawberry.jpg" },
      { name: "Matcha", description: "Tapioca pearls.", price: "$6", image: "/menu/boba_matcha.jpg" },
      { name: "Taro", description: "Tapioca pearls.", price: "$6", image: "/menu/boba_tea_taro.jpg" },
      { name: "Thai Tea", description: "Tapioca pearls.", price: "$6", image: "/menu/boba_thai_tea.jpg" },
      { name: "Mocha", description: "Tapioca pearls.", price: "$6", image: "/menu/boba_mocha.jpg" },
      { name: "Pistachio", description: "Tapioca pearls.", price: "$6", image: "/menu/boba_pistachio.jpg" },
      { name: "Peach", description: "Tapioca pearls.", price: "$6", image: "/menu/boba_peach.jpg" },
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
        image: "/menu/smoothie_blueberry_banana.jpg",
      },
      {
        name: "Peanut Butter Banana",
        description:
          "Banana, peanut butter, nutella, dark chocolate. Try with coffee.",
        price: "$10",
        image: "/menu/smoothie_pb_banana.jpg",
      },
      {
        name: "Mango Pineapple",
        description: "Mango, pineapple, banana, agave.",
        price: "$10",
        image: "/menu/smoothie_mango_pineapple.jpg",
      },
      {
        name: "Strawberry Banana",
        description: "Strawberries, banana, agave.",
        price: "$10",
        image: "/menu/smoothie_strawberry_banana.jpg",
      },
      {
        name: "Blended Matcha",
        description:
          "Matcha, unsweetened coconut cream for texture. Try with coffee.",
        price: "$10",
        image: "/menu/smoothie_matcha.jpg",
      },
      {
        name: "DC Cherry Chocolate",
        description:
          "Door County Lautenbach tart cherries, dark chocolate, dark chocolate sauce. Try with coffee.",
        price: "$10",
        tag: "Local",
        image: "/menu/smoothie_cherry_chocolate.jpg",
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
        image: "/menu/mac_beer_cheese_v2.jpg",
      },
      {
        name: "Poblano Chicken Mac",
        description:
          "Poblano queso, roasted bell peppers, avocado, spicy breaded chicken.",
        price: "$15–18",
        image: "/menu/mac_poblano_chicken.jpg",
      },
      {
        name: "Buffalo Chicken Mac",
        description:
          "Cheddar sauce, green onions, spicy breaded chicken, buffalo, ranch.",
        price: "$15–18",
        image: "/menu/mac_cheese_buffalo.jpg",
      },
      {
        name: "Pesto Parm",
        description:
          "Pesto, BelGioioso Parmesan, tomato, Italian sausage.",
        price: "$15–18",
        image: "/menu/mac_pesto_parm.jpg",
      },
    ],
  },
];

export const SIDES: MenuItem[] = [
  {
    name: "Lotus Energy Drink",
    description: "No sugar. 160mg natural caffeine.",
    price: "$3",
    image: "/menu/lotus_energy_drink.jpg",
  },
];

export const ORDER_URL = "https://the-beach-bowl.square.site/";
