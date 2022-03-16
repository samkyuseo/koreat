import { Box } from '@chakra-ui/react';
import { NextComponentType } from 'next';

import {
  Image,
  Stack,
  Text,
  Center,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <Center height='200px' bg='white'>
      <Stack spacing={{ base: '4', md: '5' }} marginX='40px'>
        <Stack justify='space-between' direction='row' align='center'>
          <Image src={'/logo.svg'} width='100px' alt='' />
          <ButtonGroup variant='ghost'>
            <IconButton
              as='a'
              href='#'
              aria-label='LinkedIn'
              icon={<FaLinkedin fontSize='1.25rem' />}
            />
            <IconButton
              as='a'
              href='#'
              aria-label='GitHub'
              icon={<FaGithub fontSize='1.25rem' />}
            />
            <IconButton
              as='a'
              href='#'
              aria-label='Twitter'
              icon={<FaTwitter fontSize='1.25rem' />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize='sm' color='subtle'>
          &copy; {new Date().getFullYear()} Koreats, Inc. All rights reserved.
        </Text>
      </Stack>
    </Center>
  );
};

export { Footer };
