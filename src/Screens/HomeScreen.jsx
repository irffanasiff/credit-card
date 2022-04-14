import { Box } from '@chakra-ui/react';
import CascadingCards from '../Components/CascadingEffect/CascadingCards';
import FeatureCards from '../Components/FeatureCards';
import Hero from '../Components/Hero';

const HomeScreen = () => {
  return (
    <>
      <Hero />
      <FeatureCards />
      <Box
        // sx={{
        //   scrollSnapType: 'y mandatory',
        //   overflowY: 'scroll',
        // }}
      >
        <CascadingCards />
      </Box>
      <Box w="100vw" h="50vh" bg="white" />
    </>
  );
};

export default HomeScreen;
