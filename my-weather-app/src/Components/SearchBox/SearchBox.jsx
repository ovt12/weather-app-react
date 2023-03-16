import "./SearchBox.scss";

const SearchBox = ({ handleInput }) => {
  return (
    <form className="search-box">
      <input type="text" onChange={handleInput} />
    </form>
  );
};

export default SearchBox;