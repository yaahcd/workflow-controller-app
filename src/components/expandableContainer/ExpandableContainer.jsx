import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

function ExpandableContainer({ mainBtn, title, children }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((current) => {
      return !current;
    });
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={"collapse-btn" + (mainBtn ? "-main" : '')}
      >
        {title}
        {isClicked ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
      </button>
      {isClicked && children}
    </>
  );
}

export default ExpandableContainer;