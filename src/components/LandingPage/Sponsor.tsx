import React from 'react';
import {
  Helius,
  Magicblock,
  SolanaFoundation,
  BridgeSplit,
  Phantom,
  CrossMint,
  OpenBook,
  HXRO,
  Clockwork,
  Bonk,
  FlipSide,
  BetDex,
  Switchboard,
  Unique,
  MonkeDao,
  Spling,
  Elusive,
  Dialect,
  OtterSec,
  Dispatch,
  UnderdogProtocol,
  SolanaU,
  SolBlaze,
  Poolprops,
  ChainCrisis,
  LamportDAO,
  Chainflow,
  Superteam,
  Eclipse,
  Multicoin,
  Frakt,
  Orca,
  Reciprocal,
  Civic,
  LightProtocol,
  Commet,
  VellumCapital,
  Helium,
  Solworks,
  DogeCapital,
  Infinity,
  UnstoppableDomains,
  Sec3,
  CyberSamurai,
  Jito,
  NightMarket,
  Motley,
  Marinade,
  Elixir,
  Gari,
  MetaCamp,
  SolShield,
  Cubik
} from '../assets/sponsors/icons';
const Sponsor = ({ sponsorName: sponserName }: { sponsorName: String }) => {
  switch (sponserName) {
    case 'Solana Foundation':
      return <SolanaFoundation />;
    case 'Solana University':
      return <SolanaU />;
    case 'Magicblock':
      return <Magicblock />;
    case 'Ottersec':
      return <OtterSec />;
    case 'Superteam':
      return <Superteam />;
    case 'Eclipse':
      return <Eclipse />;
    case 'Dispatch':
      return <Dispatch />;
    case 'Flipside':
      return <FlipSide />;
    case 'Openbook':
      return <OpenBook />;
    case 'Bridgesplit':
      return <BridgeSplit />;
    case 'SolBlaze':
      return <SolBlaze />;
    case 'Hxro Network':
      return <HXRO />;
    case 'Clockwork':
      return <Clockwork />;
    case 'Helius':
      return <Helius />;
    case 'ChainFlow':
      return <Chainflow />;
    case 'Phantom':
      return <Phantom />;
    case 'Crossmint':
      return <CrossMint />;
    case 'BetDEX':
      return <BetDex />;
    case 'UniqueVC':
      return <Unique />;
    case 'MonkeVentures':
      return <MonkeDao />;
    case 'Spling Labs':
      return <Spling />;
    case 'Chain Crisis':
      return <ChainCrisis />;
    case 'Elusiv':
      return <Elusive />;
    case 'Underdog Protocol':
      return <UnderdogProtocol />;
    case 'Switchboard':
      return <Switchboard />;
    case 'Bonk':
      return <Bonk />;
    case 'SolShield':
      return <SolShield />;
    case 'Dialect':
      return <Dialect />;
    case 'PoolProps':
      return <Poolprops />;
    case 'Lamport DAO':
      return <LamportDAO />;
    case 'Civic':
      return <Civic />;
    case 'Reciprocal':
      return <Reciprocal />;
    case 'Orca':
      return <Orca />;
    case 'Frakt':
      return <Frakt />;
    case 'Multicoin':
      return <Multicoin />;
    case 'Light Protocol':
      return <LightProtocol />;
    case 'Comet':
      return <Commet />;
    case 'Vellum':
      return <VellumCapital />;
    case 'Helium':
      return <Helium />;
    case 'SolWorks':
      return <Solworks />;
    case 'DogeCapital':
      return <DogeCapital />;
    case 'Infinity':
      return <Infinity />;
    case 'Unstoppable Domains':
      return <UnstoppableDomains />;
    case 'Sec3':
      return <Sec3 />;
    case 'CyberSamurai':
      return <CyberSamurai />;
    case 'Jito':
      return <Jito />;
    case 'NightMarket':
      return <NightMarket />;
    case 'Motley':
      return <Motley />;
    case 'Marinade':
      return <Marinade />;
    case 'Elixir':
      return <Elixir />;
    case 'Gari':
      return <Gari />;
    case 'MetaCamp':
      return <MetaCamp />;
    case 'Cubik':
      return <Cubik />;
    default:
      return <></>;
  }
};

export default Sponsor;
