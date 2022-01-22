
import { Bread, Burger, Drinks, Pizza, Sandwich } from "utils/shopSvgs";
export const Categories = [
    "burger",
    "burgers",
    "bread",
    "breads",
    "sandwiches",
    "sandwich",
    "pizza",
    "pizzas",
    "cheese",
    "steak",
  ];


export const dataOptions = [
    {
      content: "Buy 2 get 15 percent off",
      value: 2,
      percentOff: 15,
    },
    {
      content: "Buy 3 get 25 percent off",
      value: 3,
      percentOff: 25,
    },
    {
      content: "Buy 5 get 35 percent off",
      percentOff: 50,
      value: 5,
    },
  ];

 export const dataTypes = [
    {
      value: "Price: Low to High",
      sort: "price_lth",
    },
    {
      value: "Price: High to Low",
      sort: "price_htl",
    },
    {
      value: "Rate: Low to High",
      sort: "rate_lth",
    },
    {
      value: "Rate: High to Low",
      sort: "rate_htl",
    },
  ];

 export const typeOptions = [
    {
      img: Burger,
      name: "Burgers",
      type: "burgers",
    },
    {
      img: Bread,
      name: "Breads",
      type: "breads",
    },
    {
      img: Sandwich,
      name: "Sandwiches",
      type: "sandwiches",
    },
    {
      img: Drinks,
      name: "Drinks",
      type: "drinks",
    },
    {
      img: Pizza,
      name: "Pizzas",
      type: "pizzas",
    },
  ];

  export const priceOptions = [
    { content: "Under $100", range:{ price_lte: 100 } },
    { content: "$50 to $100", range: { price_gte: 50, price_lte: 100 }},
    { content: "Under $50", range:{ price_lte: 50 } },
    { content: "Above $100", range:{ price_gte: 100 } },
  ];