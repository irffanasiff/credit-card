import {
  Box,
  Center,
  Container,
  Heading,
  Flex,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';

const Rewards = () => {
  return (
    <Container
      maxW="100vw"
      display={'flex'}
      flexDirection={'column'}
      p="0"
    >
      <Box
        zIndex="1"
        maxW="6xl"
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={{ base: '2rem', md: '3rem' }}
        py={{ base: '2rem', md: '8rem' }}
      >
        <Heading
          fontWeight="800"
          fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
          maxW={{ base: '90vw', md: '70vw', lg: '5xl' }}
          textAlign="center"
        >
          Earn{' '}
          <Box as="span" fontWeight={'200'} fontStyle="italic">
            Rewards
          </Box>{' '}
          with every purchase
        </Heading>
        <Wrap
          alignItems="flex-start"
          justify="center"
          direction="row"
          gap="1.5rem"
        >
          <VStack
            p={{ base: '1rem', md: '3rem' }}
            textAlign={'center'}
            justify="center"
            alignItems={'center'}
          >
            <Heading
              color={'noire.blue'}
              fontSize={{ base: '5xl', md: '7xl' }}
              fontWeight={'500'}
            >
              10x
            </Heading>
            <Text>Concierge</Text>
          </VStack>
          <Center
            display={{ base: 'none', md: 'flex' }}
            alignSelf={'center'}
            justifySelf="center"
            height={'10rem'}
            w="1px"
            backgroundColor="noire.lightGray"
          />
          <VStack
            p={{ base: '1rem', md: '3rem' }}
            textAlign={'center'}
            justify="center"
            alignItems={'center'}
          >
            <Heading
              color={'noire.blue'}
              fontSize={{ base: '5xl', md: '7xl' }}
              fontWeight={'500'}
            >
              5x
            </Heading>
            <Text>
              choice <br /> category
            </Text>
          </VStack>
          <Center
            display={{ base: 'none', md: 'flex' }}
            alignSelf={'center'}
            justifySelf="center"
            height={'10rem'}
            w="1px"
            backgroundColor="noire.lightGray"
          />
          <VStack
            p={{ base: '1rem', md: '3rem' }}
            textAlign={'center'}
            justify="center"
            alignItems={'center'}
          >
            <Heading
              color={'noire.blue'}
              fontSize={{ base: '5xl', md: '7xl' }}
              fontWeight={'500'}
            >
              3x
            </Heading>
            <Text>
              Concierge <br />
              Restaurants
            </Text>
          </VStack>
          <Center
            display={{ base: 'none', md: 'flex' }}
            alignSelf={'center'}
            justifySelf="center"
            height={'10rem'}
            w="1px"
            backgroundColor="noire.lightGray"
          />
          <VStack
            p={{ base: '1rem', md: '3rem' }}
            textAlign={'center'}
            justify="center"
            alignItems={'center'}
          >
            <Heading
              color={'noire.blue'}
              fontSize={{ base: '5xl', md: '7xl' }}
              fontWeight={'500'}
            >
              2x
            </Heading>
            <Text>Rest</Text>
          </VStack>
        </Wrap>
      </Box>
    </Container>
  );
};

export default Rewards;
