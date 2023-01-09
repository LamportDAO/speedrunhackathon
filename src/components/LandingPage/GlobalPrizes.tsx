import { Card, Center, Stack, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { trackType } from '../../../interfaces/track';
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
              Name: 'Student Prize ',
              Sponsor: ['Solana University'],
              PrizeWorth: 1000,
              PrizeUnit: 'USDC',
              PrizeDetails: [
                '2023 Breakpoint Tickets to the top student team',
                'Support from the Solana U Developer Relations Team.',
              ],
              AboutUs:
                'Solana U is a global community of curious coders and creatives that are dedicated to providing accessible blockchain education to all. As part of our mission, we strive to foster an exciting and interactive learning environment while providing resources and opportunities for students and educators to succeed in Web3. We welcome all individuals to join our diverse network and build with us on Solana.',
              Description:
                'Solana U is a global community of curious coders and creatives that are dedicated to providing accessible blockchain education to all. As part of our mission, we strive to foster an exciting and interactive learning environment while providing resources and opportunities for students and educators to succeed in Web3. We welcome all individuals to join our diverse network and build with us on Solana.',
              Ideas: [''],
              Requirements:
                "All members must be enrolled in University or Academic Institution. The project must be original and created within the hackathon time standards.\nWe will analyze all the student's projects individually using the following criteria:\n1. Originality: How original is the hack's concept?\n2.  Technology difficulty: How technically challenging was it to implement the hack?\n3.  Utility: How useful is the hack in everyday life? What kind of impact could it have and what additional value could it bring to the industry?\n4.  User Experience: Is the hack easy to use? Is the interface well-designed?\n5.  Market Fit:  Does the hack address a need or problem in the market? Is it likely to be successful in terms of adoption and usage?\n6.  Completion: Is the hack fully functional and complete? Did the team accomplish all of its goals?",
              Links: [
                {
                  Title: 'Discord',
                  Link: 'https://discord.com/invite/solanau',
                },
                {
                  Title: 'Website',
                  Link: 'https://www.solanau.org/',
                },
                {
                  Title: 'Twitter',
                  Link: 'https://twitter.com/SolanaUni',
                },
              ],
              Judges: [
                {
                  Name: 'Cleon',
                  Twitter: '',
                },
                {
                  Name: 'Dana Degenius',
                  Twitter: '',
                },
                {
                  Name: 'DonnySolana',
                  Twitter: '',
                },
                {
                  Name: 'Joe',
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
                Name: 'Student Prize ',
                Sponsor: ['Solana University'],
                PrizeWorth: 1000,
                PrizeUnit: 'USDC',
                PrizeDetails: [
                  '2023 Breakpoint Tickets to the top student team',
                  'Support from the Solana U Developer Relations Team.',
                ],
                AboutUs:
                  'Solana U is a global community of curious coders and creatives that are dedicated to providing accessible blockchain education to all. As part of our mission, we strive to foster an exciting and interactive learning environment while providing resources and opportunities for students and educators to succeed in Web3. We welcome all individuals to join our diverse network and build with us on Solana.',
                Description:
                  'Solana U is a global community of curious coders and creatives that are dedicated to providing accessible blockchain education to all. As part of our mission, we strive to foster an exciting and interactive learning environment while providing resources and opportunities for students and educators to succeed in Web3. We welcome all individuals to join our diverse network and build with us on Solana.',
                Ideas: [''],
                Requirements:
                  "All members must be enrolled in University or Academic Institution. The project must be original and created within the hackathon time standards.\nWe will analyze all the student's projects individually using the following criteria:\n1. Originality: How original is the hack's concept?\n2.  Technology difficulty: How technically challenging was it to implement the hack?\n3.  Utility: How useful is the hack in everyday life? What kind of impact could it have and what additional value could it bring to the industry?\n4.  User Experience: Is the hack easy to use? Is the interface well-designed?\n5.  Market Fit:  Does the hack address a need or problem in the market? Is it likely to be successful in terms of adoption and usage?\n6.  Completion: Is the hack fully functional and complete? Did the team accomplish all of its goals?",
                Links: [
                  {
                    Title: 'Discord',
                    Link: 'https://discord.com/invite/solanau',
                  },
                  {
                    Title: 'Website',
                    Link: 'https://www.solanau.org/',
                  },
                  {
                    Title: 'Twitter',
                    Link: 'https://twitter.com/SolanaUni',
                  },
                ],
                Judges: [
                  {
                    Name: 'Cleon',
                    Twitter: '',
                  },
                  {
                    Name: 'Dana Degenius',
                    Twitter: '',
                  },
                  {
                    Name: 'DonnySolana',
                    Twitter: '',
                  },
                  {
                    Name: 'Joe',
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
              Name: 'LamportDAO Prize',
              Sponsor: ['Eclipse', 'Light Protocol'],
              PrizeWorth: 4000,
              PrizeUnit: 'USDC',
              PrizeDetails: ['Judges Favorite: $1,500', 'Most Popular: $500'],
              AboutUs:
                'Eclipse offers customizable rollups-as-a-service using the Solana virtual machine. This means you can spin up your own Cosmos chain and pick (1) the bytecode (SVM, EVM, soon Move), (2) the base layer (Celestia, Solana, Polygon, EigenLayer, NEAR), and (3) additional customizations for your execution layer. With your own Eclipse rollup, you can increase value capture for your application by adding MEV auctions, charging gas in your native token, subsidizing governance participation and more. ',
              Description:
                "Sponsored by Eclipse, LamportDAO is awarding a Judge's Favorite and Most Popular prize to hackathon participants. These prizes are global and can be won alongside a specific track. Judges’ Favorites will be determined by voting among all the Judges. Most Popular will be determined by Reacts/Votes left on your Discord submission. May the best teams win!",
              Ideas: [
                'You can just tag the track in the submission of your project for other tracks!',
              ],
              Requirements:
                'Only open-sourced Github repos will be considered for Judges’ Favorite! Make sure you OS! ',
              Links: [
                {
                  Title: 'Twitter',
                  Link: 'https://twitter.com/LamportDAO',
                },
                {
                  Title: 'Discord',
                  Link: 'https://discord.gg/ShC7NRE7G5',
                },
              ],
              Judges: [
                {
                  Name: 'All Judges will be voting',
                  Twitter: '',
                },
              ],
            }}
          />
        ) : (
          <CardDesktop
            activeTrackHandler={activeTrackHandler}
            track={{
              Name: 'LamportDAO Prize',
              Sponsor: ['Eclipse', 'Light Protocol'],
              PrizeWorth: 4000,
              PrizeUnit: 'USDC',
              PrizeDetails: ['Judges Favorite: $1,500', 'Most Popular: $500'],
              AboutUs:
                'Eclipse offers customizable rollups-as-a-service using the Solana virtual machine. This means you can spin up your own Cosmos chain and pick (1) the bytecode (SVM, EVM, soon Move), (2) the base layer (Celestia, Solana, Polygon, EigenLayer, NEAR), and (3) additional customizations for your execution layer. With your own Eclipse rollup, you can increase value capture for your application by adding MEV auctions, charging gas in your native token, subsidizing governance participation and more. ',
              Description:
                "Sponsored by Eclipse, LamportDAO is awarding a Judge's Favorite and Most Popular prize to hackathon participants. These prizes are global and can be won alongside a specific track. Judges’ Favorites will be determined by voting among all the Judges. Most Popular will be determined by Reacts/Votes left on your Discord submission. May the best teams win!",
              Ideas: [
                'You can just tag the track in the submission of your project for other tracks!',
              ],
              Requirements:
                'Only open-sourced Github repos will be considered for Judges’ Favorite! Make sure you OS! ',
              Links: [
                {
                  Title: 'Twitter',
                  Link: 'https://twitter.com/LamportDAO',
                },
                {
                  Title: 'Discord',
                  Link: 'https://discord.gg/ShC7NRE7G5',
                },
              ],
              Judges: [
                {
                  Name: 'All Judges will be voting',
                  Twitter: '',
                },
              ],
            }}
          />
        )}
        {isMobile ? (
          <CardMobile
            track={{
              Name: 'Superteam Prize',
              Sponsor: ['Superteam'],
              PrizeWorth: 2000,
              PrizeUnit: 'USDC',
              PrizeDetails: [
                'Most Scalable and Useful Public Good: 2,000 USDC',
              ],
              AboutUs:
                'Superteam is a global network of developers, operators, and grantees working on promising Solana projects.',
              Description:
                'As part of the LamportDAO Sandstorm Hackathon, Superteam is sponsoring a global track for Public Goods. These are protocols that exist on Solana without intention to collect fees and allow other protocols and users benefit from additional features on Solana for free. Public goods provide the foundation for collaborative innovation and will be essential for Solana’s long term success. Examples of Public Goods include openbookdex, which collects no fees through it’s CLOB matching engine, and Anchor, a free framework for Solana development. Any other projects or protocols which generate substantial value for the Solana ecosystem without asking for fees in return will be eligible for this prize.',
              Ideas: [
                'Developer tools.',
                'Protocols that provide public benefit without requiring fees in exchange.',
                'This is a global prize and every hackathon submission is automatically enrolled into this prize.',
              ],
              Requirements:
                'Have no intentions of collecting protocol fees/rent. This prize will only be given to open-sourced repos. Bonus points for program immutability/roadmap to program immutability. ',
              Links: [
                {
                  Title: 'Twitter',
                  Link: 'https://twitter.com/SuperteamDAO',
                },
              ],
              Judges: [
                {
                  Name: 'Kash Dhanda, Sherpa, Superteam',
                  Twitter: 'https://twitter.com/kashdhanda',
                },
                {
                  Name: 'Soju, Core, LamportDAO',
                  Twitter: 'https://twitter.com/0xSoju',
                },
                {
                  Name: 'Mert, Core, LamportDAO',
                  Twitter: 'https://twitter.com/0xMert_',
                },
              ],
            }}
          />
        ) : (
          <CardDesktop
            activeTrackHandler={activeTrackHandler}
            track={{
              Name: 'Superteam Prize',
              Sponsor: ['Superteam'],
              PrizeWorth: 2000,
              PrizeUnit: 'USDC',
              PrizeDetails: [
                'Most Scalable and Useful Public Good: 2,000 USDC',
              ],
              AboutUs:
                'Superteam is a global network of developers, operators, and grantees working on promising Solana projects.',
              Description:
                'As part of the LamportDAO Sandstorm Hackathon, Superteam is sponsoring a global track for Public Goods. These are protocols that exist on Solana without intention to collect fees and allow other protocols and users benefit from additional features on Solana for free. Public goods provide the foundation for collaborative innovation and will be essential for Solana’s long term success. Examples of Public Goods include openbookdex, which collects no fees through it’s CLOB matching engine, and Anchor, a free framework for Solana development. Any other projects or protocols which generate substantial value for the Solana ecosystem without asking for fees in return will be eligible for this prize.',
              Ideas: [
                'Developer tools.',
                'Protocols that provide public benefit without requiring fees in exchange.',
                'This is a global prize and every hackathon submission is automatically enrolled into this prize.',
              ],
              Requirements:
                'Have no intentions of collecting protocol fees/rent. This prize will only be given to open-sourced repos. Bonus points for program immutability/roadmap to program immutability. ',
              Links: [
                {
                  Title: 'Twitter',
                  Link: 'https://twitter.com/SuperteamDAO',
                },
              ],
              Judges: [
                {
                  Name: 'Kash Dhanda, Sherpa, Superteam',
                  Twitter: 'https://twitter.com/kashdhanda',
                },
                {
                  Name: 'Soju, Core, LamportDAO',
                  Twitter: 'https://twitter.com/0xSoju',
                },
                {
                  Name: 'Mert, Core, LamportDAO',
                  Twitter: 'https://twitter.com/0xMert_',
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
