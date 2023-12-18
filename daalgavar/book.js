const bookData = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    rating: 4.5,
    price: 15.99,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    rating: 4.8,
    price: 19.99,
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    rating: 4.7,
    price: 24.99,
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    rating: 4.6,
    price: 12.99,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    rating: 4.9,
    price: 18.99,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Fiction",
    rating: 4.3,
    price: 14.99,
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    rating: 4.2,
    price: 16.99,
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fantasy",
    rating: 4.8,
    price: 20.99,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    rating: 4.7,
    price: 17.99,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    rating: 4.9,
    price: 22.99,
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    rating: 4.9,
    price: 29.99,
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "Mystery",
    rating: 4.4,
    price: 21.99,
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Dystopian",
    rating: 4.5,
    price: 14.99,
  },
  {
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror",
    rating: 4.6,
    price: 18.99,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    rating: 4.7,
    price: 20.99,
  },
  {
    title: "The Odyssey",
    author: "Homer",
    genre: "Classics",
    rating: 4.5,
    price: 15.99,
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    genre: "Post-Apocalyptic",
    rating: 4.2,
    price: 16.99,
  },
  {
    title: "Gone with the Wind",
    author: "Margaret Mitchell",
    genre: "Historical Fiction",
    rating: 4.8,
    price: 23.99,
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    genre: "Science Fiction",
    rating: 4.6,
    price: 19.99,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure",
    rating: 4.4,
    price: 17.99,
  },
];

// add summary on object by like this `A captivating book by ${book.author}.`
let summary = bookData.map((a) => {
  return { summeryBook: a.title + " by " + a.author };
});

console.log(summary);
// find Expensive book more than 16
function findExp(main, num) {
  let expBook = main.filter((a) => {
    return a.price > num;
  });
  return expBook;
}
console.log(findExp(bookData, 20));

// find 12-18 priced range books
function findBook(main1, numb1, numb2) {
  let book = main1.filter((b) => {
    return b.price > numb1 && b.price < numb2;
  });
  return book;
}
console.log(findBook(bookData, 12, 18));

// sort books by rating

let rating = bookData.sort((a, b) => {
  return a.rating - b.rating;
});
console.log(rating);

// find more than 20 length books.
const max = 20;

let lenghts = bookData.filter((c) => {
  return c.title.length > max;
});

console.log(lenghts);
