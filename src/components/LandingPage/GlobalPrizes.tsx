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
              Name: 'DeFi Grand Prize',
              Sponsor: ['Solana Foundation', 'Light Protocol'],
              PrizeWorth: 9000,
              PrizeUnit: 'USDC*',
              PrizeDetails: [
                'Grand Prize: $5,000 (sponsored by Solana Foundation) + 1.5B $BONK',
                'Runner-up: $2,000 (sponsored by Light Protocol) + 1B $BONK',
              ],
              AboutUs:
                'Light Protocol is a ZK and Privacy infrastructure layer on Solana. Developers use Light to power a wide range of privacy use cases, such as private NFT minting and privacy-preserving e-commerce checkout.',
              Description:
                'As part of the LamportDAO Sandstorm Hackathon, Light Protocol is holding a special track for dApps that leverage the potential of Solana.  Solana’s high throughput enables unique ideas that are not available on other chains. If you build something that pushes the potential of Solana, this track is for you.',
              Ideas: [
                'Derivatives decentralized exchanges',
                'Orderbooks used for other NFTs or Lending Rates ',
                'Hybrid MMs for Orderbooks',
                'High throughput Payment systems',
              ],
              Requirements:
                'dApp idea has to only work on Solana and not Ethereum. This prize will only be given to open-sourced repos, or projects with a well-laid out plan to open-sourcing.',
              Links: [
                {
                  Title: 'Solana Foundation Twitter',
                  Link: 'https://twitter.com/SolanaFndn',
                },
                {
                  Title: 'Light Protocol Twitter',
                  Link: 'https://twitter.com/LightProtocol',
                },
              ],
              Judges: [
                {
                  Name: 'Swen, Core, Light Protocol',
                  Twitter: '',
                },
                {
                  Name: 'Soju, Core, LamportDAO',
                  Twitter: '',
                },
                {
                  Name: 'Jacob Creech, DevRel, Foundation',
                  Twitter: '',
                },
              ],
            }}
          />
        ) : (
          <CardDesktop
            activeTrackHandler={activeTrackHandler}
            track={{
              Name: 'DeFi Grand Prize',
              Sponsor: ['Solana Foundation', 'Light Protocol'],
              PrizeWorth: 9000,
              PrizeUnit: 'USDC*',
              PrizeDetails: [
                'Grand Prize: $5,000 (sponsored by Solana Foundation) + 1.25B $BONK',
                'Runner-up: $2,000 (sponsored by Light Protocol) + 0.75B $BONK',
              ],
              AboutUs:
                'Light Protocol is a ZK and Privacy infrastructure layer on Solana. Developers use Light to power a wide range of privacy use cases, such as private NFT minting and privacy-preserving e-commerce checkout.',
              Description:
                'As part of the LamportDAO Sandstorm Hackathon, Light Protocol is holding a special track for dApps that leverage the potential of Solana.  Solana’s high throughput enables unique ideas that are not available on other chains. If you build something that pushes the potential of Solana, this track is for you.',
              Ideas: [
                'Derivatives decentralized exchanges',
                'Orderbooks used for other NFTs or Lending Rates ',
                'Hybrid MMs for Orderbooks',
                'High throughput Payment systems',
              ],
              Requirements:
                'dApp idea has to only work on Solana and not Ethereum. This prize will only be given to open-sourced repos, or projects with a well-laid out plan to open-sourcing.',
              Links: [
                {
                  Title: 'Solana Foundation Twitter',
                  Link: 'https://twitter.com/SolanaFndn',
                },
                {
                  Title: 'Light Protocol Twitter',
                  Link: 'https://twitter.com/LightProtocol',
                },
              ],
              Judges: [
                {
                  Name: 'Swen, Core, Light Protocol',
                  Twitter: '',
                },
                {
                  Name: 'Soju, Core, LamportDAO',
                  Twitter: '',
                },
                {
                  Name: 'Jacob Creech, DevRel, Foundation',
                  Twitter: '',
                },
              ],
            }}
          />
        )}
        {isMobile ? (
          <CardMobile
            track={{
              Name: 'Student Prize',
              Sponsor: ['Solana University'],
              PrizeWorth: 5000,
              PrizeUnit: 'USDC',
              PrizeDetails: ['2023 Breakpoint Tickets to the top student team'],
              AboutUs:
                'Solana U is a global community of curious coders and creatives that are dedicated to providing accessible blockchain education to all. As part of our mission, we strive to foster an exciting and interactive learning environment while providing resources and opportunities for students and educators to succeed in Web3. We welcome all individuals to join our diverse network and build with us on Solana.',
              Description:
                'Solana U is a global community of curious coders and creatives that are dedicated to providing accessible blockchain education to all. As part of our mission, we strive to foster an exciting and interactive learning environment while providing resources and opportunities for students and educators to succeed in Web3. We welcome all individuals to join our diverse network and build with us on Solana.',
              Ideas: [''],
              Requirements:
                "All members must be enrolled in University or Academic Institution. The project must be original and created within the hackathon time standards.\nWe will analyze all the student's projects individually using the following criteria:\n1. Originality: How original is the hack's concept?\n2.  Technology difficulty: How technically challenging was it to implement the hack?\n3.  Utility: How useful is the hack in everyday life? What kind of impact could it have and what additional value could it bring to the industry?\n4.  User Experience: Is the hack easy to use? Is the interface well-designed?\n5.  Market Fit:  Does the hack address a need or problem in the market? Is it likely to be successful in terms of adoption and usage?\n6.  Completion: Is the hack fully functional and complete? Did the team accomplish all of its goals?",
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
                Name: 'Student Prize',
                Sponsor: ['Solana University'],
                PrizeWorth: 5000,
                PrizeUnit: 'USDC*',
                PrizeDetails: [
                  '2023 Breakpoint Tickets to the top student team',
                ],
                AboutUs:
                  'Solana U is a global community of curious coders and creatives that are dedicated to providing accessible blockchain education to all. As part of our mission, we strive to foster an exciting and interactive learning environment while providing resources and opportunities for students and educators to succeed in Web3. We welcome all individuals to join our diverse network and build with us on Solana.',
                Description:
                  'Solana U is a global community of curious coders and creatives that are dedicated to providing accessible blockchain education to all. As part of our mission, we strive to foster an exciting and interactive learning environment while providing resources and opportunities for students and educators to succeed in Web3. We welcome all individuals to join our diverse network and build with us on Solana.',
                Ideas: [''],
                Requirements:
                  "All members must be enrolled in University or Academic Institution. The project must be original and created within the hackathon time standards.\nWe will analyze all the student's projects individually using the following criteria:\n1. Originality: How original is the hack's concept?\n2.  Technology difficulty: How technically challenging was it to implement the hack?\n3.  Utility: How useful is the hack in everyday life? What kind of impact could it have and what additional value could it bring to the industry?\n4.  User Experience: Is the hack easy to use? Is the interface well-designed?\n5.  Market Fit:  Does the hack address a need or problem in the market? Is it likely to be successful in terms of adoption and usage?\n6.  Completion: Is the hack fully functional and complete? Did the team accomplish all of its goals?",
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