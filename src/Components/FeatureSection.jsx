import {
  Box,
  Center,
  Container,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import card from './Assets/card.webp';

import Tilt from 'react-parallax-tilt';
const MotionBox = motion(Box);

const FeatureSection = () => {
  return (
    <Container py={{ base: '2rem', md: '6rem' }} maxW="100vw">
      <Stack
        mx="auto"
        maxW="7xl"
        gap={{ base: '5rem', md: '7rem' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <VStack
          w="100%"
          p="2rem"
          justifyContent={'center'}
          alignItems={'start'}
        >
          <Heading fontFamily="Open Sans">Limits, Completely Rethought</Heading>
          <UnorderedList
            p="2rem"
            spacing="1.3rem"
            fontSize="lg"
            fontWeight="400"
          >
            <ListItem>Limits based on Your Income and Expense</ListItem>
            <ListItem>Upto 5X Credit Limit</ListItem>
            <ListItem>Limits Increase Automatically</ListItem>
            <ListItem>Instant 5-min onboarding</ListItem>
          </UnorderedList>
        </VStack>
        <Center w="full">
          <Tilt
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.05}
            gyroscope={true}
          >
            <Image
              position="absolute"
              zIndex={'1'}
              src={card}
              alt="card"
              w={{ base: '80vw', md: '22rem' }}
            />
            <Box
              filter={'blur(180px)'}
              position="relative"
              w={{ base: '18rem', md: '22rem' }}
              h={{ base: '18rem', md: '22rem' }}
              _before={{
                content: "''",
                position: 'absolute',
                transform: 'translate(10rem, 4rem)',
                height: '8rem',
                width: '8rem',
                backgroundColor: 'black',
              }}
              _after={{
                content: "''",
                position: 'absolute',
                transform: 'translate(4rem, 14rem)',
                height: '8rem',
                width: '8rem',
                backgroundColor: 'black',
              }}
            ></Box>
          </Tilt>
        </Center>
      </Stack>
    </Container>
  );
};

export default FeatureSection;
