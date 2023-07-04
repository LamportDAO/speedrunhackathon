import { Heading, HStack, Text, VStack, WrapItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { trackType } from '../../../interfaces/track';
import { BrowserName } from '../../broswerName';
import {Joystix} from "../FontFamily";

function kFormatter(num: number): any {
  return Math.abs(num) > 999
    ? // @ts-ignore
      (Number(Math.sign(num)) as any) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
}
const CardDesktop = ({
  activeTrackHandler,
  track,
}: {
  activeTrackHandler: (track: trackType | undefined) => void;
  track?: trackType;
}) => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [glarePosition, setGlarePosition] = useState({
    x: -150,
    y: -150,
  });

  const handleMouseMove = (event: {
    preventDefault: () => void;
    nativeEvent: { offsetX: any; offsetY: any };
  }) => {
    event.preventDefault();
    setGlarePosition({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
    });
  };

  useEffect(() => {}, []);

  return (
    <WrapItem
      onClick={() => {
        activeTrackHandler(track);
      }}
    >
      <VStack
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onMouseOutCapture={() => {
          setGlarePosition({
            x: -150,
            y: -150,
          });
        }}
        cursor={'pointer'}
        overflow='hidden'
        onMouseMove={handleMouseMove}
        _before={{
          content: `" "`,
          position: 'absolute',
          top: `${glarePosition.y}px`,
          left: `${glarePosition.x}px`,
          transform: 'translate(-2rem, -2rem)',
          overflow: 'hidden',
          width: '5rem',
          height: '5rem',
          filter: 'blur(70px)',
          backgroundColor: 'rgba(173, 166, 240, 0.9);',
        }}
        _after={{
          content: `" "`,
          position: 'absolute',
          inset: BrowserName() === 'safari' ? 'none' : '0',
          borderRadius: '1.2rem',
          padding: '4px',
          background: hover
            ? `${
                BrowserName() === 'firefox'
                  ? ''
                  : 'linear-gradient(130deg,rgba(230, 55, 195, 0.5), rgba(214, 38, 177, 1),  rgba(249, 252, 127, 1))'
              }`
            : '',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          MaskComposite: 'exclude',
        }}
        w={{ base: '85vw', sm: '38vw', md: '18rem' }}
        alignItems={'start'}
        background={'rgba(88, 82, 139, 0.2)'}
        sx={{
          backdropFilter: 'blur(14px)',
          margin: '0px !important',
          marginTop: '0px !important',
        }}
        borderRadius={'1.2rem'}
        p='1.5rem'
        m='0px !important'
      >
        <Heading
          fontWeight={'700'}
          fontSize={{ base: '14px', md: '18px' }}
          fontFamily={Joystix.style.fontFamily}
          noOfLines={1}
          textAlign='center'
        >
          {track ? track?.Name : ''}
        </Heading>
        <HStack alignItems={'flex-end'} justifyContent={'space-between'} textAlign='center' alignContent='center'>
          <Heading
            bgGradient={
              'linear-gradient(247.98deg, #E637C3 -8.03%, #D626B1 37.2%, #FAFC7F 109.33%)'
            }
            bgClip={'text'}
            fontSize={{ base: '2xl', sm: '3xl', md: '5xl' }}
            fontWeight='700'
            fontFamily={Joystix.style.fontFamily}
          >
            {track?.PrizeUnit === 'BONK'
              ? track?.PrizeWorth + 'B'
              : track?.PrizeWorth
              ? `${kFormatter(track.PrizeWorth)}`
              : 'USDC'}
          </Heading>
          <Text
            pb={{ base: '0.1rem', md: '0.3rem' }}
            fontSize={{ base: '1rem', md: '2rem' }}
            fontWeight={'600'}
            pl="1rem"
            fontFamily={Joystix.style.fontFamily}
            alignItems='center'
            textAlign='center'
          >
            {track ? track?.PrizeUnit : 'USDC'}
          </Text>
        </HStack>
        {/* <Text
          fontSize={{ base: 'xs', md: 'sm' }}
          pt={'1.7rem'}
          fontWeight='300'
          opacity='0.8'
          noOfLines={2}
        >
          {track
            ? track?.Description
            : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
        </Text> */}
      </VStack>
    </WrapItem>
  );
};

export default CardDesktop;
