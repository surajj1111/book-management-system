import { useState } from "react";
import { addBook } from "../services/api";

function BookForm({ fetchBooks }) {

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addBook(book);

      fetchBooks();

      setBook({
        title: "",
        author: "",
        genre: "",
        year: "",
      });

    } catch (error) {
      console.log("Error adding book", error);
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
      />

      <input
        type="text"
        name="author"
        placeholder="Enter author"
        value={book.author}
        onChange={handleChange}
      />

      <input
        type="text"
        name="genre"
        placeholder="Enter genre"
        value={book.genre}
        onChange={handleChange}
      />

      <input
        type="number"
        name="year"
        placeholder="Enter year"
        value={book.year}
        onChange={handleChange}
      />

      <button type="submit">
        Add Book
      </button>

    </form>
  );
}

export default BookForm;