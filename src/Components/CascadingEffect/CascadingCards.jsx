import { useEffect, useRef } from 'react';
import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Phone from './Phone';

const CascadingCards = () => {
  const { ref, inView, entry } = useInView({
    threshold: 1,
  });
  const { ref: refContainer, entry: entryContainer } = useInView({
    threshold: 0.2,
  });
  const { ref: refAlign, entry: entryAlign } = useInView({
    threshold: 0.5,
  });

  return (
    <Container maxW="full">
      <Container
        mt="2rem"
        display="flex"
        flexDir={{ base: 'column', md: 'row' }}
        justify="center"
        maxW="6xl"
        color="black"
        p="0"
      >
        <VStack
          p="1rem"
          alignItems={'start'}
          minW={{ base: 'auot', md: 'auto', lg: '3xl' }}
          overflowY={'scroll'}
          overflowX={'hidden'}
          scrollBehavior="smooth"
          scrollSnapType="y mandatory"
          gap={{ base: '4rem', md: '0' }}
        >
          <Center
            flexDir={'column'}
            scrollSnapAlign={'start'}
            alignItems="start"
            maxW={{ base: 'auto', md: '6xl' }}
            minH="42vw"
            textAlign="start"
          >
            <Heading
              maxW={{ base: 'auto', md: '25rem' }}
              fontWeight="500"
              fontSize={{ base: 'lg', md: '2xl', lg: '4xl' }}
            >
              24/7 Intelligent Concierge
            </Heading>
            <Text
              fontWeight={{ base: '300', md: '500' }}
              fontSize={{ base: 'sm', md: 'lg' }}
              py={{ base: '1rem', md: '2rem' }}
              textAlign="start"
              maxW={{ base: '90vw', md: '27rem' }}
            >
              24/7 Concierge that doesn't suck. Fully human but completely
              digital with personalization based on your preference Key Points
              of offering
            </Text>
          </Center>
          <Center
            ref={refContainer}
            flexDir={'column'}
            scrollSnapAlign={'start'}
            alignItems="start"
            maxW={{ base: 'auto', md: '6xl' }}
            minH="42vw"
            textAlign="start"
          >
            <Heading
              maxW={{ base: 'auto', md: '25rem' }}
              fontWeight="500"
              fontSize={{ base: 'lg', md: '2xl', lg: '4xl' }}
            >
              Exclusive, Curated Rewards & Experiences
            </Heading>
            <Text
              fontWeight={{ base: '300', md: '500' }}
              fontSize={{ base: 'sm', md: 'lg' }}
              py={{ base: '1rem', md: '2rem' }}
              textAlign="start"
              maxW={{ base: '90vw', md: '27rem' }}
            >
              Submerge into the luxury of lounge or get exclusive rewards
            </Text>
          </Center>
          <Center
            ref={refAlign}
            flexDir={'column'}
            scrollSnapAlign={'start'}
            alignItems="start"
            maxW={{ base: 'auto', md: '6xl' }}
            minH="42vw"
            textAlign="start"
          >
            <Heading
              maxW={{ base: 'auto', md: '25rem' }}
              fontWeight="500"
              fontSize={{ base: 'lg', md: '2xl', lg: '4xl' }}
            >
              Exclusive, Curated Rewards & Experiences
            </Heading>
            <Text
              fontWeight={{ base: '300', md: '500' }}
              fontSize={{ base: 'sm', md: 'lg' }}
              py={{ base: '1rem', md: '2rem' }}
              textAlign="start"
              maxW={{ base: '90vw', md: '27rem' }}
            >
              Submerge into the luxury of lounge or get exclusive rewards
            </Text>
          </Center>
        </VStack>
        <Box
          display={{ base: 'none', md: 'flex' }}
          pt="0rem"
          pb="20rem"
          px="0"
          transition="all 0.5s ease-in-out"
          alignItems={entryAlign && entryAlign.isIntersecting ? 'end' : 'start'}
          w="18rem"
        >
          <Center
            zIndex="99"
            position={
              entryContainer && entryContainer.isIntersecting
                ? 'fixed'
                : 'relative'
            }
            top="10rem"
            right="auto"
          >
            <Phone entry={entryAlign} />
          </Center>
        </Box>
      </Container>
    </Container>
  );
};
export default CascadingCards;
