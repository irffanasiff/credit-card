import { Box, Center, Container, Text } from '@chakra-ui/react';
import Footer from '../Components/Footer';
import Brands from '../Components/Brands';
import CascadingCards from '../Components/CascadingEffect/CascadingCards';
import Faq from '../Components/FAQ';
import FeatureCards from '../Components/FeatureCards';
import FeatureSection from '../Components/FeatureSection';
import Hero from '../Components/Hero';
import Rewards from '../Components/Rewards';
import Slogan from '../Components/Slogan';
import Slogan2 from '../Components/Slogan2';
import Unbox from '../Components/Unbox';

const HomeScreen = () => {
  return (
    <Container
      maxW="100vw"
      p="0"
      display={'flex'}
      gap={{ base: '8rem', md: '12rem' }}
      flexDirection={'column'}
    >
      <Hero />
      <FeatureCards />
      <Slogan />
      <FeatureSection />
      <Brands />
      <Slogan2 />
      <Box>
        <CascadingCards />
      </Box>
      <Rewards />
      <Unbox />
      <Faq />
      <Footer />
    </Container>
  );
};

export default HomeScreen;
