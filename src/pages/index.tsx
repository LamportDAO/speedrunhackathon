import SEO from '../components/SEO/index';
import config from '../../config/general.config';
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import TracksAndPrizes from '../components/LandingPage/TracksAndPrizes';
import {Inktrap, Joystix} from '../components/FontFamily';
import SponsorsSection from '../components/LandingPage/SponsorsSection';
import { FaDiscord } from 'react-icons/fa';
import MainTracks from '../components/MainTracks/MainTracks';
import { BrowserName } from '../broswerName';
import HeadingTotalPrize from "../components/LandingPage/HeadingTotalPrize";
import PresentedBy from "../components/LandingPage/PresentedBy";
import FAQ from "../components/LandingPage/FAQ";
import Image from "next/image";
import Game from "../components/LandingPage/Game";
import Resources from "../components/LandingPage/Resources";

export default function Home() {
  const handleClickScroll = () => {
    const element = document.getElementById('track');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <SEO
        title={`${config.general.name}`}
        description={`${config.general.name} is a virtual hackathon organized by LamportDAO and Magicblock from Jul 26 - 30, 2023.`}
        image={`https://www.magicblock.gg/assets/images/speedrun.jpg`}
      />
      <Container maxW={'8xl'} p='0' >
        <VStack
          py={['10vh', '5rem', '8rem', '8rem', '6rem']}
          mx='auto'
          pl='2rem'
          pr='2rem'
          maxW={['26rem', '26rem', '40rem', '60rem']}
        >
          <Heading
            fontSize={['5xl', '6xl', '7xl', '7xl', '8xl']}
            lineHeight={['58px', '72px', '90px', '130px', '130px']}
            textAlign={'center'}
            fontWeight={'800'}
            fontFamily={Joystix.style.fontFamily}
          >
            Solana <br />
            {/*<Box as='span'>Speedrun</Box>*/}
            <Image src='./speedrun.svg' alt="Speedrun" width='900' height='500' />
          </Heading>
          <Text
            px='1rem'
            pt={{ base: '0rem', md: '0.5rem' }}
            fontSize={{ base: '16px', sm: '18px', md: '24px' }}
            fontWeight='500'
            maxW='3xl'
            fontFamily={Joystix.style.fontFamily}
            textAlign={'center'}
          >
            <br/>
            The first virtual Solana Game Jam {' '}
            <br/>
            <Box as='span'  color={'white'}>
              <br/>
              July 26th - July 30th
            </Box>{' '}
            {/*presented by LamportDAO & Magicblock*/}
          </Text>
          <HStack
            mt='2rem'
            mx='auto'
            w='full'
            gap={{ base: '0.1rem', md: '0.5rem' }}
            alignItems={'center'}
            justifyContent='center'
            pt={'1rem'}
          >
            <Button
              pt={{ base: '0.7rem', md: '0.8rem' }}
              display={'flex'}
              alignItems='start'
              justifyContent={'center'}
              fontSize={{ base: '16px', md: '18px' }}
              lineHeight='24px'
              variant='gradient'
             // onClick={handleClickScroll}
              as='a'
              href='https://solanaspeedrun.com/register'
              target={'_blank'}
            >
              Register
            </Button>
            <Button
              as='a'
              href='https://solanaspeedrun.com/discord'
              target={'_blank'}
              pt={{ base: '0.7rem', md: '0.8rem' }}
              display={'flex'}
              alignItems='start'
              justifyContent={'center'}
              fontSize={{ base: '16px', md: '18px' }}
              lineHeight='24px'
              rightIcon={<FaDiscord />}
            >
              Join Discord
            </Button>
          </HStack>
        </VStack>
        <Center>
          <PresentedBy />
        </Center>
        <Center>
          <HeadingTotalPrize />
        </Center>
        <Center pb='10rem' id='track'>
          {BrowserName() === 'firefox' ? '' : <MainTracks />}
        </Center>
        <Center>
          <TracksAndPrizes />
        </Center>
        <Center>
          <Resources />
        </Center>
        <Center>
          <FAQ />
        </Center>
        {/*<Center py='12rem' px={{ base: '2rem', md: '3rem', lg: '5rem' }}>*/}
        {/*  /!*<SponsorsSection />*!/*/}
        {/*</Center>*/}
        <Center>
          <Game />
        </Center>

      </Container>
    </>
  );
}
