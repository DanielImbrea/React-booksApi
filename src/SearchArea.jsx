import React from "react";
import styled from "styled-components";

const SearchArea = (props) => {
  return (
    <HeaderComponent className="search-area">
      <form onSubmit={props.searchBook}>
        <InputComponent onChange={props.handleSearch} type="text" />
        <ButtonComponent type="submit">Search</ButtonComponent>
        <select defaultValue="Sort" onChange={props.handleSort}>
          <option disabled value="sort">Sort</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
      </form>
    </HeaderComponent>
  );
};

export default SearchArea;

const HeaderComponent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
const InputComponent = styled.input`
  padding: 1rem;
`;

const ButtonComponent = styled.button`
  padding: 1rem; 
  outline: none;
  &:hover {
    background-color: #e5e5e5;
  }
`;
