import { ChangeEventHandler, FormEventHandler, useState } from 'react';

import FormInput from '../form-input/FormInput';
import Button from '../UI/button/Button';
import './sign-in-form-styles.scss';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signAuthUserWithEmailAndPassword,
} from '../../services/firebase/firebase-utils';

const defaultFormInputs = {
  email: '',
  password: '',
};

function SignInForm() {
  const [formInputs, setFormInputs] = useState(defaultFormInputs);
  const { email, password } = formInputs;

  const clearFormFields = () => {
    setFormInputs(defaultFormInputs);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userRef = await createUserDocumentFromAuth(user);

    console.log(userRef);
  };

  const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
    const { name, value } = event.target;

    setFormInputs(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit: FormEventHandler = async event => {
    event.preventDefault();

    try {
      const response = await signAuthUserWithEmailAndPassword(email, password);
      clearFormFields();
      console.log(response);
    } catch (error: any) {
      if (error.code === 'auth/invalid-login-credentials') {
        alert('Invalid credentials');
      }
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in</span>
      <form onSubmit={handleSubmit}>
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
        <div className="controls-container">
          <Button type="submit">Sign in</Button>
          <Button
            buttonType="google"
            type="button"
            onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;

