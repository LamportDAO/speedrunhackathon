import { Container, Heading, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { Inktrap } from '../FontFamily';
import Sponsor from './Sponsor';
const sponsorNames = [
  'Solana Foundation',
  'Lamport DAO',
  'Helius',
  'Multicoin',
  'Phantom',
  'Orca',
  'Dialect',
  'Reciprocal',
  'Superteam',
  'Eclipse',
  'Jito',
  'Openbook',
  'SolBlaze',
  'Marinade',
  'Solana University',
  'Hxro Network',
  'MonkeVentures',
  'Crossmint',
  'Vellum',
  'Helium',
  'Clockwork',
  'Bridgesplit',
  'Switchboard',
  'Bonk',
  'Elusiv',
  'Chain Crisis',
  'Flipside',
  'UniqueVC',
  'BetDEX',
  'Comet',
  'Spling Labs',
  'Gari',
  'PoolProps',
  'Underdog Protocol',
  'MetaCamp',
  'ChainFlow',
  'Dispatch',
  'Ottersec',
  'Civic',
  'Frakt',
  'Light Protocol',
  'NightMarket',
  'SolWorks',
  'Motley',
  'DogeCapital',
  'Unstoppable Domains',
  'Sec3',
  'CyberSamurai',
  'Elixir',
  'Infinity',
  'SolShield',
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
      <Heading
        py='2rem'
        fontFamily={Inktrap.style.fontFamily}
        mx='auto'
        maxW='fit-content'
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight='800'
      >
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
