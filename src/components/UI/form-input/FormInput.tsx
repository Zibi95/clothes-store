import { ChangeEventHandler } from 'react';
import './form-input-styles.scss';

type FormInputProps = {
  label?: string;
  type: string;
  name: string;
  value: string;
  required: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

function FormInput({ label, ...attr }: FormInputProps) {
  return (
    <div className="group">
      <input
        className="form-input"
        {...attr}
        id={attr.name}
      />
      {label && (
        <label
          htmlFor={attr.name}
          className={`${attr.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;

