

const SearchBox = ({ handleInput, searchTerm }) => {
  return (
    <form className="searchbox">
      <input type="text"
      value={searchTerm}
      onInput={handleInput}
      placeholder={"Enter a location"}/>
    </form>
  
  );
};

export default SearchBox;