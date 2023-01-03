import {
  Center,
  Heading,
  HStack,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { SolanaFoundation } from '../assets/sponsors/icons';
import { Inktrap } from '../FontFamily';

const PrizePool = () => {
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
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onMouseMove={handleMouseMove}
      onMouseOutCapture={() => {
        setGlarePosition({
          x: -120,
          y: -120,
        });
      }}
      maxW={{ base: '85vw', md: '38rem' }}
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
        inset: '0',
        borderRadius: '1.2rem',
        padding: '4px',
        background: hover
          ? `linear-gradient(130deg,rgba(230, 55, 195, 0.5), rgba(214, 38, 177, 1),  rgba(249, 252, 127, 1))`
          : '',
        WebkitMask:
          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        MaskComposite: 'exclude',
      }}
    >
      <Heading
        fontFamily={Inktrap.style.fontFamily}
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
          bgGradient={`linear-gradient(30deg, #E637C3 -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)`}
          bgClip={'text'}
          fontFamily={Inktrap.style.fontFamily}
          fontSize={{ base: '6xl', md: '9xl' }}
          fontWeight='800'
        >
          100k
        </Heading>

        <Text
          fontFamily={Inktrap.style.fontFamily}
          fontSize={{ base: '2xl', md: '4xl' }}
          pb={{ base: '1.2rem', md: '2rem' }}
          fontWeight={'500'}
        >
          USDC
        </Text>
      </HStack>
      <Text
        fontFamily={Inktrap.style.fontFamily}
        pt={'1rem'}
        fontSize={{ base: 'md', md: 'lg' }}
      >
        Huge prizes up for grabs and multiple tracks catering to Solana
        developers of all skill levels.
      </Text>

      <Wrap pt='0.5rem' spacing='0.6rem' fontWeight={'500'} fontSize='md'>
        <WrapItem>
          <Center
            backdropFilter='blur(10px)'
            backgroundColor='rgba(255, 255, 255, 0.10)'
            rounded={'full'}
            p={{
              base: '0.5rem 1rem 0.2rem 1rem',
              md: '0.5rem 1.5rem 0rem 1.5rem',
            }}
            bgGradient={`linear-gradient(30deg, #E637C3 -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)`}
            bgClip={'text'}
            fontSize={{ base: 'sm', md: 'md' }}
          >
            NFTs
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            backdropFilter='blur(20px)'
            backgroundColor='rgba(255, 255, 255, 0.10)'
            rounded={'full'}
            p={{
              base: '0.5rem 1rem 0.2rem 1rem',
              md: '0.5rem 1.5rem 0rem 1.5rem',
            }}
            bgGradient={`linear-gradient(30deg, #E637C3 -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)`}
            bgClip={'text'}
            fontSize={{ base: 'sm', md: 'md' }}
          >
            DAOs
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            backdropFilter='blur(10px)'
            backgroundColor='rgba(255, 255, 255, 0.10)'
            rounded={'full'}
            p={{
              base: '0.5rem 1rem 0.2rem 1rem',
              md: '0.5rem 1.5rem 0rem 1.5rem',
            }}
            bgGradient={`linear-gradient(30deg, #E637C3 -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)`}
            bgClip={'text'}
            fontSize={{ base: 'sm', md: 'md' }}
          >
            DeFi
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            backdropFilter='blur(10px)'
            backgroundColor='rgba(255, 255, 255, 0.10)'
            rounded={'full'}
            p={{
              base: '0.5rem 1rem 0.2rem 1rem',
              md: '0.5rem 1.5rem 0rem 1.5rem',
            }}
            bgGradient={`linear-gradient(30deg, #E637C3 -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)`}
            bgClip={'text'}
            fontSize={{ base: 'sm', md: 'md' }}
          >
            Dev Tooling
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            backdropFilter='blur(10px)'
            backgroundColor='rgba(255, 255, 255, 0.10)'
            rounded={'full'}
            p={{
              base: '0.5rem 1rem 0.2rem 1rem',
              md: '0.5rem 1.5rem 0rem 1.5rem',
            }}
            bgGradient={`linear-gradient(30deg, #E637C3 -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)`}
            bgClip={'text'}
            fontSize={{ base: 'sm', md: 'md' }}
          >
            Mobile
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            backdropFilter='blur(10px)'
            backgroundColor='rgba(255, 255, 255, 0.10)'
            rounded={'full'}
            p={{
              base: '0.5rem 1rem 0.2rem 1rem',
              md: '0.5rem 1.5rem 0rem 1.5rem',
            }}
            bgGradient={`linear-gradient(30deg, #E637C3 -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)`}
            bgClip={'text'}
            fontSize={{ base: 'sm', md: 'md' }}
          >
            Payments
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            backdropFilter='blur(10px)'
            backgroundColor='rgba(255, 255, 255, 0.10)'
            rounded={'full'}
            p={{
              base: '0.5rem 1rem 0.2rem 1rem',
              md: '0.5rem 1.5rem 0rem 1.5rem',
            }}
            bgGradient={`linear-gradient(100deg, #FAFC7F -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)`}
            bgClip={'text'}
            fontSize={{ base: 'sm', md: 'md' }}
          >
            Gaming
          </Center>
        </WrapItem>
        <WrapItem>
          <Center
            backdropFilter='blur(10px)'
            backgroundColor='rgba(255, 255, 255, 0.10)'
            rounded={'full'}
            p={{
              base: '0.5rem 1rem 0.2rem 1rem',
              md: '0.5rem 1.5rem 0rem 1.5rem',
            }}
            bgGradient={`linear-gradient(180deg, #E637C3 -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)`}
            bgClip={'text'}
            fontSize={{ base: 'sm', md: 'md' }}
          >
            Web3
          </Center>
        </WrapItem>
      </Wrap>
    </VStack>
  );
};
export default PrizePool;
