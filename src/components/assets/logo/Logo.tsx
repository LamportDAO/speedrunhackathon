import { Center, HStack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import ReactTextTransition, { presets } from 'react-text-transition';

const Logo = () => {
  const [index, setIndex] = useState(0);
  const texts = ['olana', 'andstorm'];
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <HStack gap='0.2rem' alignItems={'center'} justify='space-between'>
      <Text
        fontWeight={'800'}
        pt='0.3rem'
        fontSize={{ base: '18px', md: '32px' }}
      >
        Sandstorm
        {/* <ReactTextTransition
          springConfig={presets.stiff}
          style={{ margin: '0px', lineHeight: '10px' }}
          inline
        >
          {texts[index % texts.length]}
        </ReactTextTransition> */}
      </Text>
    </HStack>
  );
};

export default Logo;
