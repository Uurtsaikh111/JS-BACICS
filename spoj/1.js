let products = [
  {
    name: "iphone8",
    price: 800,
    category: "electron",
    brand: "Apple",
    stock: 10,
  },
  {
    name: "iphone9",
    price: 900,
    category: "electron",
    brand: "Apple",
    stock: 8,
  },
  {
    name: "shirt",
    price: 200,
    category: "clothes",
    brand: "adidas",
    stock: 3,
  },
  {
    name: "shirt1",
    price: 300,
    category: "clothes",
    brand: "nike",
    stock: 1,
  },
  {
    name: "surron",
    price: 1500,
    category: "bike",
    brand: "yamaho",
    stock: 5,
  },
  {
    name: "excel",
    price: 5000,
    category: "car",
    brand: "honda",
    stock: 6,
  },
  {
    name: "display",
    price: 200,
    category: "electron",
    brand: "mi",
    stock: 20,
  },
  {
    name: "notebook",
    price: 900,
    category: "electron",
    brand: "msi",
    stock: 10,
  },
  {
    name: "table",
    price: 800,
    category: "qe",
    brand: "Apple",
    stock: 10,
  },
  {
    name: "iphone11",
    price: 1000,
    category: "electron",
    brand: "Apple",
    stock: 6,
  },
];

//products[0].price = products[0].price * 0.9;
//console.log(products);

for (let i = 0; i < products.length; i = i + 1) {
  let changePrices = products[i].price * 0.9;
  console.log(changePrices);
}

for (let i = 0; i < products.length; i = i + 1) {
  if (products[i].category == "electron") {
    let selectedBrand = products[i];
    console.log(selectedBrand);
  }
}
