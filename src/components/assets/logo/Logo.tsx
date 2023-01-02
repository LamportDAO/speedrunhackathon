import { Center, HStack, Text } from '@chakra-ui/react';
import React from 'react';

const Logo = () => {
  return (
    <HStack gap='0.2rem' alignItems={'center'} justify='space-between'>
      <Text
        fontWeight={'800'}
        pb='0.4rem'
        fontSize={{ base: '22px', md: '32px' }}
      >
        Sandstorm
      </Text>
    </HStack>
  );
};

export default Logo;
