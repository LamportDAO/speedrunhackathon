import {
  Center,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
  List,
  ListItem,
  UnorderedList,
  WrapItem,
  Wrap,
  Button,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { Inktrap } from '../FontFamily';
import { trackType } from '../../../interfaces/track';
import Sponsor from './Sponsor';
import { FiExternalLink } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';

const TracksModalBody = ({
  track,
  onClose,
}: {
  track: trackType;
  onClose: any;
}) => {
  console.log('ideas - ', track.Ideas?.length);
  return (
    <VStack
      maxW={'full'}
      alignItems={'start'}
      p='2.5rem 2rem 2rem 2rem'
      rounded='2xl'
    >
      <HStack w='100%' justifyContent={'space-between'} alignItems='center'>
        <Heading
          pt='0.5rem'
          fontFamily={Inktrap.style.fontFamily}
          fontSize={'26px'}
        >
          {track ? track?.Name : 'Hello World'}
        </Heading>
        <IconButton
          onClick={() => {
            onClose();
          }}
          cursor='pointer'
          _hover={{
            transition: 'all 0.5s',
            transform: 'rotate(90deg)',
          }}
          transition='all 0.5s'
          variant={'unstyled'}
          width='1.4rem'
          height='1.4rem'
          as={RxCross1}
          aria-label={'cancel'}
        />
      </HStack>
      <HStack
        pt='1rem'
        gap={'1rem'}
        alignItems={'end'}
        justifyContent={'space-between'}
      >
        <Heading
          bgGradient={
            'linear-gradient(247.98deg, #E637C3 -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)'
          }
          fontFamily={Inktrap.style.fontFamily}
          bgClip={'text'}
          lineHeight={'70px'}
          fontSize={'52px'}
          fontWeight='700'
        >
          {track ? track?.PrizeWorth : '00k'}
        </Heading>
        <Text fontSize={'18px'} pb='0.8rem' fontWeight={'600'}>
          {track ? track?.PizeUnit : 'USDC'}
        </Text>
      </HStack>

      <VStack pt={'3rem'} fontSize='xl' alignItems={'start'}>
        {track.Sponsor! ? (
          <HStack gap='1rem'>
            {track.Sponsor?.map((sponsor, index) => (
              <Sponsor sponsorName={sponsor} key={index} />
            ))}
          </HStack>
        ) : (
          ''
        )}
        <Text fontFamily={Inktrap.style.fontFamily} fontSize='md'>
          {track
            ? track?.Description
            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
        </Text>
        {track.PrizeDetails?.length! && (
          <>
            <Text
              fontFamily={Inktrap.style.fontFamily}
              pt='1.4rem'
              fontWeight={'700'}
            >
              Prizes
            </Text>
            <UnorderedList
              fontFamily={Inktrap.style.fontFamily}
              fontSize='md'
              pl='1.5rem'
            >
              {track.PrizeDetails?.map((prizeDetail, index) => (
                <ListItem key={index}>{prizeDetail}</ListItem>
              ))}
            </UnorderedList>
          </>
        )}
        {track.Ideas![0] && (
          <>
            <Text
              pt='1rem'
              fontFamily={Inktrap.style.fontFamily}
              fontWeight={'700'}
            >
              Ideas
            </Text>
            <UnorderedList
              fontFamily={Inktrap.style.fontFamily}
              fontSize='md'
              pl='1.5rem'
            >
              {track.Ideas?.map((idea, index) => (
                <ListItem key={index}>{idea}</ListItem>
              ))}
            </UnorderedList>
          </>
        )}
        <Wrap py='1rem'>
          <WrapItem>
            <Button
              as='a'
              target={'_blank'}
              fontFamily={Inktrap.style.fontFamily}
              backdropFilter='blur(10px)'
              backgroundColor='rgba(255, 255, 255, 0.10)'
              rounded={'full'}
              p='0.35rem 1rem 0rem 1rem'
              color='white'
              fontSize={'sm'}
              rightIcon={
                <FiExternalLink
                  style={{ transform: 'translateY(-4px)', width: '12px' }}
                />
              }
            >
              Docs
            </Button>
          </WrapItem>
          <WrapItem>
            <Button
              as='a'
              target={'_blank'}
              fontFamily={Inktrap.style.fontFamily}
              backdropFilter='blur(10px)'
              backgroundColor='rgba(255, 255, 255, 0.10)'
              rounded={'full'}
              p='0.35rem 1rem 0rem 1rem'
              color='white'
              fontSize={'sm'}
              rightIcon={
                <FiExternalLink
                  style={{ transform: 'translateY(-4px)', width: '12px' }}
                />
              }
            >
              Website
            </Button>
          </WrapItem>
        </Wrap>
      </VStack>
    </VStack>
  );
};
export default TracksModalBody;
