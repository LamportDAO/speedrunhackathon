import { Center } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

const Background = () => {
  return (
    <Center
      position={'relative'}
      overflow='hidden'
      // border='1px solid'
      // borderColor={['pink', 'yellow', 'red', 'blue', 'orange', 'white' ]}
      h={['1200px', '1200px', '1800px', '1600px', '2400px', '2600px']}
      w={['full']}
    >
      <Center
        zIndex={'-1'}
        w={['1200px', '1200px', '1500px', '1700px', '110vw', '100vw']}
        position='absolute'
        top={['25%', '50%', '40%', '50%', '30%', '30%']}
        left='50%'
        transform='translate(-50%, -50%)'
      >
        <Image src='/img.png' alt='sandstorm' width={4096} height={3500} />
      </Center>
    </Center>
  );
};

export default Background;
