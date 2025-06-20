const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  addBook(book) {
    const { title, author, year } = book;

    // Validate input
    if (
      typeof title !== "string" || title.trim() === "" ||
      typeof author !== "string" || author.trim() === "" ||
      typeof year !== "number" || isNaN(year)
    ) {
      console.log("❌ Book information is incomplete or invalid.");
      return false;
    }

    // Check for duplicates
    if (this.findBookByTitle(title)) {
      console.log("❌ Book with this title already exists.");
      return false;
    }

    this.books.push({ title, author, year });
    console.log(`✅ Book "${title}" added successfully.`);
    return true;
  },

  findBookByTitle(title) {
    return this.books.find(book => book.title === title);
  },

  removeBook(title) {
    const index = this.books.findIndex(book => book.title === title);

    if (index !== -1) {
      const removed = this.books.splice(index, 1)[0];
      console.log(`✅ Book "${removed.title}" removed.`);
      return true;
    } else {
      console.log("❌ Book not found.");
      return false;
    }
  }
};

// Test case with missing title
library.addBook({ author: "George Orwell", year: 1949 }); // ❌

// Valid book addition
library.addBook({ title: "1984", author: "George Orwell", year: 1949 }); // ✅

console.log("📚 Total books:", library.books.length); // Should be 2
