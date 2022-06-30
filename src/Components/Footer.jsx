import { Center, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Center
      p="1rem"
      justifyContent={'space-around'}
      maxW="full"
      flexDir={{ base: 'column', md: 'row' }}
      fontSize={{ base: 'sm', md: 'md' }}
      gap="1rem"
    >
      <Text color="noire.blue">
        <a href="https://irfanasif.me" target="_blank">
          irfanasif.me
        </a>
      </Text>
      <Text>Designed And Developed By Irfan Asif</Text>
    </Center>
  );
};

export default Footer;
