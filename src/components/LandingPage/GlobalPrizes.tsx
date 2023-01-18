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
              Name: 'LamportDAO Global Prize',
              Sponsor: ['Eclipse'],
              PrizeWorth: 2000,
              PrizeUnit: 'USDC',
              PrizeDetails: [
                'Judges Favorite: $1,500',
                'Most Popular: $500'
              ],
              AboutUs:
                'Eclipse offers customizable rollups-as-a-service using the Solana virtual machine. This means you can spin up your own Cosmos chain and pick (1) the bytecode (SVM, EVM, soon Move), (2) the base layer (Celestia, Solana, Polygon, EigenLayer, NEAR), and (3) additional customizations for your execution layer. With your own Eclipse rollup, you can increase value capture for your application by adding MEV auctions, charging gas in your native token, subsidizing governance participation and more.',
              Description:
                'Sponsored by Eclipse, LamportDAO is awarding a Judge\'s Favorite and Most Popular prize to hackathon participants. These prizes are global and can be won alongside a specific track. Judges’ Favorites will be determined by voting among all the Judges. Most Popular will be determined by Reacts/Votes left on your Discord submission. May the best teams win!',
              Ideas: [''],
              Requirements:
                "Only open-sourced Github repos will be considered for Judges’ Favorite! Make sure you OS!",
              Links: [
                {
                  Title: 'Twitter',
                  Link: 'https://twitter.com/LamportDAO',
                },
                {
                  Title: 'Discord',
                  Link: 'https://sandstormhackathon.com/discord',
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
              Name: 'LamportDAO Global Prize',
              Sponsor: ['Eclipse'],
              PrizeWorth: 2000,
              PrizeUnit: 'USDC',
              PrizeDetails: [
                'Judges Favorite: $1,500',
                'Most Popular: $500'
              ],
              AboutUs:
                'Eclipse offers customizable rollups-as-a-service using the Solana virtual machine. This means you can spin up your own Cosmos chain and pick (1) the bytecode (SVM, EVM, soon Move), (2) the base layer (Celestia, Solana, Polygon, EigenLayer, NEAR), and (3) additional customizations for your execution layer. With your own Eclipse rollup, you can increase value capture for your application by adding MEV auctions, charging gas in your native token, subsidizing governance participation and more.',
              Description:
                'Sponsored by Eclipse, LamportDAO is awarding a Judge\'s Favorite and Most Popular prize to hackathon participants. These prizes are global and can be won alongside a specific track. Judges’ Favorites will be determined by voting among all the Judges. Most Popular will be determined by Reacts/Votes left on your Discord submission. May the best teams win!',
              Ideas: [''],
              Requirements:
                "Only open-sourced Github repos will be considered for Judges’ Favorite! Make sure you OS!",
              Links: [
                {
                  Title: 'Twitter',
                  Link: 'https://twitter.com/LamportDAO',
                },
                {
                  Title: 'Discord',
                  Link: 'https://sandstormhackathon.com/discord',
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