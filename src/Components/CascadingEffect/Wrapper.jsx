import React from 'react';
import createScrollSnap from 'scroll-snap';

const Wrapper = ({ Children }) => {
  const { bind, unbind } = createScrollSnap(
    <Children />,
    {
      snapDestinationX: '0%',
      snapDestinationY: '90%',
      timeout: 100,
      duration: 300,
      threshold: 0.2,
      snapStop: false,
      //   easing: easeInOutQuad,
    },
    () => console.log('element snapped')
  );
};

export default Wrapper;
