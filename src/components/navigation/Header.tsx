import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
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
      p='2rem'
    >
      <Box as='button' fontSize={'5xl'} onClick={() => router.push('/')}>
        <Logo />
      </Box>
      <Button
        pt='0.8rem'
        display={'flex'}
        alignItems='start'
        fontSize={{ base: '14px', md: '18px' }}
      >
        Register {'->'}
      </Button>
    </Flex>
  );
}
