import { Container, Heading, Stack } from '@chakra-ui/react';
import {Inktrap, Joystix} from '../FontFamily';
import React from 'react';
import { FullyOnChainCard, SolanaIntegratedCard } from './ImageCard';

const MainTracks = () => {
  return (
    <Container pt={{ base: '25vh', md: '10vh' }} maxW='7xl'>
      <Heading
        mx='auto'
        maxW='fit-content'
        py='2rem'
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight='800'
        fontFamily={Joystix.style.fontFamily}
      >
          Main tracks
      </Heading>
      <Stack
        maxW='4xl'
        mx='auto'
        flexWrap={'wrap'}
        alignItems={'center'}
        //  gap={{ base: '0.2rem', md: '1rem' }}
        justify='center'
        gap='1.5rem'
        spacing='0'
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <FullyOnChainCard />
        <SolanaIntegratedCard />
      </Stack>
    </Container>
  );
};

export default MainTracks;
