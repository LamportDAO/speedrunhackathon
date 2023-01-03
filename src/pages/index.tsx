import localFont from '@next/font/local';
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
import { Inktrap } from '../components/FontFamily';
import SponsorsSection from '../components/LandingPage/SponsorsSection';
import { FaDiscord } from 'react-icons/fa';
import { Helius, LamportDAO } from '../components/assets/sponsors/icons';

export default function Home() {
  return (
    <>
      <SEO
        title={`${config.general.name}`}
        description={`${config.general.name} is a virtual hackathon organized by LamportDAO .`}
        image={`https://res.cloudinary.com/demonicirfan/image/upload/v1672742830/Frame_145_3_liwqzi.png`}
      />
      <Container maxW={'8xl'} p='0'>
        <VStack
          gap='0rem'
          py={['10vh', '5rem', '8rem', '8rem', '6rem']}
          mx='auto'
          maxW={['26rem', '26rem', '40rem', '60rem']}
        >
          <Heading
            fontSize={['6xl', '7xl', '8xl', '9xl', '9xl']}
            lineHeight={['58px', '72px', '90px', '130px', '130px']}
            textAlign={'center'}
            fontWeight={'800'}
            fontFamily={Inktrap.style.fontFamily}
          >
            Solana <br />
            {/* <Box
              as='span'
              fontFamily={Inktrap.style.fontFamily}
              fontWeight='200'
            >
              &#10100;
            </Box> */}
            <Box as='span'>Sandstorm</Box>
            {/* <Box
              as='span'
              fontFamily={Inktrap.style.fontFamily}
              fontWeight='200'
            >
              &#10101;
            </Box> */}
          </Heading>
          <Text
            px='1rem'
            pt={'0.5rem'}
            fontSize={{ base: '18px', md: '24px' }}
            fontWeight='500'
            maxW='3xl'
            textAlign={'center'}
          >
            Virtual Solana Hackathon form{' '}
            <Box as='span' textDecor={'underline'}>
              Jan 10 - Jan 23
            </Box>{' '}
            presented by LamportDAO & Helius Labs
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
            >
              Sponser
            </Button>
            <Button
              as='a'
              href='https://sandstormhackathon.com/discord'
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
          <TracksAndPrizes />
        </Center>
        <Center py='1rem' px={{ base: '2rem', md: '3rem', lg: '5rem' }}>
          <SponsorsSection />
        </Center>
      </Container>
    </>
  );
}
