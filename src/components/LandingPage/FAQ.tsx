import {
  Center,
  Heading,
  Wrap,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import TracksModalBody from './ModalBody';
import faqData from '../../data/faq.json';
import { trackType } from '../../../interfaces/track';
import {Joystix} from '../FontFamily';
import CardFAQ from "./CardFAQ";
import {faqType} from "../../../interfaces/faq";

const FAQ = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTrack] = useState<trackType | {}>({});


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
      <Center flexDirection={'column'} maxW={'4xl'} py='4rem'>
        <Heading
          py='2rem'
          fontFamily={Joystix.style.fontFamily}
          mx='auto'
          maxW='fit-content'
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight='800'
        >
          FAQ
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
          {faqData.map((faq, index) => {
            return <CardFAQ faq={faq as faqType} key={index} /> ;
          })}
        </Wrap>
      </Center>
    </>
  );
};

export default FAQ;
