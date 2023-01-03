import { Container, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import Sponsor from './Sponsor';
const sponsorNames = [
  'Solana Foundation',
  'Lamport DAO',
  'Helius',
  'Bridgesplit',
  'Openbook',
  'Hxro Network',
  'Clockwork',
  'Bonk',
  'Switchboard',
  'Elusiv',
  'Chain Crisis',
  'Spling Labs',
  'UniqueVC',
  'MonkeVentures',
  'BetDEX',
  'Superteam',
  'Eclipse',
  'SolBlaze',
  'Poolprops',
  'Crossmint',
  'Phantom',
  'Underdog Protocol',
  'Flipside',
  'Dispatch',
  'OtterSec',
  'Solana University',
  'Dialect',
  'ChainFlow',
];
const SponsorsSection = () => {
  return (
    <Container
      p='0'
      maxW='6xl'
      display={'flex'}
      flexDirection='column'
      justifyContent={'center'}
      alignItems='center'
    >
      <Heading py='2rem' fontSize={{ base: '2xl', md: '4xl' }} fontWeight='700'>
        Sponsors
      </Heading>
      <Wrap
        spacing={{ base: '1.5rem', md: '3rem' }}
        justify={'center'}
        alignItems='center'
      >
        {sponsorNames.map((sponsorName, key) => (
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

export default SponsorsSection;
