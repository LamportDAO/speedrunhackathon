import { ReactNode } from 'react';
import { Box, Flex, Link, Button, Center } from '@chakra-ui/react';
import { Router, useRouter } from 'next/router';
import Logo from '../assets/logo/Logo';
import { BiRightArrowAlt } from 'react-icons/bi';
export default function Header() {
  const router = useRouter();

  return (
    <Flex
      mx='auto'
      maxW='8xl'
      alignItems={'center'}
      justifyContent={'space-between'}
      p={{ base: '1.5rem', sm: '2rem', md: '2rem' }}
    >
      <Center
        h='full'
        as='button'
        fontSize={'5xl'}
        onClick={() => router.push('/')}
      >
        <Logo />
      </Center>
      <Button
        as='a'
        href='https://sandstormhackathon.com/discord'
        target={'_blank'}
        pt={{ base: '0.7rem', md: '0.8rem' }}
        display={'flex'}
        alignItems='start'
        height={{ base: '2.2rem', md: '2.5rem' }}
        fontSize={{ base: '14px', md: '18px' }}
      >
        Join Discord
      </Button>
    </Flex>
  );
}
