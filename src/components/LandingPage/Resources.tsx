import {
  Button,
  Center,
  Heading,
  Wrap, WrapItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {Inktrap, Joystix} from '../FontFamily';
import {FiExternalLink} from "react-icons/fi";

const Resources = () => {

  return (
    <>
      <Center flexDirection={'column'} maxW={'4xl'} py='4rem'>
        <Heading
          py='2rem'
          fontFamily={Joystix.style.fontFamily}
          mx='auto'
          maxW='fit-content'
          fontSize={{ base: '2xl', md: '4xl' }}
          fontWeight='800'
        >
          Resources
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
          fontSize={{ base: '2xl', md: '2xl' }}
          alignItems='center'
          textAlign='center'
        >
          <p>An extensive list of resources to help you getting started <br/> with game development on Solana <br/>
              <Button
                  as='a'
                  href='https://github.com/magicblock-labs/solana-gaming-resources'
                  target={'_blank'}
                  fontFamily={Inktrap.style.fontFamily}
                  backdropFilter='blur(10px)'
                  backgroundColor='rgba(255, 255, 255, 0.10)'
                  rounded={'full'}
                  p='0.35rem 1rem 0rem 1rem'
                  mt='2rem'
                  color='white'
                  fontSize={{ base: 'xs', md: 'sm' }}
                  rightIcon={
                      <FiExternalLink
                          style={{
                              transform: 'translateY(-4px)',
                              width: '12px',
                          }}
                      />
                  }
              >
                  Resources
              </Button>
          </p>
        </Wrap>
      </Center>
    </>
  );
};

export default Resources;
