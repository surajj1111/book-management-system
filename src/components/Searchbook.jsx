function Searchbook({ searchTerm, setSearchTerm }) {
  return (
    <div>

      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

    </div>
  );
}

export default Searchbook;