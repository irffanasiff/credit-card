import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const Unbox = () => {
  return (
    <Container
      bg="noire.blackBg"
      maxW="full"
      display={'flex'}
      color="white"
      flexDirection="row"
      py="1rem"
    >
      <Box
        zIndex="1"
        maxW="6xl"
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={{ base: '1.5rem', md: '3rem' }}
        py="6rem"
      >
        <Box
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0, duration: 1 },
          }}
        >
          <Heading
            color="white"
            fontWeight="800"
            fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
            maxW={{ base: '90vw', md: '70vw', lg: '5xl' }}
            textAlign="center"
          >
            Unbox{' '}
            <Box as="span" fontWeight={'200'} fontStyle="italic">
              Yours
            </Box>{' '}
          </Heading>
        </Box>
        <Box>
          <Text
            fontWeight="300"
            fontSize={{ base: 'sm', md: 'xl' }}
            px="2rem"
            textAlign="center"
            maxW="3xl"
          >
            If you are on the waitlist, you will receive an email as soon as
            Card is ready for you. We appreciate your patience.
          </Text>
        </Box>
        <Center p={{ base: '1rem', md: '2rem' }}>
          <Center
            color={'noire.blue'}
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="300"
            w={{ base: '15rem', md: '30rem' }}
            h={{ base: '8rem', md: '10rem' }}
            bgColor={'#343434'}
          >
            Box Mockup
          </Center>
        </Center>
      </Box>
    </Container>
  );
};

export default Unbox;
