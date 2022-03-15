import { Button } from '@chakra-ui/react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const SignUpButton = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  async function signup() {
    try {
      const res = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential?.accessToken;
      console.log(token);
    } catch (error) {
      console.error(error);
    }
  }
  return <Button onClick={signup}>SignIn</Button>;
};

export { SignUpButton };
