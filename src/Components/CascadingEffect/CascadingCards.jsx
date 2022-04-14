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
    <Container display={{ base: 'none', md: 'block' }} maxW="full">
      <Container
        mt="2rem"
        display="flex"
        flexDir="row"
        justify="center"
        maxW="6xl"
        color="black"
        p="0"
      >
        <VStack
          alignItems={'start'}
          minW="3xl"
          overflowY={'scroll'}
          scrollBehavior="smooth"
          scrollSnapType="y mandatory"
        >
          <Center
            flexDir={'column'}
            scrollSnapAlign={'start'}
            alignItems="start"
            maxW="6xl"
            minH="42vw"
            textAlign="start"
          >
            <Heading
              maxW="xl"
              fontWeight="500"
              fontSize={{ base: 'lg', md: '2xl', lg: '4xl' }}
            >
              24/7 Intelligent Concierge
            </Heading>
            <Text fontWeight={'400'} fontSize='md' py="2rem" textAlign={'start'} maxW="lg">
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
            ml="auto"
            minH="45vw"
            m="3rem"
            textAlign="start"
          >
            <Heading
              ref={ref}
              maxW="xl"
              fontWeight="500"
              fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}
            >
              Exclusive, Curated Rewards & Experiences
            </Heading>
            <Text py="2rem">
              Submerge into the luxury of lounge or get exclusive rewards
            </Text>
          </Center>
          <Center
            ref={refAlign}
            flexDir={'column'}
            scrollSnapAlign={'start'}
            alignItems="start"
            ml="auto"
            minH="42vw"
            m="3rem"
            textAlign="start"
          >
            <Heading
              ref={ref}
              maxW="xl"
              fontWeight="500"
              fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}
            >
              Exclusive, Curated Rewards & Experiences
            </Heading>
            <Text py="2rem">
              Submerge into the luxury of lounge or get exclusive rewards
            </Text>
          </Center>
        </VStack>
        <Box
          pt="0rem"
          pb="20rem"
          px="0"
          transition="all 0.5s ease-in-out"
          display="flex"
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
            <Phone entry={entry}/>
          </Center>
        </Box>
      </Container>
    </Container>
  );
};
export default CascadingCards;
