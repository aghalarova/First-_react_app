import React from "react";
import "./index.scss";
const PrimaryButton = (props) => {
  // console.log(props);

  const handleClick = () => {
    console.log("a");
  };
  return (
    <button
      
      onClick={() => handleClick()}
     
    >
      {props.btnTextContent}
    </button>
  );
};

export default PrimaryButton;
