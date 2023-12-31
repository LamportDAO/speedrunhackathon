import {
  Center,
  Heading,
  Wrap,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure, useMediaQuery,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import TracksModalBody from './ModalBody';
import faqData from '../../data/faq.json';
import { trackType } from '../../../interfaces/track';
import {Pixel} from '../FontFamily';
import CardFAQ from "./CardFAQ";
import {faqType} from "../../../interfaces/faq";

const Game = () => {
  const [isMobile] = useMediaQuery('(max-width: 670px)');

  const games = ["geomdash", "spaceinvaders", "pacman3d", "mario", "angrymex", "pokeninja"];
  const game = games[Math.floor(Math.random()*games.length)];

  if (isMobile){
    return <></>
  }else{
    let width = 670;
    let height = 516;
    return (
        <>
          <Center flexDirection={'column'} maxW={'4xl'} py={{base:'5rem', md:"6rem"}}>
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
              TRAINING HUB
            </Heading>
            <Wrap
                w='100%'
                maxW='100vw'
                py={{ base: '0.5rem', md: '1rem' }}
                spacing={{ base: '0.5rem', md: '1rem' }}
                direction={'column'}
                justify={'center'}
                alignItems='center'
            >
              <iframe src={'https://funhtml5games.com?embed=' + game} frameBorder="0" scrolling="no" width={width} height={height}></iframe>
            </Wrap>
          </Center>
        </>
    );
  }
};

export default Game;
