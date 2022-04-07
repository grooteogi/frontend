<<<<<<< HEAD
import SignInModal from '../src/containers/SigninModal';
=======
import { SignInModal } from '../src/containers/SignInModal';
import { NormalSignupModal } from '../src/containers/NormalSignupModal';
>>>>>>> 114a5ec (test: Make NormalSignupModal visible in Home)

const Home = () => {
  return <SignInModal />;
};

const NormalSignupModalPage = () => {
  return <NormalSignupModal />;
};

export default NormalSignupModalPage;
