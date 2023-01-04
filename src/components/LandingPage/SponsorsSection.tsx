import { Container, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { Multicoin } from '../assets/sponsors/icons';
import Sponsor from './Sponsor';
const sponsorNames = [
  'Solana Foundation',
  'Lamport DAO',
  'Helius',
  'Multicoin',
  'Phantom',
  'Openbook',
  'Solana University',
  'Dialect',
  'Eclipse',
  'Superteam',
  'Switchboard',
  'Bonk',
  'Hxro Network',
  'SolBlaze',
  'MonkeVentures',
  'Elusiv',
  'Crossmint',
  'Clockwork',
  'Bridgesplit',
  'Chain Crisis',
  'Flipside',
  'UniqueVC',
  'BetDEX',
  'Spling Labs',
  'Poolprops',
  'Underdog Protocol',
  'ChainFlow',
  'Dispatch',
  'OtterSec',
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
