import { Container, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { Inktrap } from '../FontFamily';
import Sponsor from './Sponsor';
const presentersNames = [
  'Magicblock',
  'Solana Foundation',
  'Lamport DAO',
];
const PresentedBy = () => {
  return (
    <Container
      p='0'
      maxW='6xl'
      display={'flex'}
      flexDirection='column'
      justifyContent={'center'}
      alignItems='center'
    >
      <Wrap
        spacing={{ base: '1.5rem', md: '3rem' }}
        justify={'center'}
        alignItems='center'
      >
        {presentersNames.map((sponsorName, key) => (
          <WrapItem
            display={'flex'}
            alignItems='center'
            justifyContent={'center'}
            key={key}
          >
            <Sponsor sponsorName={sponsorName} />
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  );
};

export default PresentedBy;
