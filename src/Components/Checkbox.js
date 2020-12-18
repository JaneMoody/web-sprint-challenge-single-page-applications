import React, { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";
const Checkbox = (props) => {
  const [cSelected, setCSelected] = useState([]);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  };
  return (
    <div>
      <ButtonGroup>
        <Button
          color="primary"
          onClick={() => onCheckboxBtnClick(1)}
          active={cSelected.includes(1)}
        >
          Pepperoni
        </Button>
        <Button
          color="primary"
          onClick={() => onCheckboxBtnClick(2)}
          active={cSelected.includes(2)}
        >
          Sausage
        </Button>
        <Button
          color="primary"
          onClick={() => onCheckboxBtnClick(3)}
          active={cSelected.includes(3)}
        >
          Canadian Bacon
        </Button>
      </ButtonGroup>
      <p>Selected: {JSON.stringify(cSelected)}</p>
    </div>
  );
};

export default Checkbox;
