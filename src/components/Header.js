import React from "react";
import CartButton from "./CartButton";
import "./Header.css"; 

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Medicine Shop</div>
        <div>
          <CartButton onClick={props.onShowCart} />
        </div>
      </div>
    </header>
  );
};

export default Header;