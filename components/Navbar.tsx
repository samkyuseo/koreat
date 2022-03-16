import Link from 'next/link';
import { NextComponentType } from 'next';
import { Flex, Image, Button } from '@chakra-ui/react';

const Navbar: NextComponentType = (props) => {
  return (
    <Flex
      position='fixed'
      width='100%'
      paddingY='20px'
      zIndex={100}
      borderBottom='1px solid'
      borderColor='gray.100'
      justifyContent='space-between'
      bg='white'
    >
      <Flex>
        <Flex width='200px' marginY='auto'>
          <Link href='/' passHref>
            <Image src={'/logo.svg'} width='150px' marginLeft='40px' alt='' />
          </Link>
        </Flex>
        <Button variant='navbar-button'>How it works</Button>
        <Button variant='navbar-button'>Menus</Button>
      </Flex>
      <Flex>
        <Button variant='login-button'>
          <Link href={'/login'}>Login</Link>
        </Button>
        <Button variant='sign-in-button' marginRight='40px'>
          Sign Up
        </Button>
      </Flex>
    </Flex>
  );
};

export { Navbar };
