import { Center, Stack, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import CardDesktop from './CardDesktop';
import CardMobile from './CardMobile';
import PrizePool from './PrizePoll';

const GlobalPrizes = ({
  activeTrackHandler,
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
      <PrizePool totalPoolPrize={totalPoolPrize} />
      <Stack
        direction={{ base: 'column', sm: 'row', lg: 'column' }}
        gap={{ base: '0.1rem', md: '0.5rem' }}
        justify='center'
        alignItems={{ base: 'center', sm: 'center', md: 'stretch' }}
      >
        {isMobile ? (
          <CardMobile
            track={{
              Name: '1st prize',
              Sponsor: [],
              PrizeWorth: 15,
              PrizeUnit: 'BONK',
              PrizeDetails: [
                '1st place: 15B Bonk',
                '2nd place: 5B Bonk',
                '3rd place: 3B Bonk',
                '4th place: 1B Bonk',
                '5th place: 1B Bonk',
              ],
              Description:
                '1st Prize will be 15B BONK and Bonk Prize will also be distributed to different projects decided by the judges',
              Ideas: [],
              Judges: [
                {
                  Name: 'BONK team',
                  Twitter: '',
                },
              ],
            }}
          />
        ) : (
          <CardDesktop
            activeTrackHandler={activeTrackHandler}
            track={{
              Name: '1st prize',
              Sponsor: [],
              PrizeWorth: 15,
              PrizeUnit: 'BONK',
              PrizeDetails: [
                '1st place: 15B Bonk',
                '2nd place: 5B Bonk',
                '3rd place: 3B Bonk',
                '4th place: 1B Bonk',
                '5th place: 1B Bonk',
              ],
              Description:
                '1st Prize will be 15B BONK and Bonk Prize will also be distributed to different projects decided by the judges',
              Ideas: [],
              Judges: [
                {
                  Name: 'BONK team',
                  Twitter: '',
                },
              ],
            }}
          />
        )}
        {isMobile ? (
          <CardMobile
            track={{
              Name: '2nd prize',
              Sponsor: [],
              PrizeWorth: 5,
              PrizeUnit: 'BONK',
              PrizeDetails: [
                '1st place: 15B Bonk',
                '2nd place: 5B Bonk',
                '3rd place: 3B Bonk',
                '4th place: 1B Bonk',
                '5th place: 1B Bonk',
              ],
              Description:
                '2nd Prize will be 5B BONK and Bonk Prize will also be distributed to different projects decided by the judges',
              Ideas: [],
              Judges: [
                {
                  Name: 'BONK team',
                  Twitter: '',
                },
              ],
            }}
          />
        ) : (
          <Center
            display={{
              base: 'flex',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
            }}
          >
            <CardDesktop
              activeTrackHandler={activeTrackHandler}
              track={{
                Name: '2nd prize',
                Sponsor: [],
                PrizeWorth: 5,
                PrizeUnit: 'BONK',
                PrizeDetails: [
                  '1st place: 15B Bonk',
                  '2nd place: 5B Bonk',
                  '3rd place: 3B Bonk',
                  '4th place: 1B Bonk',
                  '5th place: 1B Bonk',
                ],
                Description:
                  '2nd Prize will be 5B BONK and Bonk Prize will also be distributed to different projects decided by the judges',
                Ideas: [],
                Judges: [
                  {
                    Name: 'BONK team',
                    Twitter: '',
                  },
                ],
              }}
            />
          </Center>
        )}
        {isMobile ? (
          <CardMobile
            track={{
              Name: '3rd prize',
              Sponsor: [],
              PrizeWorth: 3,
              PrizeUnit: 'BONK',
              PrizeDetails: [
                '1st place: 15B Bonk',
                '2nd place: 5B Bonk',
                '3rd place: 3B Bonk',
                '4th place: 1B Bonk',
                '5th place: 1B Bonk',
              ],
              Description:
                '3rd Prize will be 3B BONK and Bonk Prize will also be distributed to different projects decided by the judges',
              Ideas: [],
              Judges: [
                {
                  Name: 'BONK team',
                  Twitter: '',
                },
              ],
            }}
          />
        ) : (
          <CardDesktop
            activeTrackHandler={activeTrackHandler}
            track={{
              Name: '3rd prize',
              Sponsor: [],
              PrizeWorth: 3,
              PrizeUnit: 'BONK',
              PrizeDetails: [
                '1st place: 15B Bonk',
                '2nd place: 5B Bonk',
                '3rd place: 3B Bonk',
                '4th place: 1B Bonk',
                '5th place: 1B Bonk',
              ],
              Description:
                '3rd Prize will be 3B BONK and Bonk Prize will also be distributed to different projects decided by the judges',
              Ideas: [],
              Judges: [
                {
                  Name: 'BONK team',
                  Twitter: '',
                },
              ],
            }}
          />
        )}
      </Stack>
    </Stack>
  );
};

export default GlobalPrizes;
