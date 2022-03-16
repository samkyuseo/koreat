import { Box, BoxProps, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import { CardBadge } from './CardBadge';

export interface CardProps extends BoxProps {
  isPopular?: boolean;
}

export const Card = (props: CardProps) => {
  const { children, isPopular, ...rest } = props;
  return (
    <Box
      bg={'white'}
      position='relative'
      px='6'
      pb='6'
      pt='16'
      overflow='hidden'
      shadow='lg'
      maxW='md'
      width='100%'
      {...rest}
    >
      {isPopular && <CardBadge bg='red.600'>Popular</CardBadge>}
      {children}
    </Box>
  );
};
