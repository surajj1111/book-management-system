function Searchbook({ searchTerm, setSearchTerm }) {
  return (
    <div>

      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "50%", padding: "10px", marginBottom: "20px" }}
      />

    </div>
  );
}

export default Searchbook;