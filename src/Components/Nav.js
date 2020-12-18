import styled from "styled-components";
import React from "react";

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Wrapper = styled.div`
  opacity: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Div = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  align-content: space-around;
  height: 4rem;
`;

const H1 = styled.h1`
  margin-left: 0px;
  font-size: 3rem;
`;

const A = styled.a`
  width: 50%;
  margin-top: 10px;
  margin-left: 0px;
  text-decoration: none;
  font-size: 2rem;
  background-color: grey;
  text-align: center;
  height: 3rem;
`;
const Nav = () => {
  return (
    <Wrapper>
      <Container>
        <Div>
          <H1>Lambda Eats</H1>
          <A href="Home">HOME</A>
        </Div>
      </Container>
    </Wrapper>
  );
};

export default Nav;
