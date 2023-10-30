import SignUpForm from '../../components/sign-up-form/SignUpForm';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../services/firebase/firebase-utils';

function SignIn() {
  const logGooglePopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userRef = await createUserDocumentFromAuth(user);

    console.log(userRef);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGooglePopup}>Sign in with Google</button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;

