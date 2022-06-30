import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  SiFlipkart,
  SiNike,
  SiApple,
  SiSamsung,
  SiSpotify,
  SiBitcoin,
  SiEbay,
  SiFoodpanda,
} from 'react-icons/si';
import { FaAmazon } from 'react-icons/fa';
import Slider from 'react-slick';

const MotionBox = motion(Box);

const Brands = () => {
  const settings = {
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container
      maxW="100vw"
      display={'flex'}
      flexDirection={'column'}
      p="0"
      py="2rem"
    >
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Box
        zIndex="1"
        maxW="6xl"
        mx="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={{ base: '2rem', md: '2.5rem' }}
        py={{ base: '5rem', md: '8rem' }}
      >
        <MotionBox
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0, duration: 1 },
          }}
        >
          <Heading
            fontWeight="800"
            fontSize={{ base: 'xl', md: '3xl', lg: '4xl' }}
            maxW={{ base: '90vw', md: '70vw', lg: '5xl' }}
            textAlign="center"
          >
            <Box as="span" fontWeight={'200'} fontStyle="italic">
              Cashbacks
            </Box>{' '}
            at brands you Love
          </Heading>
        </MotionBox>
      </Box>
      <Slider {...settings}>
        <Box opacity="0.7" p="1rem">
          <SiFlipkart size={54} />
        </Box>
        <Box opacity="0.7" p="1rem">
          <FaAmazon size={54} />
        </Box>
        <Box opacity="0.7" p="1rem">
          <SiNike size={54} />
        </Box>
        <Box opacity="0.7" p="1rem">
          <SiApple size={54} />
        </Box>
        <Box opacity="0.7" p="1rem">
          <SiSamsung size={58} />
        </Box>
        <Box opacity="0.7" p="1rem">
          <SiSpotify size={54} />
        </Box>
        <Box opacity="0.7" p="1rem">
          <SiBitcoin size={54} />
        </Box>
        <Box opacity="0.7" p="1rem">
          <SiEbay size={54} />
        </Box>
        <Box opacity="0.7" p="1rem">
          <SiFoodpanda size={54} />
        </Box>
        <Box opacity="0.7" p="1rem">
          <SiNike size={54} />
        </Box>
        <Box opacity="0.7" p="1rem">
          <SiApple size={54} />
        </Box>
        <Box opacity="0.7" p="1rem">
          <SiSamsung size={54} />
        </Box>
        <Box opacity="0.7" p="1rem">
          <SiSpotify size={54} />
        </Box>
        <Box opacity="0.7" p="1rem">
          <SiBitcoin size={54} />
        </Box>
      </Slider>
    </Container>
  );
};

export default Brands;
