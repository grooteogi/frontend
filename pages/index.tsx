<<<<<<< HEAD
import SignInModal from '../src/containers/SigninModal';
=======
import { SignInModal } from '../src/containers/SignInModal';
<<<<<<< HEAD
import { NormalSignupModal } from '../src/containers/NormalSignupModal';
>>>>>>> 114a5ec (test: Make NormalSignupModal visible in Home)
=======
import { NormalSignInModal } from '../src/containers/NormalSignInModal';
>>>>>>> 697b26d (test: Create NormalSignInModal Page)

const Home = () => {
  return <SignInModal />;
};

<<<<<<< HEAD
const NormalSignupModalPage = () => {
  return <NormalSignupModal />;
};

export default NormalSignupModalPage;
=======
const NormalSignInPage = () => <NormalSignInModal />;

export default NormalSignInPage;
>>>>>>> 697b26d (test: Create NormalSignInModal Page)
