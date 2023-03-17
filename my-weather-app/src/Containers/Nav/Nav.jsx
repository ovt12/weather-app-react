import React from "react";
import SearchBox from "../../Components/SearchBox/SearchBox";

const Nav = ({ handleInput, searchTerm, filtered}) => {


    return (
      <div className="Nav__input">
      <SearchBox 
      handleInput={handleInput}
      searchTerm={searchTerm}/>
    </div>
     
    );
  };
  
  export default Nav;