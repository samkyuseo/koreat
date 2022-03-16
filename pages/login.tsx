import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import { NextPage } from 'next';
import * as React from 'react';
import { OAuthButtonGroup } from '../components/OAuthButtonGroup';
import { PasswordField } from '../components//PasswordField';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
const Login: NextPage = () => (
  <Box width='100%' height='100vh' bg='gray.50'>
    <Navbar />
    <Container
      maxW='lg'
      py={{ base: '12', md: '24' }}
      px={{ base: '0', sm: '8' }}
    >
      <Stack spacing='8'>
        <Stack spacing='6'>
          <br />
          <br />
          <Stack spacing={{ base: '2', md: '3' }} textAlign='center'>
            <Heading>Log in to your account</Heading>
            <HStack spacing='1' justify='center'>
              <Text color='muted'>{"Don't have an account?"}</Text>
              <Button variant='link' colorScheme='blue'>
                Sign up
              </Button>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: '0', sm: '8' }}
          px={{ base: '4', sm: '10' }}
          bg='white'
          boxShadow='md'
          borderRadius='xl'
        >
          <Stack spacing='6'>
            <Stack spacing='5'>
              <FormControl>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input id='email' type='email' />
              </FormControl>
              <PasswordField />
            </Stack>
            <HStack justify='space-between'>
              <Checkbox defaultIsChecked>Remember me</Checkbox>
              <Button variant='link' colorScheme='blue' size='sm'>
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing='6'>
              <Link href={'/dashboard'} passHref>
                <Button variant='sign-in-button'>Login</Button>
              </Link>
              <HStack>
                <Divider />
                <Text fontSize='sm' whiteSpace='nowrap' color='muted'>
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup />
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  </Box>
);

export default Login;
