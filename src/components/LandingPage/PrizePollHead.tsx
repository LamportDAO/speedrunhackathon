import {
  Center,
  Heading,
  HStack,
  Text,
  useMediaQuery,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {Inktrap, Pixel} from '../FontFamily';
import { BrowserName } from '../../broswerName';

function kFormatter(num: number): number {
  return Math.abs(num) > 999
    ? Math.sign(num) * parseInt((Math.abs(num) / 1000).toFixed(1))
    : Math.sign(num) * Math.abs(num);
}

const PrizePoolHead = ({ totalPoolPrize }: { totalPoolPrize: number }) => {
  const [isMobile] = useMediaQuery('(max-width: 480px)');
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const handleMouseMove = (event: {
    nativeEvent: { offsetX: any; offsetY: any };
  }) => {
    setGlarePosition({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
    });
  };
  return (
    <VStack
      onMouseEnter={() => {
        if (isMobile) return;
        setHover(true);
      }}
      onMouseLeave={() => {
        if (isMobile) return;
        setHover(false);
      }}
      onMouseMove={handleMouseMove}
      onMouseOutCapture={() => {
        if (isMobile) return;
        setGlarePosition({
          x: -120,
          y: -120,
        });
      }}
      // border={'1px solid'}
      borderColor={{ base: 'red', sm: 'green', md: 'blue', lg: 'pink' }}
      maxW={{ base: '85vw', sm: '80vw', md: '72vw', lg: '38rem' }}
      mx='auto'
      alignItems={'start'}
      background={'rgba(88, 82, 139, 0.2)'}
      sx={{
        backdropFilter: 'blur(14px)',
      }}
      p={{ base: '1.5rem 2rem', md: '2rem 3rem' }}
      rounded='2xl'
      overflow={'hidden'}
      _before={{
        content: `" "`,
        position: 'absolute',
        top: `${glarePosition.y}px`,
        left: `${glarePosition.x}px`,
        transform: 'translate(-5rem, -5rem)',
        width: '10rem',
        height: '10rem',
        filter: 'blur(110px)',
        backgroundColor: 'rgba(173, 166, 240, 0.9);',
      }}
      _after={{
        content: `" "`,
        position: 'absolute',
        inset: isMobile ? 'none' : BrowserName() === 'safari' ? 'none' : '0',
        borderRadius: '1.2rem',
        padding: '0px',
        WebkitMask:
          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        MaskComposite: 'exclude',
      }}
    >
      <Heading
        fontFamily={Pixel.style.fontFamily}
        fontSize={{ base: 'xl', md: '3xl' }}
      >
        Prizes Worth
      </Heading>
      <HStack
        pt='1rem'
        gap={{ base: '0.5rem', md: '2rem' }}
        alignItems={'flex-end'}
        justifyContent={'space-between'}
      >
        <Heading
          bgGradient={`linear-gradient(30deg, #D273D9 -8.03%, #D273D9 37.2%, #404DCF 109.33%)`}
          bgClip={'text'}
          fontFamily={Pixel.style.fontFamily}
          fontSize={{ base: '6xl', md: '9xl' }}
          fontWeight='800'
        >
          {Math.round(kFormatter(totalPoolPrize))}k
        </Heading>
        <Text
          fontFamily={Pixel.style.fontFamily}
          fontSize={{ base: '4xl', md: '6xl' }}
          pb={{ base: '0.5rem', md: '1.5rem' }}
          fontWeight={'500'}
        >
          USDC
        </Text>
      </HStack>

      <Text
        fontFamily={Pixel.style.fontFamily}
        pt={'1rem'}
        fontSize={{ base: 'md', md: 'lg' }}
      >
        across main and sponsored tracks, distributed by community voting and sponsors.
      </Text>

      {/*<Wrap pt='0.5rem' spacing='0.6rem' fontWeight={'500'} fontSize='md'>*/}
      {/*  <WrapItem>*/}
      {/*    <Center*/}
      {/*        backdropFilter='blur(10px)'*/}
      {/*        backgroundColor='rgba(255, 255, 255, 0.10)'*/}
      {/*        rounded={'full'}*/}
      {/*        p={{*/}
      {/*          base: '0.5rem 1rem 0.2rem 1rem',*/}
      {/*          md: '0.5rem 1.5rem 0rem 1.5rem',*/}
      {/*        }}*/}
      {/*        bgGradient={`linear-gradient(100deg, #FAFC7F -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)`}*/}
      {/*        bgClip={'text'}*/}
      {/*        fontSize={{ base: 'sm', md: 'md' }}*/}
      {/*    >*/}
      {/*      Gaming*/}
      {/*    </Center>*/}
      {/*  </WrapItem>*/}
      {/*  <WrapItem>*/}
      {/*    <Center*/}
      {/*      backdropFilter='blur(10px)'*/}
      {/*      backgroundColor='rgba(255, 255, 255, 0.10)'*/}
      {/*      rounded={'full'}*/}
      {/*      p={{*/}
      {/*        base: '0.5rem 1rem 0.2rem 1rem',*/}
      {/*        md: '0.5rem 1.5rem 0rem 1.5rem',*/}
      {/*      }}*/}
      {/*      bgGradient={`linear-gradient(30deg, #E637C3 -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)`}*/}
      {/*      bgClip={'text'}*/}
      {/*      fontSize={{ base: 'sm', md: 'md' }}*/}
      {/*    >*/}
      {/*      NFTs*/}
      {/*    </Center>*/}
      {/*  </WrapItem>*/}
      {/*  <WrapItem>*/}
      {/*    <Center*/}
      {/*      backdropFilter='blur(20px)'*/}
      {/*      backgroundColor='rgba(255, 255, 255, 0.10)'*/}
      {/*      rounded={'full'}*/}
      {/*      p={{*/}
      {/*        base: '0.5rem 1rem 0.2rem 1rem',*/}
      {/*        md: '0.5rem 1.5rem 0rem 1.5rem',*/}
      {/*      }}*/}
      {/*      bgGradient={`linear-gradient(30deg, #E637C3 -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)`}*/}
      {/*      bgClip={'text'}*/}
      {/*      fontSize={{ base: 'sm', md: 'md' }}*/}
      {/*    >*/}
      {/*      DAOs*/}
      {/*    </Center>*/}
      {/*  </WrapItem>*/}
      {/*  <WrapItem>*/}
      {/*    <Center*/}
      {/*      backdropFilter='blur(10px)'*/}
      {/*      backgroundColor='rgba(255, 255, 255, 0.10)'*/}
      {/*      rounded={'full'}*/}
      {/*      p={{*/}
      {/*        base: '0.5rem 1rem 0.2rem 1rem',*/}
      {/*        md: '0.5rem 1.5rem 0rem 1.5rem',*/}
      {/*      }}*/}
      {/*      bgGradient={`linear-gradient(30deg, #E637C3 -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)`}*/}
      {/*      bgClip={'text'}*/}
      {/*      fontSize={{ base: 'sm', md: 'md' }}*/}
      {/*    >*/}
      {/*      DeFi*/}
      {/*    </Center>*/}
      {/*  </WrapItem>*/}
      {/*  <WrapItem>*/}
      {/*    <Center*/}
      {/*      backdropFilter='blur(10px)'*/}
      {/*      backgroundColor='rgba(255, 255, 255, 0.10)'*/}
      {/*      rounded={'full'}*/}
      {/*      p={{*/}
      {/*        base: '0.5rem 1rem 0.2rem 1rem',*/}
      {/*        md: '0.5rem 1.5rem 0rem 1.5rem',*/}
      {/*      }}*/}
      {/*      bgGradient={`linear-gradient(30deg, #E637C3 -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)`}*/}
      {/*      bgClip={'text'}*/}
      {/*      fontSize={{ base: 'sm', md: 'md' }}*/}
      {/*    >*/}
      {/*      Mobile*/}
      {/*    </Center>*/}
      {/*  </WrapItem>*/}
      {/*  <WrapItem>*/}
      {/*    <Center*/}
      {/*      backdropFilter='blur(10px)'*/}
      {/*      backgroundColor='rgba(255, 255, 255, 0.10)'*/}
      {/*      rounded={'full'}*/}
      {/*      p={{*/}
      {/*        base: '0.5rem 1rem 0.2rem 1rem',*/}
      {/*        md: '0.5rem 1.5rem 0rem 1.5rem',*/}
      {/*      }}*/}
      {/*      bgGradient={`linear-gradient(180deg, #E637C3 -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)`}*/}
      {/*      bgClip={'text'}*/}
      {/*      fontSize={{ base: 'sm', md: 'md' }}*/}
      {/*    >*/}
      {/*      Web3*/}
      {/*    </Center>*/}
      {/*  </WrapItem>*/}
      {/*</Wrap>*/}
    </VStack>
  );
};
export default PrizePoolHead;
