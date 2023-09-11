import React from "react";
import passionfruitImage from "./../img/passionfruit.jpeg";

function Header() {
  const HeaderStyles = {
    backgroundColor: "#cbcfff",
    fontFamily: "sans-serif",
    paddingTop: "50px",
    textAlign: "center",
    fontSize: "30px",
  };
  return (
    <React.Fragment>
      <div style={HeaderStyles}>
        <h1>Lily's Lilikoi</h1>
        <img src={passionfruitImage} alt="passionfruit or lilikoi" />
        <h2>Manage Inventory Below:</h2>
      </div>
    </React.Fragment>
  );
}

export default Header;
