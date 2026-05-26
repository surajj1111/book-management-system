import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import Searchbook from "./components/Searchbook";

import {
  getBooks,
  deleteBook,
  addBook,
  updateBook,
} from "./services/api";

function App() {

  const [books, setBooks] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [editingBook, setEditingBook] = useState(null);

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
      console.log("Deleting book with id:", id);
      const response = await deleteBook(id);
      console.log("Delete response:", response);
      fetchBooks();
      alert("Book deleted successfully!");
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Failed to delete book. Try again!");
    }
  };

  // Edit Book
  const handleEdit = (book) => {
    setEditingBook(book);
  };

  // Update Book
  const handleUpdate = async (updatedBook) => {
    try {
      await updateBook(editingBook.id, updatedBook);
      fetchBooks();
      setEditingBook(null);
      alert("Book updated successfully!");
    } catch (error) {
      console.error("Error updating book:", error);
      alert("Failed to update book. Try again!");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>

      <Navbar />

      <Searchbook searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {searchTerm === "" && (
        <BookForm 
          fetchBooks={fetchBooks}
          editingBook={editingBook}
          handleUpdate={handleUpdate}
          setEditingBook={setEditingBook}
        />
      )}

      <BookList
        books={filteredBooks}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

    </div>
  );
}

export default App;