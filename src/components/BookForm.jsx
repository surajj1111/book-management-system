import { useState, useEffect } from "react";
import { addBook } from "../services/api";

function BookForm({ fetchBooks, editingBook, handleUpdate, setEditingBook }) {

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  // When editing, fill the form with book data
  useEffect(() => {
    if (editingBook) {
      setBook(editingBook);
    } else {
      setBook({
        title: "",
        author: "",
        genre: "",
        year: "",
      });
    }
  }, [editingBook]);

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingBook) {
        // Update existing book
        await handleUpdate(book);
      } else {
        // Add new book
        await addBook(book);
        fetchBooks();
      }

      setBook({
        title: "",
        author: "",
        genre: "",
        year: "",
      });

    } catch (error) {
      console.log("Error submitting book", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="title"
        placeholder="Enter title"
        value={book.title}
        onChange={handleChange}
        style={{ width: "50%", padding: "10px", marginBottom: "20px" }}
      />

      <input
        type="text"
        name="author"
        placeholder="Enter author"
        value={book.author}
        onChange={handleChange}
        style={{ width: "50%", padding: "10px", marginBottom: "20px" }} 
      />

      <input
        type="text"
        name="genre"
        placeholder="Enter genre"
        value={book.genre}
        onChange={handleChange}
        style={{ width: "50%", padding: "10px", marginBottom: "20px" }}
      />

      <input
        type="number"
        name="year"
        placeholder="Enter year"
        value={book.year}
        onChange={handleChange}
        style={{ width: "50%", padding: "10px", marginBottom: "20px" }}
      />

      <div>
        <button 
          type="submit" 
          style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer" }}
        >
          {editingBook ? "Update Book" : "Add Book"}
        </button>

        {editingBook && (
          <button 
            type="button"
            onClick={() => setEditingBook(null)}
            style={{ padding: "10px 20px", marginLeft: "10px", backgroundColor: "#6c757d", color: "white", border: "none", cursor: "pointer" }}
          >
            Cancel
          </button>
        )}
      </div>

    </form>
  );
}

export default BookForm;
