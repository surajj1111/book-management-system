import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Searchbook from "./components/Searchbook";

import {
  getBooks,
  deleteBook,
} from "./services/api";

function App() {

  const [books, setBooks] = useState([]);


  const [searchTerm, setSearchTerm] = useState("");

const filteredBooks = books.filter(
  (book) =>
    book.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||

    book.author
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
);
  // Fetch Books
  const fetchBooks = async () => {
    try {
      const response = await getBooks();

      setBooks(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  // Delete Book
  const handleDelete = async (id) => {
    try {
      await deleteBook(id);

      fetchBooks();

    } catch (error) {
      console.log("Error deleting book", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>

      <Navbar />

      <Searchbook searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <BookForm fetchBooks={fetchBooks} />

      <BookList
        books={filteredBooks}
        handleDelete={handleDelete}
      />

    </div>
  );
}

export default App;