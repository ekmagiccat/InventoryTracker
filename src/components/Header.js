import React from "react";
import passionfruitImage from "./../img/passionfruit.jpeg";

function Header() {
  const HeaderStyles = {
    backgroundColor: "#000000",
    fontFamily: "sans-serif",
    paddingTop: "50px",
    textAlign: "center",
  };
  return (
    <React.Fragment>
      <div style={HeaderStyles}>
        <h1>Lily's Lilikoi</h1>
        <img src={passionfruitImage} alt="passionfruit or lilikoi" />
      </div>
    </React.Fragment>
  );
}

export default Header;
