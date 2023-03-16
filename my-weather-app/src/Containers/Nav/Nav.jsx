import React from "react";

const Nav = ({ handleInput }) => {


    return (
      <div className="Nav__input">
      <input
        className="searchbox"
        type="text"
        placeholder="Search Location"
        onChange={handleInput}
      />
    </div>
     
    );
  };
  
  export default Nav;