import SignInForm from '../../components/sign-in-form/SignInForm';
import SignUpForm from '../../components/sign-up-form/SignUpForm';
import './authentication-styles.scss';

function Authenticaton() {
  return (
    <div className="forms-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authenticaton;

