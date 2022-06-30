import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const MotionBox = motion(Box);

const Slogan = () => {
  return (
    <Container
      bg="noire.blackBg"
      maxW="full"
      display={'flex'}
      color="white"
      flexDirection="row"
      py="2rem"
    >
      <Box
        zIndex="1"
        maxW="6xl"
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3rem"
        py={{ base: '5rem', md: '8rem', lg: '10rem' }}
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
          >
            Rare{' '}
            <Box as="span" fontWeight={'200'} fontStyle="italic">
              Combination
            </Box>{' '}
            Of Intelligence and Design
          </Heading>
        </MotionBox>
        <MotionBox>
          <Text
            fontWeight="400"
            fontSize={{ base: 'sm', md: 'xl' }}
            px="2rem"
            textAlign="center"
          >
            LOREM Card is built from the ground up to transform how you shop and
            spend.
          </Text>
        </MotionBox>
      </Box>
    </Container>
  );
};

export default Slogan;
