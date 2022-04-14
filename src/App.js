import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './Theme';
import HomeScreen from './Screens/HomeScreen';
import Navbar from './Components/Navbar';

export const newTheme = {
  ...theme,
  shadows: { ...theme.shadows, outline: '0 !important' },
};

function App() {
  return (
    <ChakraProvider theme={newTheme}>
      <Navbar />
      <HomeScreen />
    </ChakraProvider>
  );
}

export default App;
