import Head from 'next/head';
import type { NextPage } from 'next';
import { useRef } from 'react';

import { Box } from '@chakra-ui/react';

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { Footer } from '../components/Footer';
import { CallToAction } from '../components/CallToAction';
import { Menu } from '../components/Menu';

import { initFirebase } from '../firebase/initFirebase';

initFirebase();

const Home: NextPage = () => {
  const howItWorksRef = useRef(null);
  const menuRef = useRef(null);
  return (
    <Box>
      <Head>
        <title>Koreats! - Meal Kit Delivery</title>
        <meta name='description' content='Korean Meal Kit Delivery Service' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Menu />
      <CallToAction />
      <Footer />
    </Box>
  );
};

export default Home;
