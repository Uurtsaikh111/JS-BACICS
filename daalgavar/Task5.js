const shoppingCartItems = [
  { name: "Laptop", price: 1200, quantity: 1, category: "Electronics" },
  { name: "Backpack", price: 80, quantity: 2, category: "Fashion" },
  { name: "Smartphone", price: 800, quantity: 1, category: "Electronics" },
  { name: "Shoes", price: 50, quantity: 1, category: "Fashion" },
  { name: "Book", price: 15, quantity: 3, category: "Books" },
  { name: "Headphones", price: 100, quantity: 1, category: "Electronics" },
  { name: "T-shirt", price: 20, quantity: 5, category: "Fashion" },
  { name: "Tablet", price: 300, quantity: 2, category: "Electronics" },
  { name: "Jeans", price: 60, quantity: 2, category: "Fashion" },
  { name: "Notebook", price: 10, quantity: 4, category: "Books" },
  { name: "Camera", price: 500, quantity: 1, category: "Electronics" },
  { name: "Dress", price: 70, quantity: 1, category: "Fashion" },
  {
    name: "External Hard Drive",
    price: 80,
    quantity: 1,
    category: "Electronics",
  },
  { name: "Sweater", price: 40, quantity: 3, category: "Fashion" },
  { name: "Fitness Tracker", price: 60, quantity: 1, category: "Electronics" },
  { name: "Sunglasses", price: 25, quantity: 2, category: "Fashion" },
  { name: "Cookbook", price: 18, quantity: 2, category: "Books" },
  { name: "Gaming Console", price: 300, quantity: 1, category: "Electronics" },
  { name: "Running Shoes", price: 55, quantity: 1, category: "Fashion" },
  { name: "Desk Chair", price: 120, quantity: 1, category: "Furniture" },
];

let result = shoppingCartItems.map((a) => {
  return {
    name: a.name,
    price: a.price * 0.9,
    quantity: a.quantity,
    totalCost: a.price * 0.9 * a.quantity,
  };
});
console.log(result);
let findProduct = result.filter((a) => {
  return a.quantity > 2;
});
console.log(findProduct);

//Discounttai product uud deer 2 oos deesh quantity tai product uudiig gargaj ir

//result aa ashiglaj function bicheed dundajiign olood filter dej busad productiig ol.

function findAvg(main) {
  let avg = main.price;
}
findAvg(result);
