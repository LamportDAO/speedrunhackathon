import { Center } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <Center
      position={'absolute'}
      height={{
        base: '50px',
        sm: '100px',
        md: '150px',
        lg: '260px',
        xl: '100px',
      }}
    >
      <Center
        zIndex={'-2'}
        transform={{
          base: 'translateY(-10%)',
          md: 'translateY(-20%)',
          lg: 'translateY(-10%)',
          xl: 'translateY(4%)',
        }}
        overflow='hidden'
        h={'fit-content'}
        w={['full']}
      >
        <Center position={'relative'} zIndex={'-2'}>
          <Image
            src='/img4.png'
            alt='solana speedrun'
            width={3455}
            height={1111}
          />
        </Center>
      </Center>
    </Center>
  );
};

export default Footer;
