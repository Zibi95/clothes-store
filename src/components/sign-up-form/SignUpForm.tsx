import { ChangeEventHandler, FormEventHandler, useState } from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../services/firebase/firebase-utils';
import FormInput from '../form-input/FormInput';
import Button from '../UI/button/Button';
import './sign-up-form-styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit: FormEventHandler = async event => {
    event.preventDefault();

    if (password !== confirmPassword || password.length < 6) {
      console.log('Error');
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(email, password);

      if (response) {
        const user = { ...response.user, displayName };
        const userRef = await createUserDocumentFromAuth(user);
      }
    } catch (error) {
      console.log(error);
    }

    resetFormFields();
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    const { name, value } = event.target;

    setFormFields(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          type="text"
          required
        />
        <FormInput
          label="Email"
          name="email"
          value={email}
          onChange={handleChange}
          type="email"
          required
        />
        <FormInput
          label="Password"
          name="password"
          value={password}
          onChange={handleChange}
          type="password"
          required
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          type="password"
          required
        />
        <Button>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;

