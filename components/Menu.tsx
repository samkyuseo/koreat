import { Box, Heading, Text, Image, Badge, Flex } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';

const Menu = () => {
  return (
    <Box bg='gray.50' paddingY='50px'>
      <Box marginLeft='200px' marginRight='200px'>
        <br />
        <Box>
          <Heading>Our Menu</Heading>
          <br />
          <Text>
            We have a weekly rotating menu of a few classic Korean comfort
            dishes. Below are some of our favorites!
          </Text>
          <br />
          <Flex justifyContent='space-between'>
            <MenuItem
              imageUrl='/images/dak-galbi.jpeg'
              title='Bul Dak Galbi'
              formattedPrice='$8.95 '
              reviewCount={34}
              rating={5}
              meat='Chicken'
              time='22 mins'
              spice='spicy'
            />
            <MenuItem
              imageUrl='/images/pajeon.jpeg'
              title='Pajeon'
              formattedPrice='$7.95 '
              reviewCount={76}
              rating={5}
              meat='Vegan'
              time='18 mins'
              spice='mild'
            />
            <MenuItem
              imageUrl='/images/la-galbi.jpeg'
              title='LA Galbi'
              formattedPrice='$12.95 '
              reviewCount={150}
              rating={5}
              meat='Beef'
              time='25 mins'
              spice='mild'
            />
          </Flex>
          <br />
          <Flex justifyContent='space-between'>
            <MenuItem
              imageUrl='/images/soon-tofu.jpeg'
              title='Soon Tofu'
              formattedPrice='$7.95 '
              reviewCount={76}
              rating={5}
              meat='Seafood'
              time='18 mins'
              spice='spicy'
            />
            <MenuItem
              imageUrl='/images/kimchi-stew.jpeg'
              title='Kimchi Jiggae'
              formattedPrice='$5.95 '
              reviewCount={99}
              rating={5}
              meat='Vegan'
              time='18 mins'
              spice='spicy'
            />
            <MenuItem
              imageUrl='/images/short-rib.jpeg'
              title='Bul Dak Galbi'
              formattedPrice='$8.95 '
              reviewCount={34}
              rating={5}
              meat='Chicken'
              time='22 mins'
              spice='mild'
            />
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

interface IMenuItemProps {
  imageUrl: string;
  title: string;
  formattedPrice: string;
  reviewCount: Number;
  rating: Number;
  meat: string;
  time: string;
  spice: string;
}

function MenuItem(props: IMenuItemProps) {
  return (
    <Box
      maxW='xs'
      borderWidth='1px'
      bg='white'
      borderRadius='lg'
      overflow='hidden'
    >
      <Image
        src={props.imageUrl}
        height='200px'
        width='400px'
        objectFit='cover'
        alt=''
      />
      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge
            borderRadius='full'
            px='2'
            colorScheme={props.spice == 'spicy' ? 'red' : 'green'}
          >
            {props.spice}
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {props.meat} &bull; {props.time}
          </Box>
        </Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {props.title}
        </Box>
        <Box>
          {props.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / serving
          </Box>
        </Box>
        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <AiFillStar key={i} />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {props.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export { Menu };
