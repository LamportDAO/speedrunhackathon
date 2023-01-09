import { Container, Heading, Stack } from '@chakra-ui/react';
import { Inktrap } from '../FontFamily';
import React from 'react';
import { NewYorkCard, BelgradeCard, SingaporeCard } from './ImageCard';

const Locations = () => {
  return (
    <Container pt={{ base: '25vh', md: '35vh' }} maxW='7xl'>
      <Heading
        fontFamily={Inktrap.style.fontFamily}
        mx='auto'
        maxW='fit-content'
        py='2rem'
        fontSize={{ base: '2xl', md: '4xl' }}
        fontWeight='800'
      >
        Hack IRL
      </Heading>
      <Stack
        maxW='4xl'
        mx='auto'
        alignItems={'center'}
        //  gap={{ base: '0.2rem', md: '1rem' }}
        justify='center'
        gap='1rem'
        spacing='0'
        flexDir={{ base: 'column', lg: 'row' }}
      >
        <NewYorkCard />
        <SingaporeCard />
        <BelgradeCard />
      </Stack>
    </Container>
  );
};

export default Locations;
