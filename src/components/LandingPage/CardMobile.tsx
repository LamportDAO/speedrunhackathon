import {
  Button,
  Heading,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {Inktrap, Pixel} from '../FontFamily';
import { trackType } from '../../../interfaces/track';
import { FiExternalLink } from 'react-icons/fi';
import Sponsor from './Sponsor';

type PropsType = {
  track?: trackType;
};

const CardMobile = ({ track }: PropsType) => {
  const [clicked, setClicked] = useState(false);
  return (
    <WrapItem
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      <VStack
        overflow='hidden'
        w={{ base: '85vw', sm: '38vw', md: '18rem' }}
        alignItems={'start'}
        background={'rgba(88, 82, 139, 0.2)'}
        sx={{
          backdropFilter: 'blur(14px)',
          margin: '0px !important',
          marginTop: '0px !important',
        }}
        borderRadius={'1.2rem'}
        p='1.6rem'
        m='0px !important'
      >
        <Heading
          fontWeight={'700'}
          fontSize={{ base: '14px', md: '18px' }}
          noOfLines={1}
          fontFamily={Pixel.style.fontFamily}
        >
          {track ? track?.Name : 'Hello World'}
        </Heading>
        <HStack alignItems={'flex-end'} justifyContent={'space-between'}>
          <Heading
            bgGradient={
              'linear-gradient(247.98deg, #E637C3 -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)'
            }
            bgClip={'text'}
            fontSize={{ base: '3xl', sm: '3xl', md: '5xl' }}
            fontWeight='700'
            fontFamily={Pixel.style.fontFamily}
          >
            {track
              ? `${track?.PrizeUnit === 'BONK'? 
                    track?.PrizeWorth + 'B' :
                    track?.PrizeUnit === 'BLZE' || track?.PrizeUnit === 'RAIN' ?
                    (track?.PrizeWorth + 'm') :
                    track?.PrizeWorth
                    ? `${track.PrizeWorth}`
                    : 'TBA'}`
              : '00k'}
          </Heading>
          <Text
            pb={{ base: '0.1rem', md: '0.3rem' }}
            fontSize={{ base: '1rem', md: '2rem' }}
            pl="1rem"
            fontWeight={'600'}
            fontFamily={Pixel.style.fontFamily}
            textAlign='left'
            alignContent='left'
          >
            {track ? track?.PrizeUnit : 'USDC'}
          </Text>
        </HStack>
        {/*{clicked ? (*/}
        {/*  ''*/}
        {/*) : (*/}
        {/*  <Text*/}
        {/*    fontSize={{ base: 'xs', md: 'sm' }}*/}
        {/*    pt={'1.4rem'}*/}
        {/*    fontWeight='300'*/}
        {/*    opacity='0.8'*/}
        {/*    noOfLines={2}*/}
        {/*  >*/}
        {/*    {track*/}
        {/*      ? track?.Description*/}
        {/*      : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}*/}
        {/*  </Text>*/}
        {/*)}*/}
        {clicked && (
          <VStack
            maxW={'full'}
            alignItems={'start'}
            p='1rem 0rem 2rem 0rem'
            rounded='2xl'
          >
            <VStack pt={'0rem'} fontSize='xl' alignItems={'start'}>
              {track?.Sponsor! ? (
                <HStack gap='1rem' flexWrap={'wrap'}>
                  {track.Sponsor?.map((sponsor, index) => (
                    <Sponsor sponsorName={sponsor} key={index} />
                  ))}
                </HStack>
              ) : (
                ''
              )}
              <Text
                fontFamily={Pixel.style.fontFamily}
                fontSize={{ base: 'sm', md: 'md' }}
                alignSelf="left"
                pt='1rem'
              >
                {track
                  ? track?.Description
                  : ''}
              </Text>
              {track?.PrizeDetails?.length! && (
                <>
                  <Text
                    fontFamily={Inktrap.style.fontFamily}
                    pt='1.4rem'
                    fontWeight={'700'}
                    fontSize={{ base: 'md', md: 'lg' }}
                  >
                    Prizes
                  </Text>
                  <UnorderedList
                    fontFamily={Inktrap.style.fontFamily}
                    fontSize={{ base: 'sm', md: 'md' }}
                    pl='1.5rem'
                  >
                    {track?.PrizeDetails?.map((prizeDetail, index) => (
                      <ListItem maxW='100vw' key={index}>
                        {prizeDetail}
                      </ListItem>
                    ))}
                  </UnorderedList>
                </>
              )}
              {track?.Ideas![0] && (
                <>
                  <Text
                    pt='1rem'
                    fontFamily={Inktrap.style.fontFamily}
                    fontWeight={'700'}
                    fontSize={{ base: 'md', md: 'lg' }}
                  >
                    Ideas
                  </Text>
                  <UnorderedList
                    fontFamily={Inktrap.style.fontFamily}
                    fontSize={{ base: 'sm', md: 'md' }}
                    pl='1.5rem'
                  >
                    {track.Ideas?.map((idea, index) => (
                      <ListItem key={index}>{idea}</ListItem>
                    ))}
                  </UnorderedList>
                </>
              )}
              {/*<VStack alignItems='start'>*/}
              {/*  <Text*/}
              {/*    pt='1rem'*/}
              {/*    fontFamily={Inktrap.style.fontFamily}*/}
              {/*    fontWeight={'700'}*/}
              {/*    fontSize={{ base: 'md', md: 'lg' }}*/}
              {/*  >*/}
              {/*    Requirements*/}
              {/*  </Text>*/}
              {/*  <Text*/}
              {/*    fontFamily={Inktrap.style.fontFamily}*/}
              {/*    fontSize={{ base: 'sm', md: 'md' }}*/}
              {/*    pl='1.5rem'*/}
              {/*  >*/}
              {/*    {track?.Requirements}*/}
              {/*  </Text>*/}
              {/*</VStack>*/}
              {/*<VStack alignItems='start'>*/}
              {/*  <Text*/}
              {/*    fontFamily={Inktrap.style.fontFamily}*/}
              {/*    pt='1.4rem'*/}
              {/*    fontWeight={'700'}*/}
              {/*    fontSize={{ base: 'md', md: 'lg' }}*/}
              {/*  >*/}
              {/*    Judges*/}
              {/*  </Text>*/}
              {/*  <UnorderedList*/}
              {/*    fontFamily={Inktrap.style.fontFamily}*/}
              {/*    fontSize={{ base: 'sm', md: 'md' }}*/}
              {/*    pl='1.5rem'*/}
              {/*  >*/}
              {/*    {track?.Judges?.map((Judge, index) => (*/}
              {/*      <ListItem maxW='100vw' key={index}>*/}
              {/*        {Judge.Name}*/}
              {/*      </ListItem>*/}
              {/*    ))}*/}
              {/*  </UnorderedList>*/}
              {/*</VStack>*/}
              <Wrap py='1rem'>
                {track?.Links?.map((link, index) => (
                  <WrapItem key={index}>
                    <Button
                      as='a'
                      href={link.Link}
                      target={'_blank'}
                      fontFamily={Inktrap.style.fontFamily}
                      backdropFilter='blur(10px)'
                      backgroundColor='rgba(255, 255, 255, 0.10)'
                      rounded={'full'}
                      p='0.35rem 1rem 0rem 1rem'
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
                      {link.Title}
                    </Button>
                  </WrapItem>
                ))}
              </Wrap>
            </VStack>
          </VStack>
        )}
      </VStack>
    </WrapItem>
  );
};

export default CardMobile;
