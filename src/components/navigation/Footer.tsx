import { Center } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <Center position={'absolute'}>
      <Center
        zIndex={'-2'}
        overflow='hidden'
        transform='translateY(-20%)'
        h={'fit-content'}
        w={['full']}
      >
        <Center position={'relative'} zIndex={'-2'}>
          <Image
            src='/img2.png'
            alt='solana sandstorm'
            width={3455}
            height={1111}
          />
        </Center>
      </Center>
    </Center>
  );
};

export default Footer;
