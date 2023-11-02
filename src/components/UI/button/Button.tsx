import { PropsWithChildren } from 'react';
import { BaseButton, GoogleButton, InvertedButton } from './button.styles';

export enum ButtonTypes {
  Base = 'base',
  Google = 'google-sign-in',
  Inverted = 'inverted',
}

type ButtonProps = {
  buttonType?: ButtonTypes;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

const getButton = (buttonType = ButtonTypes.Base) =>
  ({
    [ButtonTypes.Base]: BaseButton,
    [ButtonTypes.Google]: GoogleButton,
    [ButtonTypes.Inverted]: InvertedButton,
  }[buttonType]);

function Button({ children, buttonType, ...buttonAttr }: PropsWithChildren<ButtonProps>) {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...buttonAttr}>{children}</CustomButton>;
}

export default Button;

