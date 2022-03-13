import { NextComponentType } from 'next';
import { Flex, Box, Image, Button } from '@chakra-ui/react';

const Navbar: NextComponentType = () => {
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
          <Image src={'/logo.svg'} width='150px' marginLeft='40px' alt='' />
        </Flex>
        <Button variant='navbar-button'>How it works</Button>
        <Button variant='navbar-button'>Menus</Button>
      </Flex>
      <Flex>
        <Button variant='login-button'>Login</Button>
        <Button variant='sign-in-button' marginRight='40px'>
          Sign Up
        </Button>
      </Flex>
    </Flex>
  );
};

export { Navbar };
