import { Center, Stack, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import CardDesktop from './CardDesktop';
import CardMobile from './CardMobile';
import PrizePool from './PrizePoll';
import PrizePoolHead from "./PrizePollHead";

const TotalPrize = ({
    totalPoolPrize,
}: {
  activeTrackHandler: any;
  totalPoolPrize: number;
}) => {
  const [isMobile] = useMediaQuery('(max-width: 480px)');
  return (
    <Stack
      overflow='hidden'
      alignItems={'stretch'}
      gap={{ base: '0.1rem', md: '1rem' }}
      justify='space-between'
      flexDir={{ base: 'column', lg: 'row' }}
    >
      <PrizePoolHead totalPoolPrize={totalPoolPrize} />
      <Stack
        direction={{ base: 'column', sm: 'row', lg: 'column' }}
        gap={{ base: '0.1rem', md: '0.5rem' }}
        justify='center'
        alignItems={{ base: 'center', sm: 'center', md: 'stretch' }}
      >
      </Stack>
    </Stack>
  );
};

export default TotalPrize;
