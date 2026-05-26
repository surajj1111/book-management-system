function BookList({ books, handleDelete, handleEdit }) {
  const confirmDelete = (book) => {
    if (!book.id || isNaN(book.id)) {
      alert("Error: Cannot delete this book (invalid ID)");
      return;
    }
    
    if (window.confirm(`Are you sure you want to delete "${book.title}"?`)) {
      handleDelete(book.id);
    }
  };

  // Filter out books with invalid IDs (NaN)
  const validBooks = books.filter(book => book.id && !isNaN(book.id));

  return (
    <div>
      <h2>Book List</h2>

      {validBooks.length === 0 ? (
        <p>No books found</p>
      ) : (
        validBooks.map((book) => (
          <div key={book.id} style={{ border: "1px solid #ddd", padding: "15px", marginBottom: "10px", borderRadius: "5px" }}>
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

            <div style={{ display: "flex", gap: "10px" }}>
              <button 
                onClick={() => handleEdit(book)}
                style={{ 
                  backgroundColor: "#ffc107", 
                  color: "black", 
                  padding: "8px 15px", 
                  border: "none", 
                  borderRadius: "4px", 
                  cursor: "pointer"
                }}
              >
                Edit
              </button>

              <button 
                onClick={() => confirmDelete(book)}
                style={{ 
                  backgroundColor: "#ff4444", 
                  color: "white", 
                  padding: "8px 15px", 
                  border: "none", 
                  borderRadius: "4px", 
                  cursor: "pointer"
                }}
              >
                Delete
              </button>
            </div>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default BookList;