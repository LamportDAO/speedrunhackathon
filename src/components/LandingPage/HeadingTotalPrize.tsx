import {
  Center,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  useMediaQuery, Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import TracksModalBody from './ModalBody';
import { trackType } from '../../../interfaces/track';
import {Pixel} from '../FontFamily';
import TotalPrize from "./TotalPrize";

function getTotalTrackPrize(trackArray: any) {
  let totalTrackPrize = 30000;
  trackArray.forEach((track: { PrizeWorth: string, PrizeUnit: string }) => {
    if (track.PrizeWorth && track.PrizeUnit.startsWith("USDC")) {
      totalTrackPrize += parseInt(track.PrizeWorth);
    }
  });
  return totalTrackPrize;
}

const HeadingTotalPrize = () => {
  const [isMobile] = useMediaQuery('(max-width: 480px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTrack, setActiveTrack] = useState<trackType | {}>({});
  const activeTrackHandler = (track?: trackType) => {
    if (!track) return;
    setActiveTrack(track);
    onOpen();
  };
  const totalTrackPrize = 30000;
  return (
    <>
      <Modal
        size={{ base: 'full', md: '2xl' }}
        isOpen={isOpen}
        onClose={onClose}
        autoFocus={false}
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
      <Center flexDirection={'column'} maxW={'4xl'} py='2rem' pt={{ base: '20vh', md: '20vh' }}>
        <Heading
          py='2rem'
          pl='2rem'
          pr='2rem'
          mb='4rem'
          mx='auto'
          maxW='fit-content'
          fontSize={{ base: '3xl', md: '4xl' }}
          fontWeight='800'
          fontFamily={Pixel.style.fontFamily}
          textAlign='center'
        >
          The GameJam theme is: <br/><br/> <Text fontSize={{ base: '4xl', md: '6xl' }}> 💀 Death is Temporary 💙 </Text>
        </Heading>
        <br/>
        <br/>
        <TotalPrize
          activeTrackHandler={activeTrackHandler}
          totalPoolPrize={totalTrackPrize}
        />
      </Center>
    </>
  );
};

export default HeadingTotalPrize;
