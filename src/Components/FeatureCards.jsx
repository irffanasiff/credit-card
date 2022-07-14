import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);

const variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  hidden: { opacity: 0, y: 40 },
};

const FeatureCards = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Container maxW="3xl" color="noire.lightGray">
      <MotionBox ref={ref} animate={controls} variants={variant}>
        <Flex
          wrap={'wrap'}
          alignItems={'center'}
          justifyContent="center"
          flexDir={{ base: 'row', sm: 'row', md: 'column' }}
          gap={{ base: '1rem', md: '2rem' }}
          maxH={{ base: 'full', sm: '25rem', md: '18rem' }}
        >
          <HStack
            p="1rem"
            fontWeight="600"
            gap={{ base: '0.5rem', md: '1rem' }}
          >
            <HStack>
              <Text fontSize={{ base: '5xl', md: '6xl' }}>18</Text>
              <sup
                style={{
                  fontWeight: '400',
                  fontSize: '30px',
                  lineHeight: '0rem',
                }}
              >
                g
              </sup>
            </HStack>
            <Text textAlign={'start'} fontSize={{ base: 'sm', md: 'md' }}>
              Metal <br /> Card
            </Text>
          </HStack>
          <HStack
            fontWeight="600"
            gap={{ base: '0.5rem', md: '1rem' }}
            p="1.2rem"
          >
            <Center width={{ base: '2rem', md: '2.5rem' }}>
              <svg
                viewBox="0 0 40 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="23" width="15" height="29" rx="1" fill="#C4C4C4" />
                <rect x="25" width="15" height="52" rx="1" fill="#C4C4C4" />
              </svg>
            </Center>
            <Text textAlign={'start'} fontSize={{ base: 'sm', md: 'md' }}>
              Higher Limit
            </Text>
          </HStack>
          <HStack
            fontWeight="600"
            gap={{ base: '0.5rem', md: '1rem' }}
            p={{ base: '0.4rem', md: '1rem' }}
          >
            <Center w={{ base: '2.5rem', md: '4rem' }}>
              <img
                src="https://img.icons8.com/ios-filled/50/B8B8B8/no-credit-cards.png"
                alt="credit card logo"
              />
            </Center>
            <Text textAlign={'start'} fontSize={{ base: 'sm', md: 'md' }}>
              No credit <br />
              score needed
            </Text>
          </HStack>
          <HStack
            fontWeight="600"
            p={{ base: '0.4rem', md: '1rem' }}
            gap={{ base: '0.5rem', md: '1rem' }}
          >
            <HStack>
              <Text fontSize={{ base: '4xl', md: '6xl' }}>
                24
                <Box as="span" fontWeight="300">
                  /
                </Box>
                7
              </Text>
            </HStack>
            <Text textAlign={'start'} fontSize={{ base: 'sm', md: 'md' }}>
              Human <br />
              Concierge
            </Text>
          </HStack>

          <HStack fontWeight="600" p="0rem 1rem" gap="0.5rem">
            <HStack>
              <Text fontSize={{ base: '5xl', md: '6xl' }}>2</Text>
              <Box
                as="span"
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="400"
              >
                X
              </Box>
            </HStack>
            <Text textAlign={'start'} fontSize={{ base: 'sm', md: 'md' }}>
              to 10x <br />
              Cashback
            </Text>
          </HStack>
          <HStack
            fontWeight="400"
            gap={{ base: '0.5rem', md: '1rem' }}
            p="0.5rem 1.8rem"
          >
            <HStack>
              <Text fontSize={'6xl'}>₹</Text>
            </HStack>
            <Text textAlign={'start'} fontWeight="600">
              ₹0 Fee
            </Text>
          </HStack>
        </Flex>
      </MotionBox>
    </Container>
  );
};

export default FeatureCards;
