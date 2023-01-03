import {
  Center,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import TracksModalBody from './ModalBody';
import PrizePool from './PrizePoll';
import Card from './Card';
import tracksData from '../../data/tracks.json';
import { trackType } from '../../../interfaces/track';

const TracksAndPrizes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTrack, setActiveTrack] = useState<trackType | {}>({});
  const activeTrackHandler = (track?: trackType) => {
    console.log('handler called - ', track);
    if (!track) return;
    setActiveTrack(track);
    onOpen();
  };

  return (
    <>
      <Modal
        size={{ base: 'full', md: '2xl' }}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          rounded={'3xl'}
          background={'rgba(88, 82, 139, 0.2)'}
          sx={{
            backdropFilter: 'blur(20px)',
          }}
        >
          <ModalBody p='0' bg='transparent'>
            <TracksModalBody
              onClose={onClose}
              track={activeTrack as trackType}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Center
        flexDirection={'column'}
        maxW={'4xl'}
        pt={{ base: '25vh', md: '35vh' }}
        pb='10rem'
      >
        <Heading
          py='2rem'
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight='700'
        >
          Tracks & Prizes
        </Heading>
        <Stack
          alignItems={'stretch'}
          gap={{ base: '0.2rem', md: '1rem' }}
          justify='space-between'
          flexDir={{ base: 'column', lg: 'row' }}
        >
          <PrizePool />
          <Stack
            direction={{ base: 'row', lg: 'column' }}
            gap={{ base: '0.2rem', md: '1rem' }}
            alignItems={'stretch'}
          >
            <Card
              activeTrackHandler={activeTrackHandler}
              track={{
                Name: 'Student Prize ',
                Sponsor: ['Solana University'],
                PrizeWorth: '5000',
                PizeUnit: 'USDC',
                PrizeDetails: [
                  ' 2023 Breakpoint Tickets to the top student team',
                ],
                AboutUs:
                  'Solana U is a global community of curious coders and creatives that are dedicated to providing accessible blockchain education to all. As part of our mission, we strive to foster an exciting and interactive learning environment while providing resources and opportunities for students and educators to succeed in Web3. We welcome all individuals to join our diverse network and build with us on Solana.',
                Description:
                  'Solana U is a global community of curious coders and creatives that are dedicated to providing accessible blockchain education to all. As part of our mission, we strive to foster an exciting and interactive learning environment while providing resources and opportunities for students and educators to succeed in Web3. We welcome all individuals to join our diverse network and build with us on Solana.',
                Ideas: [''],
                Requirements: '',
                Links: [' '],
                Judges: [],
              }}
            />
            <Card
              activeTrackHandler={activeTrackHandler}
              track={{
                Name: 'Superteam Global Prize',
                Sponsor: ['Superteam'],
                PrizeWorth: '2000',
                PizeUnit: 'USDC',
                PrizeDetails: [
                  ' 2,000 USDC to Most Scalable and Useful Public Good',
                ],
                AboutUs:
                  'As part of the LamportDAO Sandstorm Hackathon, Superteam is sponsoring a global track for Public Goods. These are protocols that exist on Solana without intention to collect fees and allow other protocols and users benefit from additional features on Solana for free.',
                Description:
                  'As part of the LamportDAO Sandstorm Hackathon, Superteam is sponsoring a global track for Public Goods. These are protocols that exist on Solana without intention to collect fees and allow other protocols and users benefit from additional features on Solana for free.',
                Ideas: [
                  'Anything without protocol fees.',
                  'This is a global prize and every hackathon submission is automatically enrolled into this prize.',
                ],
                Requirements: '',
                Links: ['https://twitter.com/LamportDAO'],
                Judges: [],
              }}
            />
          </Stack>
        </Stack>
        <Wrap
          w='100%'
          py={{ base: '0.5rem', md: '1rem' }}
          spacing={{ base: '0.5rem', md: '1rem' }}
          direction={'row'}
          justify={'center'}
          alignItems='center'
        >
          {tracksData.map((track, index) => (
            <Card
              activeTrackHandler={activeTrackHandler}
              key={index}
              track={track as trackType}
            />
          ))}
        </Wrap>
      </Center>
    </>
  );
};

export default TracksAndPrizes;
