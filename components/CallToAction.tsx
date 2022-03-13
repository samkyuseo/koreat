import { Button, Center, Flex, Heading, Text } from '@chakra-ui/react';
import { NextComponentType } from 'next';

const CallToAction: NextComponentType = () => {
  return (
    <Center height='500px' flexDir='column' bg='gray.50'>
      <Flex flexDir='column' textAlign='center' marginBottom='20px'>
        <Heading size='lg' marginBottom='20px'>
          Starting at only $8.50 per serving
        </Heading>
        <Text color='gray.600' fontWeight='bold'>
          No commitment. Skipping or canceling meals is easy.
        </Text>
      </Flex>
      <Button variant='cta-button'>Choose Your Plan</Button>
    </Center>
  );
};

export { CallToAction };
