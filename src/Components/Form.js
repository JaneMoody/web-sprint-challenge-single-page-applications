import styled from "styled-components/macro";
import React from "react";
import Checkbox from "../Components/Checkbox";
import Pizza from "../Components/pizza.jfif";

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
  background-color: black;
  width: 100%;
  color: white;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 3rem;
`;

const Image = styled.img``;

const H2 = styled.h2`
  font-size: 2.5rem;
`;

const Div2 = styled.div`
  font-size: 2.5rem;
  background-color: black;
  width: 100%;
  color: white;
  text-align: center;
`;

const Div3 = styled.div`
  font-size: 2.5rem;
  background-color: black;
  width: 100%;
  color: white;
  text-align: center;
`;

const Div4 = styled.div`
  font-size: 2.5rem;
  background-color: black;
  width: 100%;
  color: white;
  text-align: center;
`;

const Div5 = styled.div`
  font-size: 2.5rem;
  background-color: black;
  width: 100%;
  color: white;
  text-align: center;
`;
const H3 = styled.h3`
  font-size: 2rem;
`;

const H4 = styled.h4`
  font-size: 1.9rem;
`;

const Li = styled.li`
  background-color: black;
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
`;

const Select = styled.select`
  font-size: 1.5rem;
  cursor: pointer;
`;

const Button = styled.button`
  margin-bottom: 2%;
  font-size: 2rem;
  cursor: pointer;
`;

const Form = () => {
  return (
    <Wrapper>
      <Container>
        <Div>
          <H1>Build Your Own Pizza</H1>
          <Image src={Pizza} alt="" />
        </Div>
        <Div2>
          <H2>Build Your Own Pizza</H2>
          <H3>Choice of Size</H3>
          <H4>Required</H4>
        </Div2>
        <Div2>
          <ul style={{ width: "100%", cursor: "pointer" }}>
            <Li>Small</Li>
            <Li>Medium</Li>
            <Li>Large</Li>
          </ul>
        </Div2>
        <Div3>
          <H3>Choice of Sauce</H3>
          <H4>Required</H4>
        </Div3>
        <Div4>
          <Select>
            <option style={{ cursor: "pointer" }}>Original Blend</option>
            <option style={{ cursor: "pointer" }}>Garlic Ranch</option>
            <option style={{ cursor: "pointer" }}>BBQ Sauce</option>
            <option style={{ cursor: "pointer" }}>Spinach Alfredo</option>
          </Select>
        </Div4>
        <Div5>
          <H3>Add Toppings</H3>
          <H4>Choose up to 10</H4>
        </Div5>
        <Div>
          <Checkbox />
        </Div>
        <Div>
          <H3>Special Instructions</H3>
        </Div>
        <Div>
          <Button>Add To Order</Button>
        </Div>
      </Container>
    </Wrapper>
  );
};

export default Form;
