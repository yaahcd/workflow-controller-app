import { BaseButton, AddButton } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
    base: "base",
    add: "add",
  };

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => {
    return {
      [BUTTON_TYPE_CLASSES.base]: BaseButton,
      [BUTTON_TYPE_CLASSES.add]: AddButton,
    }[buttonType];
  };

function Button({children, buttonType, ...otherProps }) {
    const CustomButton = getButton(buttonType);


    return (
        <CustomButton {...otherProps}>
          {children}
        </CustomButton>
      );
  
}

export default Button
