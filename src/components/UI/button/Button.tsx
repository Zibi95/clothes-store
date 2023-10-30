import { PropsWithChildren } from 'react';
import './button-styles.scss';

type ButtonProps = {
  buttonType?: 'google' | 'inverted';
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

const buttonTypes = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

function Button({ children, buttonType, ...buttonAttr }: PropsWithChildren<ButtonProps>) {
  return (
    <button
      {...buttonAttr}
      className={`button-container ${buttonType ? buttonTypes[buttonType] : ''}`}>
      {children}
    </button>
  );
}

export default Button;

