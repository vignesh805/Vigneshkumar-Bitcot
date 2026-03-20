
const SearchContact = ({ onSearch }) => {
  return (
    <>
    <input
      className="search-input"
      type="text"
      placeholder="Search Contact"
      onChange={(e) => onSearch(e.target.value)}
    />
    </>
  );
};

export default SearchContact;