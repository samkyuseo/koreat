import { NextComponentType } from 'next';
import { Flex, Box, Image } from '@chakra-ui/react';

const Navbar: NextComponentType = () => {
  return (
    <Flex
      top={0}
      position='fixed'
      width='100%'
      paddingY='10px'
      zIndex={1}
      bg='white'
      borderBottom='1px solid'
      borderColor='gray.100'
    >
      <Box width='200px' marginY='auto'>
        <Image src={'/logo.png'} boxSize='40px' margin='auto' />
      </Box>
    </Flex>
  );
};

export { Navbar };
