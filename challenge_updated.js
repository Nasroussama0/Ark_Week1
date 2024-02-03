const books = require("./books.json");

// Function to find the price of a book by its name
function priceOfBook(bookName) {
  for (let i = 0; i < books.length; i++) {
    if (books[i].title === bookName) {
      return books[i].price;
    }
  }
  return 'Book not found';
}

// Function to find affordable books within a given budget
function affordableBooks(budget) {
  let affordableBooksList = [];
  for (let i = 0; i < books.length; i++) {
    if (books[i].price <= budget) {
      affordableBooksList.push(books[i].title);
    }
  }
  return affordableBooksList;
}

// Function to find books by a specific genre
function findBookByGenre(genre) {
  const booksInGenre = [];
  for (let i = 0; i < books.length; i++) {
    const bookGenres = books[i].genres;
    for (let j = 0; j < bookGenres.length; j++) {
      if (bookGenres[j] === genre) {
        booksInGenre.push(books[i].title);
        break; // Stop checking other genres for this book
      }
    }
  }
  return booksInGenre;
}

// Function to group books by genre
function groupByGenre() {
  const groupedBooks = {};

  for (let i = 0; i < books.length; i++) {
    const genres = books[i].genres;

    for (let j = 0; j < genres.length; j++) {
      const genre = genres[j];

      if (!groupedBooks[genre]) {
        groupedBooks[genre] = [];
      }

      groupedBooks[genre].push({
        id: books[i].id,
        title: books[i].title,
        author: books[i].author,
        description: books[i].description,
        price: books[i].price,
      });
    }
  }

  return groupedBooks;
}

// Function to sort books by price
function sortBooksByPrice() {
  const n = books.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (books[j].price > books[j + 1].price) {
        // Swap books[j] and books[j + 1]
        const temp = books[j];
        books[j] = books[j + 1];
        books[j + 1] = temp;
      }
    }
  }
  return books; // Return the sorted array
}

// Main function for testing
(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();


