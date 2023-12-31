import { HStack, Text } from '@chakra-ui/react';
import React from 'react';
import {Pixel} from "../../FontFamily";

const Logo = () => {
  return (
    <HStack gap='0.2rem' alignItems={'center'} justify='space-between'>
      <Text
          bgGradient={`linear-gradient(30deg, #D273D9 -8.03%, #D273D9 37.2%, #404DCF 109.33%)`}
          bgClip={'text'}
        fontWeight={'800'}
        pt='0.3rem'
        fontSize={{ base: '18px', md: '32px' }}
        fontFamily={Pixel.style.fontFamily}
      >
        Speedrun
      </Text>
    </HStack>
  );
};

export default Logo;
