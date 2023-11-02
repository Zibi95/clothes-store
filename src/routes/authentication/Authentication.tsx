import SignInForm from '../../components/sign-in-form/SignInForm';
import SignUpForm from '../../components/sign-up-form/SignUpForm';
import { FormsContainer } from './authentication.styles';

function Authenticaton() {
  return (
    <FormsContainer>
      <SignInForm />
      <SignUpForm />
    </FormsContainer>
  );
}

export default Authenticaton;

