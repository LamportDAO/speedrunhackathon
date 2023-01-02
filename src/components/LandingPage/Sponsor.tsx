import React from 'react';
import {
  Helius,
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
} from '../assets/sponsors/icons';
const Sponsor = ({ sponsorName: sponserName }: { sponsorName: String }) => {
  switch (sponserName) {
    case 'Solana Foundation':
      return <SolanaFoundation />;
    case 'Solana University':
      return <SolanaU />;
    case 'OtterSec':
      return <OtterSec />;
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
      return <Chainflow/>;
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
    case 'Dialect':
      return <Dialect />;
    case 'Crossmint':
      return <CrossMint />;
    case 'Phantom':
      return <Phantom />;
    case 'Poolprops':
      return <Poolprops />;
    case 'Lamport DAO':
      return <LamportDAO />
    default:
      return <></>;
  }
};

export default Sponsor;