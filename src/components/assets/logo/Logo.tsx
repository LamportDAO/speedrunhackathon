import { HStack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const Logo = () => {
  return (
    <HStack gap='0.2rem' alignItems={'center'} justify='space-between'>
      <Text
        fontWeight={'800'}
        pt='0.3rem'
        fontSize={{ base: '18px', md: '32px' }}
      >
        Sandstorm
      </Text>
    </HStack>
  );
};

export default Logo;
