import { ChangeEventHandler } from 'react';
import { Group, Input, InputLabel } from './form-input.styles';

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
    <Group>
      <Input
        {...attr}
        id={attr.name}
      />
      {label && (
        <InputLabel
          htmlFor={attr.name}
          $shrink={attr.value.length > 0}>
          {label}
        </InputLabel>
      )}
    </Group>
  );
}

export default FormInput;

