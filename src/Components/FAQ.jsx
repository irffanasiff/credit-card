import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Container,
  Box,
} from '@chakra-ui/react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const data = [
  {
    question:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel venenatis ?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    answer:
      'veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
  },
  {
    question:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam ?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetur ?',
    answer: 'veniam, quis nostrud exercitation ullamco laboris',
  },
  {
    question:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel venenatis quis ultrices dolor elit.',
    answer:
      'llamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
  },
];

const Faq = () => {
  return (
    <Container
      p={{ base: '4rem 1.5rem', md: '6rem 2rem' }}
      maxW="6xl"
      py={{ base: '2rem', md: '8rem' }}
    >
      <Heading
        pb={{ base: '2.5rem', md: '4rem' }}
        fontWeight="800"
        fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
        maxW={{ base: '90vw', md: '70vw', lg: '5xl' }}
        textAlign="center"
      >
        Frequently asked{' '}
        <Box as="span" fontWeight={'200'} fontStyle="italic">
          questions?
        </Box>
      </Heading>
      <Accordion allowMultiple mx="auto" maxW="3xl">
        {data &&
          data.map((faq, index) => (
            <AccordionItem my="1rem" key={index}>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      display="flex"
                      alignItems={'center'}
                      justifyContent="space-between"
                    >
                      <Box
                        fontWeight={'500'}
                        fontSize={{ base: 'sm', md: 'lg' }}
                        flex="1"
                        textAlign="left"
                        pr={{ base: '1rem', md: '2rem' }}
                        maxW="xl"
                      >
                        {faq.question}
                      </Box>
                      {isExpanded ? (
                        <FiMinus fontSize="20px" />
                      ) : (
                        <FiPlus fontSize="20px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    fontSize={{ base: 'xs', md: 'md' }}
                    fontWeight={'300'}
                    color="black"
                    pb={4}
                    maxW="2xl"
                  >
                    {faq.answer}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
      </Accordion>
    </Container>
  );
};

export default Faq;
