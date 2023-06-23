import { Center } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const PrizesBackground = () => {
  return (
    <Center
      position={'relative'}
      overflow='hidden'
      // border='1px solid'
      borderColor={['pink', 'yellow', 'red', 'blue', 'orange', 'white']}
      h={{ base: '360vh', xl: '250vh' }}
      w={['full']}
    >
      <Center
        zIndex={'-1'}
        w={['100vw', '100vw', '100vw', '100vw', '110vw', '100vw']}
        position='absolute'
        bottom={{ base: '0%' }}
        left='50%'
        transform='translate(-50%, -50%)'
      >
        <Image src='/img2.png' alt='speedrun' width={3455} height={1111} />
      </Center>
    </Center>
  );
};

export default PrizesBackground;
