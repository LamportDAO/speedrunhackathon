import {
  Button,
  Center,
  Heading,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';
import {Inktrap, Pixel} from '../FontFamily';
import {FiExternalLink} from "react-icons/fi";
import Image from "next/image";

const GrandPrize = () => {

  return (
    <>
      <Center flexDirection={'column'} maxW={'4xl'} py='4rem'>
        <Heading
          bgGradient={`linear-gradient(30deg, #D273D9 -8.03%, #D273D9 37.2%, #404DCF 109.33%)`}
          bgClip={'text'}
          py='2rem'
          fontFamily={Pixel.style.fontFamily}
          mx='auto'
          maxW='fit-content'
          fontSize={{ base: '4xl', md: '6xl' }}
          fontWeight='800'
        >
          MAIN PRIZES
        </Heading>
        <Wrap
          w='100%'
          maxW='100vw'
          py={{ base: '0.5rem', md: '1rem' }}
          p='2rem'
          spacing={{ base: '0.5rem', md: '1rem' }}
          direction={'column'}
          margin={'auto'}
          justify={'center'}
          fontSize={{ base: '3xl', md: '3xl' }}
          fontFamily={Pixel.style.fontFamily}
          alignItems='center'
          textAlign='center'
        >
          FULLY ON-CHAIN GAMES (FOCG) <br/>
          <ul>
            <li>1st Place: $3,000</li>
            <li>2nd Place: $1,500</li>
            <li>3rd Place: $500</li>
          </ul>
          <br/>
          SOLANA-INTEGRATED GAMES<br/>
          <ul>
            <li>1st Place:  $1,000</li>
          </ul>
        </Wrap>
        <Center mt={{base: '3rem', md: '6rem'}} h={{ base: '3rem', md: '4rem' }} w={{ base: '12rem', md: '20rem' }}>
          <Image src='/spaceships.png' alt='speedrun' width={800} height={800} />
        </Center>
      </Center>
    </>
  );
};

export default GrandPrize;
