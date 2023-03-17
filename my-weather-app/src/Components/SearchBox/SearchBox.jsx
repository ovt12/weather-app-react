

const SearchBox = ({ handleInput}) => {
  return (
    <form className="search-box">
      <input type="text"
      onInput={handleInput}
      onChange={handleInput} />
    </form>
  );
};

export default SearchBox;