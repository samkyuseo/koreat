import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react';
import * as React from 'react';
import { SiHive, SiMarketo, SiMicrosoft } from 'react-icons/si';
import { ActionButton } from '../components/ActionButton';
import { PricingCard } from '../components/PricingCard';

export const CallToAction = () => (
  <Box bg='gray.50' paddingY='100px'>
    <Box marginLeft='200px' marginRight='200px'>
      <Heading marginBottom='20px'>Flexible Plans</Heading>
      <Text>
        Skip weeks, swap recipes, and cancel anytime - only order what and when
        you want. No commitments.
      </Text>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <SimpleGrid
        columns={{ base: 1, lg: 3 }}
        spacing={{ base: '8', lg: '0' }}
        maxW='7xl'
        mx='auto'
        justifyItems='center'
        alignItems='center'
      >
        <PricingCard
          data={{
            price: '$29',
            name: '3 Meals / Week',
            features: ['Order up to 3 meals a week'],
          }}
          icon={'🎉'}
          button={
            <ActionButton variant='outline' borderWidth='2px'>
              Buy now
            </ActionButton>
          }
        />
        <PricingCard
          zIndex={1}
          isPopular
          transform={{ lg: 'scale(1.05)' }}
          data={{
            price: '$69',
            name: '6 Meals / Week',
            features: ['Order up to 6 meals a week'],
          }}
          icon={'😍'}
          button={<ActionButton>Buy now</ActionButton>}
        />
        <PricingCard
          data={{
            price: '120',
            name: '12 Meals / Week',
            features: ['Order up to 12 meals a week'],
          }}
          icon={'🇰🇷'}
          button={
            <ActionButton variant='outline' borderWidth='2px'>
              Buy now
            </ActionButton>
          }
        />
      </SimpleGrid>
    </Box>
  </Box>
);
