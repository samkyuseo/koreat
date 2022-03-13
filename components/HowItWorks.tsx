import { NextComponentType } from 'next';
import Image from 'next/image';

import { Flex, Box, Heading, Text, Center } from '@chakra-ui/react';
const HowItWorks: NextComponentType = () => {
  return (
    <Box paddingY='50px'>
      <Box marginLeft='200px' marginRight='200px'>
        <br />
        <Heading marginBottom='20px'>How it works</Heading>
        <Flex
          justifyContent='space-between'
          flexDir={{ base: 'column', lg: 'row' }}
        >
          <Flex
            flexDir='column'
            alignItems='center'
            textAlign='center'
            width='300px'
          >
            <Image src='/gifs/hiw1.gif' width='170px' height='170px' alt='' />
            <br />
            <Heading size='md'>Choose your Korean meals</Heading>
            <Text size='md'>
              We only use delicious recipes approved by a committee of Korean
              mothers.
            </Text>
          </Flex>
          <Flex
            flexDir='column'
            alignItems='center'
            textAlign='center'
            width='300px'
          >
            <Image src='/gifs/hiw2.gif' width='170px' height='170px' alt='' />
            <br />
            <Heading size='md'>Unpack your box</Heading>
            <Text size='md'>
              We source authentic ingredients and deliver them in an insulated
              box right to your door.
            </Text>
          </Flex>
          <Flex
            flexDir='column'
            alignItems='center'
            textAlign='center'
            width='300px'
          >
            <Image src='/gifs/hiw3.gif' width='170px' height='170px' alt='' />
            <br />
            <Heading size='md'>Cook, create, enjoy</Heading>
            <Text size='md'>
              Follow our easy step-by-step recipes. Make yourself and your loved
              ones amazing Korean meals.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export { HowItWorks };
