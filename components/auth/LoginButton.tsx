import { Button } from '@chakra-ui/react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const LoginButton = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  async function login() {
    try {
      const res = signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(res);
      const token = credential?.accessToken;
      console.log(token);
    } catch (error) {
      console.error(error);
    }
  }
  return <Button onClick={login}>SignIn</Button>;
};

export { LoginButton };
