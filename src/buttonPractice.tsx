import React from "react";

interface buttonProps {
  buttonText : string
}

const buttonPractice:React.FC<buttonProps> = ({buttonText}) => {

  return (
    <button className="">
      {buttonText}
    </button>
  )
}

export default buttonPractice;