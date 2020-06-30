import React from "react";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderComponent>
      <i className="fas fa-book fa-2x"></i>
      <h1>Book Cards</h1>
    </HeaderComponent>
  );
};

export default Header;


const HeaderComponent = styled.div`
display:flex;
justify-content:center;
align-items:center;
background:#e3e3e3;
height:10vh;

  .fa-book{
    margin-right:1rem;
  }
`;
