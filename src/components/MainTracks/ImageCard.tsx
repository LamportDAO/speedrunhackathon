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
import {
  BridgeSplit,
  Eclipse,
  MetaCamp,
  Unique,
} from '../assets/sponsors/icons';

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
        padding: '5px',
        background:
          BrowserName() === 'firefox'
            ? ''
            : 'linear-gradient(130deg,rgba(230, 55, 195, 0.5), rgba(214, 38, 177, 1),  rgba(249, 252, 127, 1))',
        WebkitMask:
          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        MaskComposite: 'exclude',
      }}
      onMouseEnter={() => {
        setHover(false);
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
          fontSize={{ base: 'xl', md: '2xl' }}
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
            padding: '5px',
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
            <Text whiteSpace={'nowrap'} fontWeight={'700'} fontSize='lg'>
              Fully on-chain
            </Text>
            <Center
              transform={{ base: 'none', md: 'scale(0.6) translateX(0rem)' }}
            >
              <BridgeSplit />
            </Center>
          </HStack>
          <UnorderedList>
            <ListItem gap='0.5rem' display={'flex'} flexDir='row'>
              <Center>
                <svg
                  width='14'
                  height='16'
                  viewBox='0 0 14 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7 8.15287C7.48125 8.15287 7.89338 7.99307 8.23638 7.67348C8.57879 7.35443 8.75 6.9707 8.75 6.52229C8.75 6.07389 8.57879 5.68989 8.23638 5.37029C7.89338 5.05124 7.48125 4.89172 7 4.89172C6.51875 4.89172 6.10692 5.05124 5.7645 5.37029C5.4215 5.68989 5.25 6.07389 5.25 6.52229C5.25 6.9707 5.4215 7.35443 5.7645 7.67348C6.10692 7.99307 6.51875 8.15287 7 8.15287ZM7 16C6.88333 16 6.76667 15.9796 6.65 15.9389C6.53333 15.8981 6.43125 15.8437 6.34375 15.7758C4.21458 14.0229 2.625 12.3959 1.575 10.8947C0.525 9.39292 0 7.98981 0 6.68535C0 4.64713 0.703792 3.02335 2.11138 1.81401C3.51838 0.604671 5.14792 0 7 0C8.85208 0 10.4816 0.604671 11.8886 1.81401C13.2962 3.02335 14 4.64713 14 6.68535C14 7.98981 13.475 9.39292 12.425 10.8947C11.375 12.3959 9.78542 14.0229 7.65625 15.7758C7.56875 15.8437 7.46667 15.8981 7.35 15.9389C7.23333 15.9796 7.11667 16 7 16Z'
                    fill='white'
                  />
                </svg>
              </Center>

              <Text
                fontWeight={'600'}
                pt='0.3rem'
                fontSize={{ base: 'sm', md: 'sm' }}
              >
                30 W 24th St. New York 10010
              </Text>
            </ListItem>
            <ListItem gap='0.5rem' display={'flex'} flexDir='row'>
              <Center>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.99398 1.33301C4.31398 1.33301 1.33398 4.31967 1.33398 7.99967C1.33398 11.6797 4.31398 14.6663 7.99398 14.6663C11.6807 14.6663 14.6673 11.6797 14.6673 7.99967C14.6673 4.31967 11.6807 1.33301 7.99398 1.33301ZM10.6673 10.6663C10.6056 10.7281 10.5324 10.7772 10.4517 10.8106C10.3711 10.8441 10.2846 10.8613 10.1973 10.8613C10.11 10.8613 10.0235 10.8441 9.9429 10.8106C9.86225 10.7772 9.78899 10.7281 9.72732 10.6663L7.53398 8.47301C7.47099 8.41126 7.42088 8.33763 7.38655 8.25638C7.35222 8.17513 7.33435 8.08788 7.33398 7.99967V5.33301C7.33398 4.96634 7.63398 4.66634 8.00065 4.66634C8.36732 4.66634 8.66732 4.96634 8.66732 5.33301V7.72634L10.6673 9.72634C10.9273 9.98634 10.9273 10.4063 10.6673 10.6663Z'
                    fill='white'
                  />
                </svg>
              </Center>
              <Text
                fontWeight={'600'}
                pt='0.3rem'
                fontSize={{ base: 'sm', md: 'sm' }}
              >
                Available from 8am - 6pm
              </Text>
            </ListItem>
          </UnorderedList>
          <Button
            as='a'
            href='https://lu.ma/clockworknyc'
            target={'_blank'}
            pt={'12px'}
            fontWeight='600'
          >
            Register {'->'}
          </Button>
        </VStack>
      )}
      <Center
        zIndex={'-1'}
        w={{ base: '85vw', md: '27rem' }}
        height={{ base: '300px' }}
        position='absolute'
      >
        <Image src={'/on-chain.png'} height={400} width={555} alt='belgrade' />
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
        padding: '5px',
        background:
          BrowserName() === 'firefox'
            ? ''
            : 'linear-gradient(130deg,rgba(230, 55, 195, 0.5), rgba(214, 38, 177, 1),  rgba(249, 252, 127, 1))',
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
          fontSize={{ base: 'xl', md: '2xl' }}
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
            padding: '5px',
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
            <Text fontWeight={'700'} fontSize='lg'>
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
                  Exploring Solana to enhance your gameplay
              </Text>
            </ListItem>
            <ListItem gap='0.5rem' display={'flex'} flexDir='row'>
              <Center>
                  <svg fill="#000000" width="16px" height="16px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.313 26.102l-6.296-3.488c2.34-1.841 2.976-5.459 2.976-7.488v-4.223c0-2.796-3.715-5.91-7.447-5.91-3.73 0-7.544 3.114-7.544 5.91v4.223c0 1.845 0.78 5.576 3.144 7.472l-6.458 3.503s-1.688 0.752-1.688 1.689v2.534c0 0.933 0.757 1.689 1.688 1.689h21.625c0.931 0 1.688-0.757 1.688-1.689v-2.534c0-0.994-1.689-1.689-1.689-1.689zM23.001 30.015h-21.001v-1.788c0.143-0.105 0.344-0.226 0.502-0.298 0.047-0.021 0.094-0.044 0.139-0.070l6.459-3.503c0.589-0.32 0.979-0.912 1.039-1.579s-0.219-1.32-0.741-1.739c-1.677-1.345-2.396-4.322-2.396-5.911v-4.223c0-1.437 2.708-3.91 5.544-3.91 2.889 0 5.447 2.44 5.447 3.91v4.223c0 1.566-0.486 4.557-2.212 5.915-0.528 0.416-0.813 1.070-0.757 1.739s0.446 1.267 1.035 1.589l6.296 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.809zM30.312 21.123l-6.39-3.488c2.34-1.841 3.070-5.459 3.070-7.488v-4.223c0-2.796-3.808-5.941-7.54-5.941-2.425 0-4.904 1.319-6.347 3.007 0.823 0.051 1.73 0.052 2.514 0.302 1.054-0.821 2.386-1.308 3.833-1.308 2.889 0 5.54 2.47 5.54 3.941v4.223c0 1.566-0.58 4.557-2.305 5.915-0.529 0.416-0.813 1.070-0.757 1.739 0.056 0.67 0.445 1.267 1.035 1.589l6.39 3.488c0.055 0.030 0.126 0.063 0.184 0.089 0.148 0.063 0.329 0.167 0.462 0.259v1.779h-4.037c0.61 0.46 0.794 1.118 1.031 2h3.319c0.931 0 1.688-0.757 1.688-1.689v-2.503c-0.001-0.995-1.689-1.691-1.689-1.691z" fill='white'></path>
                  </svg>
              </Center>
              <Text
                fontWeight={'600'}
                pt='0.3rem'
                fontSize={{ base: 'sm', md: 'sm' }}
              >
                Voted by the community
              </Text>
            </ListItem>
          </UnorderedList>
          <Button
            as='a'
            href='https://workspace.metacamp.so/'
            target={'_blank'}
            pt={'12px'}
            fontWeight='600'
          >
              Rules and requirements {'->'}
          </Button>
        </VStack>
      )}
      <Center
        zIndex={'-1'}
        w={{ base: '85vw', md: '27rem' }}
        height={{ base: '300px' }}
        position='absolute'
      >
        <Image src={'/integrated.png'} height={400} width={555} alt='belgrade' />
      </Center>
    </Center>
  );
};

export { SolanaIntegratedCard, FullyOnChainCard };
