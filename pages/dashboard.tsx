import {
  Avatar,
  Box,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  useColorModeValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { FaBell, FaClipboardCheck, FaRss } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import { BsGearFill } from 'react-icons/bs';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { HiCode, HiCollection } from 'react-icons/hi';
import { MdHome, MdKeyboardArrowRight, MdFoodBank } from 'react-icons/md';

import * as React from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/_data';
import { ProductGrid } from '../components/ProductGrid';

export default function App() {
  const sidebar = useDisclosure();
  const integrations = useDisclosure();
  integrations.isOpen = true;
  const color = useColorModeValue('gray.600', 'gray.300');

  const NavItem = (props: any) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align='center'
        px='4'
        pl='4'
        py='3'
        cursor='pointer'
        color={useColorModeValue('inherit', 'gray.400')}
        _hover={{
          bg: useColorModeValue('gray.100', 'gray.900'),
          color: useColorModeValue('gray.900', 'gray.200'),
        }}
        role='group'
        fontWeight='semibold'
        transition='.15s ease'
        {...rest}
      >
        {icon && (
          <Icon
            mx='2'
            boxSize='4'
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props: any) => (
    <Box
      as='nav'
      pos='fixed'
      top='0'
      left='0'
      zIndex='sticky'
      h='full'
      pb='10'
      overflowX='hidden'
      overflowY='auto'
      bg={useColorModeValue('white', 'gray.800')}
      borderColor={useColorModeValue('inherit', 'gray.700')}
      borderRightWidth='1px'
      w='60'
      {...props}
    >
      <Flex px='4' py='5' align='center'>
        <Image src={'/logo.svg'} width='150px' alt='' />
      </Flex>
      <Flex
        direction='column'
        as='nav'
        fontSize='sm'
        color='gray.600'
        aria-label='Main Navigation'
      >
        <NavItem icon={MdFoodBank}>Your Next Order</NavItem>
        <NavItem icon={HiCollection}>Past Orders</NavItem>
        <NavItem icon={AiFillHeart}>Favorites</NavItem>
        <NavItem icon={BsGearFill} onClick={integrations.onToggle}>
          Account Settings
          <Icon
            as={MdKeyboardArrowRight}
            ml='auto'
            transform={integrations.isOpen ? 'rotate(90deg)' : 'rotate(0deg)'}
          />
        </NavItem>
        <Collapse in={integrations.isOpen}>
          <NavItem pl='12' py='2'>
            Payment
          </NavItem>
          <NavItem pl='12' py='2'>
            Log Out
          </NavItem>
        </Collapse>
      </Flex>
    </Box>
  );
  return (
    <Box
      as='section'
      bg={useColorModeValue('gray.50', 'gray.700')}
      minH='100vh'
    >
      <SidebarContent display={{ base: 'none', md: 'unset' }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement='left'
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w='full' borderRight='none' />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition='.3s ease'>
        <Box as='main' p='4'>
          <Box
            maxW='7xl'
            mx='auto'
            px={{ base: '4', md: '8', lg: '12' }}
            py={{ base: '6', md: '8', lg: '12' }}
          >
            <ProductGrid>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ProductGrid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
