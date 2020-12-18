import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";
import style from "../App.css";
import React from "react";
import Nav from "../Components/Nav";
import McD from "../Components/mcdonalds.jfif";
import Pjs from "../Components/papajohns.jfif";
import SB from "../Components/starbucks.jfif";

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
  grid-template-columns: auto;
  justify-content: center;
  width: 100%;
  align-content: center;
  margin: auto;
  height: 20rem;
  background-color: black;
`;
const Div2 = styled.div``;
const H2 = styled.h2``;
const Div3 = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 100;
`;
const Foods = styled.div`
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 20rem;
  padding: 2% 1% 2% 1%;
`;

const PizzaButton = styled.button`
  height: 2rem;
  width: 20rem;
`;

const Home = () => {
  const history = useHistory();
  const handleLoginClick = () => {
    history.push("/Form");
  };

  return (
    <Wrapper>
      <Container>
        <div>
          <Nav />
        </div>
        <Div>
          <h1 style={{ color: "white", fontSize: "3rem" }}>
            Your Favorite Food Delivered While Coding
          </h1>
          <PizzaButton onClick={handleLoginClick}>Pizza?</PizzaButton>
        </Div>
        <Div2>
          <H2>Food Delivery in Your City</H2>
        </Div2>
        <Div3>
          <Foods>
            <Image src={McD} alt="" />
            <p>$ McDonalds</p>
            <p>20-30 mins</p>
            <p>$5.99 Delivery Fee</p>
          </Foods>
          <Foods>
            <Image src={Pjs} alt="" />
            <p>$$ Papa John's</p>
            <p>30-40 mins</p>
            <p>$5.99 Delivery Fee</p>
          </Foods>
          <Foods>
            <Image src={SB} alt="" />
            <p>$$$ Starbucks</p>
            <p>10-30 mins</p>
            <p>$5.99 Delivery Fee</p>
          </Foods>
          <Foods>
            <Image src={McD} alt="" />
            <p>$ McDonalds</p>
            <p>20-30 mins</p>
            <p>$5.99 Delivery Fee</p>
          </Foods>
          <Foods>
            <Image src={Pjs} alt="" />
            <p>$$ Papa John's</p>
            <p>30-40 mins</p>
            <p>$5.99 Delivery Fee</p>
          </Foods>
          <Foods>
            <Image src={SB} alt="" />
            <p>$$$ Starbucks</p>
            <p>10-30 mins</p>
            <p>$5.99 Delivery Fee</p>
          </Foods>
        </Div3>
      </Container>
    </Wrapper>
  );
};

export default Home;
