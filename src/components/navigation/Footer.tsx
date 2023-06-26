import { Center } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <Center
      position={'absolute'}
      mt='20rem'
      height={{
        base: '150px',
        sm: '100px',
        md: '250px',
        lg: '250px',
        xl: '250px',
      }}
    >
      <Center
        zIndex={'-2'}
        transform={{
          base: 'translateY(-10%)',
          md: 'translateY(-10%)',
          lg: 'translateY(-10%)',
          xl: 'translateY(-10%)',
        }}
        h={'auto'}
        w={['full']}
      >
        <Center position={'relative'} zIndex={'-2'}>
          <Image src='/footer.jpg'
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
