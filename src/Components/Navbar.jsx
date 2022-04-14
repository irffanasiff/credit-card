import React from 'react';
import { motion } from 'framer-motion';
import { Box, Container, HStack } from '@chakra-ui/react';

const MotionBox = motion(Box);

const Navbar = () => {
  return (
    <Container maxW="8xl">
      <MotionBox
        initial={{ y: -50 }}
        animate={{
          y: 0,
          transition: { delay: 2, duration: 1 },
        }}
        display="flex"
        align="center"
        justifyContent="space-between"
        color="32E2E2E"
        p={{ base: '1.5rem .5rem' }}
      >
        <Box>Logo</Box>
        <Box>Button</Box>
      </MotionBox>
    </Container>
  );
};

export default Navbar;
