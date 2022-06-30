import React from 'react';
import { motion } from 'framer-motion';
import {
  Heading,
  Container,
  Box,
  VStack,
  Center,
  Text,
} from '@chakra-ui/react';

const MotionBox = motion(Box);

const Hero = () => {
  return (
    <Container maxW="full" display={'flex'} flexDirection="row">
      <MotionBox
        zIndex="0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 1 },
        }}
        // py={{ base: '18rem', md: '5rem' }}
        w={{ base: '8rem', md: '15rem', lg: '25rem' }}
        position={'absolute'}
        left="0"
        bg="transparent"
      >
        <svg
          viewBox="0 0 459 549"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-664 97.4633C-320.919 -106.19 145.344 41.4212 317.212 301.208C773.712 991.226 -416.559 -25.2299 458.5 281"
            stroke="url(#paint0_linear_6_79)"
            stroke-width="3"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6_79"
              x1="-640.59"
              y1="21.9063"
              x2="554.067"
              y2="221.926"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.700949" stop-color="#2E2E2E" />
              <stop offset="1" stop-color="#828282" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </MotionBox>

      <Box
        zIndex="1"
        maxW="6xl"
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="4rem"
        py={{ base: '10rem', md: '8rem', lg: '10rem' }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0, duration: 1 },
          }}
        >
          <Heading
            fontWeight="800"
            fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }}
            maxW={{ base: '90vw', md: '70vw', lg: '5xl' }}
            textAlign="center"
            bgGradient="linear(to-r, #ffffff,#000000, #000000)"
            bgClip="text"
          >
            The{' '}
            <Box as="span" fontWeight={'200'} fontStyle="italic">
              Smartest
            </Box>{' '}
            Credit Card Ever Made
          </Heading>
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.15, duration: 1 },
            }}
          >
            <Text p="1rem" textAlign="center" color={'noire.blue'}>
              #LuxuryRedefined
            </Text>
          </MotionBox>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 1.4, duration: 1 },
          }}
        >
          <Center
            w={{ base: '80vw', md: '60vw', lg: '36rem' }}
            h="0.8rem"
            bgGradient="linear(to-r, #ffffff, #000000)"
            border="1px solid grey"
            rounded="6"
          ></Center>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, duration: 0.8 },
          }}
          as="button"
          borderBottom="1px solid black"
          p="0.5rem 0rem"
          color="black"
        >
          Request an invite
        </MotionBox>
      </Box>

      <MotionBox
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 1 },
        }}
        pt={{ base: '13rem', md: '8rem' }}
        w={{ base: '10rem', md: '15rem', lg: '25rem' }}
        position={'absolute'}
        right="0"
        bg="transparent"
      >
        <svg
          viewBox="0 0 553 479"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1527 85.8172C1153.84 -92.9909 646.702 36.6119 459.766 264.705C-36.7549 870.544 952.774 -40.7103 1 228.161"
            stroke="url(#paint0_linear_6_78)"
            stroke-width="3"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6_78"
              x1="752"
              y1="26"
              x2="-58.5"
              y2="227.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop />
              <stop offset="1" stop-color="#828282" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </MotionBox>
    </Container>
  );
};

export default Hero;
