export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Try Free for 1 week",
    description:
      "A free week to see if your homeschoolers enjoy learning to type!",
    price: "$0",
    priceIntervalName: "per family",
    stripe_price_id: null,
    features: ["Fun lessons", "Cute characters to learn with"],
  },
  {
    id: "pro",
    name: "Lifetime access",
    description: "Lifetime access to Sami-tate keybord learning tools",
    price: "$50",
    priceIntervalName: "for family of 4",
    stripe_price_id: "price_1NkdZCHMjzZ8mGZnRSjUm4yA",
    stripe_product_id: "prod_OXj1CcemGMWOlU",
    features: [
      "Up to 8 users",
      "Each lesson is scored and recorded",
      "Become an expert typer",
    ],
  },
  {
    id: "enterprise",
    name: "School",
    description: "A plan for schools with 10 children or more.",
    price: "$150",
    priceIntervalName: "One time",
    stripe_price_id: "price_1Nkda2HMjzZ8mGZn4sKvbDAV",
    stripe_product_id: "prod_OXj20YNpHYOXi7",
    features: [
      "Up to 40 users",
      "Keep track of all your students progress",
      "Fun and exciting!",
    ],
  },
]
