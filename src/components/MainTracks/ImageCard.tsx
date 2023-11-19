import {
  Button,
  Center,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { BrowserName } from '../../broswerName';
import {Pixel} from "../FontFamily";

const handleClickScroll = () => {
    const element = document.getElementById('track');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

const FullyOnChainCard = () => {
  const [hover, setHover] = useState(false);

  return (
    <Center
      rounded='1.2rem'
      position={'relative'}
      overflow='hidden'
      h={{ base: '200px', md: '220px' }}
      w={{ base: '85vw', md: '27rem' }}
      _before={{
        content: `" "`,
        position: 'absolute',
        inset: '0',
        borderRadius: '1.2rem',
        padding: '0px',
        WebkitMask:
          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        MaskComposite: 'exclude',
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {' '}
      {!hover && (
        <Text
          mt='auto'
          mb='1rem'
          fontWeight={'700'}
          fontSize={{ base: '2xl', md: '2.5xl' }}
          fontFamily={Pixel.style.fontFamily}
        >
            Fully on-chain
        </Text>
      )}
      {hover && (
        <VStack
          zIndex={'999'}
          _before={{
            content: `" "`,
            position: 'absolute',
            inset: '0',
            borderRadius: '1.2rem',
            padding: '0px',
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            MaskComposite: 'exclude',
          }}
          sx={{
            backdropFilter: 'blur(12px)',
          }}
          h='full'
          w='full'
          p={{ base: '1rem 2rem', md: '1rem 1.4rem' }}
          alignItems={'start'}
          gap={'0.4rem'}
          rounded='1.2rem'
        >
          <HStack
            pt={{ base: '0.5rem', md: '0rem' }}
            justify={'space-between'}
            w={{ base: '70vw', md: '24vw' }}
            h={{ base: 'auto', md: '3rem' }}
            // overflow='hidden'
          >
            <Text whiteSpace={'nowrap'} fontWeight={'700'} fontSize='lg' fontFamily={Pixel.style.fontFamily}>
              Fully on-chain
            </Text>
            <Center
              transform={{ base: 'none', md: 'scale(0.6) translateX(0rem)' }}
            >
            </Center>
          </HStack>
          <UnorderedList>
              <ListItem gap='0.5rem' display={'flex'} flexDir='row'>
                  <Center>
                      <svg width="16px" height="16px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -4719.000000)" fill="#000000">
                                  <g id="icons" transform="translate(56.000000, 160.000000)">
                                      <path d="M142,4570 C142,4569.448 141.552,4569 141,4569 L127,4569 C126.448,4569 126,4569.448 126,4570 L126,4576 C126,4576.552 126.448,4577 127,4577 L141,4577 C141.552,4577 142,4576.552 142,4576 L142,4570 Z M144,4569 L144,4577 C144,4578.105 143.105,4579 142,4579 L126,4579 C124.895,4579 124,4578.105 124,4577 L124,4569 C124,4567.895 124.895,4567 126,4567 L133,4567 L133,4563 C133,4561.895 133.895,4561 135,4561 L137,4561 C137.552,4561 138,4560.552 138,4560 L138,4559 L140,4559 L140,4561 C140,4562.105 139.105,4563 138,4563 L136,4563 C135.448,4563 135,4563.448 135,4564 L135,4567 L142,4567 C143.105,4567 144,4567.895 144,4569 L144,4569 Z M138,4574 L140,4574 L140,4572 L138,4572 L138,4574 Z M135,4572 C134.448,4572 134,4572.448 134,4573 C134,4573.552 134.448,4574 135,4574 C135.552,4574 136,4573.552 136,4573 C136,4572.448 135.552,4572 135,4572 L135,4572 Z M131,4572 L132,4572 L132,4574 L131,4574 L131,4575 L129,4575 L129,4574 L128,4574 L128,4572 L129,4572 L129,4571 L131,4571 L131,4572 Z" fill='white'>
                                      </path>
                                  </g>
                              </g>
                          </g>
                      </svg>
                  </Center>

                  <Text
                      fontWeight={'600'}
                      pt='0.3rem'
                      fontSize={{ base: 'sm', md: 'sm' }}
                  >
                      Game state and logic must be on-chain
                  </Text>
              </ListItem>
              <ListItem gap='0.5rem' display={'flex'} flexDir='row'>
                  <Center>
                      <svg fill="#000000" width="16px" height="16px" viewBox="0 0 32 32" id="icon"
                           xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M26,30H6a2.0023,2.0023,0,0,1-2-2V4A2.0023,2.0023,0,0,1,6,2H26a2.0023,2.0023,0,0,1,2,2V28A2.0023,2.0023,0,0,1,26,30ZM6,4V28H26V4Z" fill='white'/>
                          <rect x="10" y="7" width="12" height="2" transform="translate(32 20) rotate(-180)" fill='white'/>
                          <rect x="10" y="7" width="12" height="2" transform="translate(32 25) rotate(-180)" fill='white'/>
                          <rect x="10" y="7" width="12" height="2" transform="translate(32 30) rotate(-180)" fill='white'/>
                      </svg>
                  </Center>
                  <Text
                      fontWeight={'600'}
                      pt='0.3rem'
                      fontSize={{ base: 'sm', md: 'sm' }}
                  >
                      The program/smart contract must be open-source (the client can be closed-source)
                  </Text>
              </ListItem>
              {/*<ListItem gap='0.5rem' display={'flex'} flexDir='row'>*/}
              {/*    <Center>*/}
              {/*        <svg fill="#000000" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">*/}
              {/*            <path d="M23.313 26.102l-6.296-3.488c2.34-1.841 2.976-5.459 2.976-7.488v-4.223c0-2.796-3.715-5.91-7.447-5.91-3.73 0-7.544 3.114-7.544 5.91v4.223c0 1.845 0.78 5.576 3.144 7.472l-6.458 3.503s-1.688 0.752-1.688 1.689v2.534c0 0.933 0.757 1.689 1.688 1.689h21.625c0.931 0 1.688-0.757 1.688-1.689v-2.534c0-0.994-1.689-1.689-1.689-1.689zM23.001 30.015h-21.001v-1.788c0.143-0.105 0.344-0.226 0.502-0.298 0.047-0.021 0.094-0.044 0.139-0.070l6.459-3.503c0.589-0.32 0.979-0.912 1.039-1.579s-0.219-1.32-0.741-1.739c-1.677-1.345-2.396-4.322-2.396-5.911v-4.223c0-1.437 2.708-3.91 5.544-3.91 2.889 0 5.447 2.44 5.447 3.91v4.223c0 1.566-0.486 4.557-2.212 5.915-0.528 0.416-0.813 1.070-0.757 1.739s0.446 1.267 1.035 1.589l6.296 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.809zM30.312 21.123l-6.39-3.488c2.34-1.841 3.070-5.459 3.070-7.488v-4.223c0-2.796-3.808-5.941-7.54-5.941-2.425 0-4.904 1.319-6.347 3.007 0.823 0.051 1.73 0.052 2.514 0.302 1.054-0.821 2.386-1.308 3.833-1.308 2.889 0 5.54 2.47 5.54 3.941v4.223c0 1.566-0.58 4.557-2.305 5.915-0.529 0.416-0.813 1.070-0.757 1.739 0.056 0.67 0.445 1.267 1.035 1.589l6.39 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.779h-4.037c0.61 0.46 0.794 1.118 1.031 2h3.319c0.931 0 1.688-0.757 1.688-1.689v-2.503c-0.001-0.995-1.689-1.691-1.689-1.691z" fill='white'></path>*/}
              {/*        </svg>*/}
              {/*    </Center>*/}
              {/*    <Text*/}
              {/*        fontWeight={'600'}*/}
              {/*        pt='0.3rem'*/}
              {/*        fontSize={{ base: 'sm', md: 'sm' }}*/}
              {/*    >*/}
              {/*        Voted by the community*/}
              {/*    </Text>*/}
              {/*</ListItem>*/}
          </UnorderedList>
          {/*<Button*/}
          {/*  as='a'*/}
          {/*  onClick={handleClickScroll}*/}
          {/*  pt={'12px'}*/}
          {/*  fontWeight='600'*/}
          {/*>*/}
          {/*  Ideas {'->'}*/}
          {/*</Button>*/}
        </VStack>
      )}
      <Center
        zIndex={'-1'}
        w={{ base: '85vw', md: '27rem' }}
        height={{ base: '300px' }}
        position='absolute'
      >
        <Image src={'/on-chain.jpg'} height={400} width={555} alt='belgrade' />
      </Center>
    </Center>
  );
};

const SolanaIntegratedCard = () => {
  const [hover, setHover] = useState(false);
  return (
    <Center
      rounded='1.2rem'
      position={'relative'}
      overflow='hidden'
      borderColor={['pink', 'yellow', 'red', 'blue', 'orange', 'white']}
      h={{ base: '200px', md: '220px' }}
      w={{ base: '85vw', md: '27rem' }}
      _before={{
        content: `" "`,
        position: 'absolute',
        inset: '0',
        borderRadius: '1.2rem',
        padding: '0px',
        WebkitMask:
          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        MaskComposite: 'exclude',
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {!hover && (
        <Text
          mt='auto'
          mb='1rem'
          fontWeight={'700'}
          fontSize={{ base: '2xl', md: '2.5xl' }}
          fontFamily={Pixel.style.fontFamily}
        >
          Solana-integrated
        </Text>
      )}
      {hover && (
        <VStack
          zIndex={'999'}
          _before={{
            content: `" "`,
            position: 'absolute',
            inset: '0',
            borderRadius: '1.2rem',
            padding: '0px',
            background:
              BrowserName() === 'firefox'
                ? ''
                : 'linear-gradient(130deg,rgba(230, 55, 195, 0.5), rgba(214, 38, 177, 1),  rgba(249, 252, 127, 1))',
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            MaskComposite: 'exclude',
          }}
          sx={{
            backdropFilter: 'blur(12px)',
          }}
          h='full'
          w='full'
          p={{ base: '1rem 2rem', md: '1rem 1.4rem' }}
          alignItems={'start'}
          gap={'0.4rem'}
          rounded='1.2rem'
        >
          <HStack
            pt={{ base: '0.5rem', md: '0rem' }}
            justify={'space-between'}
            w={{ base: '70vw', md: '24vw' }}
            h={{ base: 'auto', md: '3rem' }}
            // overflow='hidden'
          >
            <Text fontWeight={'700'} fontSize='lg'
                  fontFamily={Pixel.style.fontFamily}>
              Solana-integrated
            </Text>
            <Center
              transform={{ base: 'none', md: 'scale(0.5) translateX(-3rem)' }}
            >
            </Center>
          </HStack>
          <UnorderedList>
            <ListItem gap='0.5rem' display={'flex'} flexDir='row'>
              <Center>
                  <svg width="16px" height="16px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -4719.000000)" fill="#000000">
                              <g id="icons" transform="translate(56.000000, 160.000000)">
                                  <path d="M142,4570 C142,4569.448 141.552,4569 141,4569 L127,4569 C126.448,4569 126,4569.448 126,4570 L126,4576 C126,4576.552 126.448,4577 127,4577 L141,4577 C141.552,4577 142,4576.552 142,4576 L142,4570 Z M144,4569 L144,4577 C144,4578.105 143.105,4579 142,4579 L126,4579 C124.895,4579 124,4578.105 124,4577 L124,4569 C124,4567.895 124.895,4567 126,4567 L133,4567 L133,4563 C133,4561.895 133.895,4561 135,4561 L137,4561 C137.552,4561 138,4560.552 138,4560 L138,4559 L140,4559 L140,4561 C140,4562.105 139.105,4563 138,4563 L136,4563 C135.448,4563 135,4563.448 135,4564 L135,4567 L142,4567 C143.105,4567 144,4567.895 144,4569 L144,4569 Z M138,4574 L140,4574 L140,4572 L138,4572 L138,4574 Z M135,4572 C134.448,4572 134,4572.448 134,4573 C134,4573.552 134.448,4574 135,4574 C135.552,4574 136,4573.552 136,4573 C136,4572.448 135.552,4572 135,4572 L135,4572 Z M131,4572 L132,4572 L132,4574 L131,4574 L131,4575 L129,4575 L129,4574 L128,4574 L128,4572 L129,4572 L129,4571 L131,4571 L131,4572 Z" fill='white'>
                                  </path>
                              </g>
                          </g>
                      </g>
                  </svg>
              </Center>

              <Text
                fontWeight={'600'}
                pt='0.3rem'
                fontSize={{ base: 'sm', md: 'sm' }}
              >
                  Game logic can be off-chain
              </Text>
            </ListItem>
            <ListItem gap='0.5rem' display={'flex'} flexDir='row'>
              <Center>
                  <svg fill="#000000" width="16px" height="16px" viewBox="0 0 32 32" id="icon"
                       xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M26,30H6a2.0023,2.0023,0,0,1-2-2V4A2.0023,2.0023,0,0,1,6,2H26a2.0023,2.0023,0,0,1,2,2V28A2.0023,2.0023,0,0,1,26,30ZM6,4V28H26V4Z" fill='white'/>
                      <rect x="10" y="7" width="12" height="2" transform="translate(32 20) rotate(-180)" fill='white'/>
                      <rect x="10" y="7" width="12" height="2" transform="translate(32 25) rotate(-180)" fill='white'/>
                      <rect x="10" y="7" width="12" height="2" transform="translate(32 30) rotate(-180)" fill='white'/>
                  </svg>
              </Center>
              <Text
                  fontWeight={'600'}
                  pt='0.3rem'
                  fontSize={{ base: 'sm', md: 'sm' }}
              >
                  The game must integrate Solana in a meaningful way (on-chain assets, on-chain economy, ...)
              </Text>
            </ListItem>
              {/*<ListItem gap='0.5rem' display={'flex'} flexDir='row'>*/}
              {/*    <Center>*/}
              {/*        <svg fill="#000000" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">*/}
              {/*            <path d="M23.313 26.102l-6.296-3.488c2.34-1.841 2.976-5.459 2.976-7.488v-4.223c0-2.796-3.715-5.91-7.447-5.91-3.73 0-7.544 3.114-7.544 5.91v4.223c0 1.845 0.78 5.576 3.144 7.472l-6.458 3.503s-1.688 0.752-1.688 1.689v2.534c0 0.933 0.757 1.689 1.688 1.689h21.625c0.931 0 1.688-0.757 1.688-1.689v-2.534c0-0.994-1.689-1.689-1.689-1.689zM23.001 30.015h-21.001v-1.788c0.143-0.105 0.344-0.226 0.502-0.298 0.047-0.021 0.094-0.044 0.139-0.070l6.459-3.503c0.589-0.32 0.979-0.912 1.039-1.579s-0.219-1.32-0.741-1.739c-1.677-1.345-2.396-4.322-2.396-5.911v-4.223c0-1.437 2.708-3.91 5.544-3.91 2.889 0 5.447 2.44 5.447 3.91v4.223c0 1.566-0.486 4.557-2.212 5.915-0.528 0.416-0.813 1.070-0.757 1.739s0.446 1.267 1.035 1.589l6.296 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.809zM30.312 21.123l-6.39-3.488c2.34-1.841 3.070-5.459 3.070-7.488v-4.223c0-2.796-3.808-5.941-7.54-5.941-2.425 0-4.904 1.319-6.347 3.007 0.823 0.051 1.73 0.052 2.514 0.302 1.054-0.821 2.386-1.308 3.833-1.308 2.889 0 5.54 2.47 5.54 3.941v4.223c0 1.566-0.58 4.557-2.305 5.915-0.529 0.416-0.813 1.070-0.757 1.739 0.056 0.67 0.445 1.267 1.035 1.589l6.39 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.779h-4.037c0.61 0.46 0.794 1.118 1.031 2h3.319c0.931 0 1.688-0.757 1.688-1.689v-2.503c-0.001-0.995-1.689-1.691-1.689-1.691z" fill='white'></path>*/}
              {/*        </svg>*/}
              {/*    </Center>*/}
              {/*    <Text*/}
              {/*        fontWeight={'600'}*/}
              {/*        pt='0.3rem'*/}
              {/*        fontSize={{ base: 'sm', md: 'sm' }}*/}
              {/*    >*/}
              {/*        Voted by the community*/}
              {/*    </Text>*/}
              {/*</ListItem>*/}
          </UnorderedList>
          {/*<Button*/}
          {/*  as='a'*/}
          {/*  onClick={handleClickScroll}*/}
          {/*  pt={'12px'}*/}
          {/*  fontWeight='600'*/}
          {/*>*/}
          {/*    Ideas {'->'}*/}
          {/*</Button>*/}
        </VStack>
      )}
      <Center
        zIndex={'-1'}
        w={{ base: '85vw', md: '27rem' }}
        height={{ base: '300px' }}
        position='absolute'
      >
        <Image src={'/integrated.jpg'} height={400} width={555} alt='belgrade' />
      </Center>
    </Center>
  );
};

export { SolanaIntegratedCard, FullyOnChainCard };
