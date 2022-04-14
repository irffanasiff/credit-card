import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const FeatureCards = () => {
  return (
    <Container maxW="3xl" color="noire.lightGray">
      <Flex wrap={'wrap'} alignItems={'center'} justifyContent="space-around">
        <HStack fontWeight="600" gap="1rem">
          <img
            src="https://img.icons8.com/ios-filled/50/B8B8B8/no-credit-cards.png"
            alt="credit card logo"
          />
          <Text textAlign={'start'}>
            No credit <br />
            score needed
          </Text>
        </HStack>
        <HStack fontWeight="600">
          <HStack>
            <Text fontSize={'6xl'}>18</Text>
            <sup
              style={{
                fontSize: '30px',
                lineHeight: '0rem',
              }}
            >
              g
            </sup>
            <Text></Text>
          </HStack>
          <Text textAlign={'start'}>
            Metal <br /> Card
          </Text>
        </HStack>
        <HStack fontWeight="600">
          <HStack>
            <Text fontSize={'6xl'}>2</Text>
            <Box as="span" fontSize={'4xl'} fontWeight="400">
              X
            </Box>
            <Text></Text>
          </HStack>
          <Text textAlign={'start'}>
            to 10x <br />
            Cashback
          </Text>
        </HStack>
        <HStack fontWeight="600">
          <HStack>
            <Text fontSize={'6xl'}>2</Text>
            <Box as="span" fontSize={'4xl'} fontWeight="400">
              X
            </Box>
            <Text></Text>
          </HStack>
          <Text textAlign={'start'}>
            to 10x <br />
            Cashback
          </Text>
        </HStack>
      </Flex>
    </Container>
  );
};

export default FeatureCards;
