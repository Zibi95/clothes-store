import { PropsWithChildren } from 'react';
import './button-styles.scss';

type ButtonProps = {
  buttonType?: 'google' | 'inverted';
};

const buttonTypes = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

function Button({ children, buttonType }: PropsWithChildren<ButtonProps>) {
  return <button className={`button-container ${buttonType ? buttonTypes[buttonType] : ''}`}>{children}</button>;
}

export default Button;

