function BookList({ books, handleDelete }) {
  return (
    <div>
      <h2>Book List</h2>

      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        books.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>

            <p>
              <strong>Author:</strong> {book.author}
            </p>

            <p>
              <strong>Genre:</strong> {book.genre}
            </p>

            <p>
              <strong>Year:</strong> {book.year}
            </p>

            <button onClick={() => handleDelete(book.id)}>
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default BookList;