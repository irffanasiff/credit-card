import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

const Phone = ({ entry }) => {
  return (
    <Box w="18rem">
      <Box
        w="100%"
        h="33rem"
        color={'gray.300'}
        border="20px solid gray"
        rounded="2rem"
      >
        <Center h='full'>
          <Text color="black">
            {entry && entry.isIntersecting ? 'Hello' : 'World'}
          </Text>
        </Center>
      </Box>
    </Box>
  );
};

export default Phone;
