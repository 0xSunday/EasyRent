import React, { MouseEventHandler } from "react";

interface customBtn {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLBodyElement>;
}

const CustomButton = ({ title, containerStyles, handleClick }: customBtn) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
