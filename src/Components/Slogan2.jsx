import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const MotionBox = motion(Box);

const Slogan2 = () => {
  return (
    <Container maxW="full" display={'flex'} flexDirection="row">
      <Box
        zIndex="1"
        maxW="xl"
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3rem"
        pt={{ base: '5rem', md: '8rem', lg: '10rem' }}
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
            fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
            maxW={{ base: '90vw', md: '70vw', lg: '5xl' }}
            textAlign="center"
          >
            Reimaging{' '}
            <Box as="span" fontWeight={'200'} fontStyle="italic">
              Luxury
            </Box>{' '}
            with AI Personalization
          </Heading>
        </MotionBox>
      </Box>
    </Container>
  );
};

export default Slogan2;
