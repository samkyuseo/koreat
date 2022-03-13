import { NextComponentType } from 'next';
import Image from 'next/image';

import { Center, Flex, Box, Button, Heading } from '@chakra-ui/react';

const Hero: NextComponentType = () => {
  return (
    <Center width='100%' height='650px' position='relative'>
      <Image
        src='/images/kimchi-stew.jpeg'
        layout='fill'
        objectFit='cover'
        alt=''
      />
      {/* <Box zIndex={1} marginY='auto' marginLeft='40px'> */}
      <Center flexDir='column'>
        <Heading
          variant='hero-heading'
          zIndex={1}
          // color='black'
          mb='10px'
          // background='white'
        >
          Authentic
        </Heading>
        <Heading
          variant='hero-heading'
          zIndex={1}
          // color='black'
          mb='10px'
          // background='white'
        >
          Korean Meals
        </Heading>
        <Heading
          variant='hero-heading'
          zIndex={1}
          // color='black'
          mb='10px'
          // background='white'
        >
          Delivered{' '}
        </Heading>
        <Button variant='hero-button' zIndex={1}>
          Get Started
        </Button>
      </Center>
      {/* </Box> */}
    </Center>
  );
};

export { Hero };
