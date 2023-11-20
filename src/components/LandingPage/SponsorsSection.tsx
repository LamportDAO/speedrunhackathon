import {Container, Heading, Wrap, WrapItem} from '@chakra-ui/react';
import React from 'react';
import {Inktrap, Pixel} from '../FontFamily';
import Sponsor from './Sponsor';

const sponsorNames = [
    'Phantom',
    'MetaCamp',
    'Lamport DAO',
    'Magicblock',
    'Solana Foundation',
];
const SponsorsSection = () => {
    return (
        <Container
            p='0'
            maxW='6xl'
            display={'flex'}
            flexDirection='column'
            justifyContent={'center'}
            alignItems='center'
        >
            <Heading
                bgGradient={`linear-gradient(30deg, #D273D9 -8.03%, #D273D9 37.2%, #404DCF 109.33%)`}
                bgClip={'text'}
                py='2rem'
                fontFamily={Pixel.style.fontFamily}
                mx='auto'
                maxW='fit-content'
                fontSize={{base: '4xl', md: '6xl'}}
                fontWeight='800'
            >
                SPONSORS
            </Heading>
            <Wrap
                spacing={{base: '1.5rem', md: '3rem'}}
                justify={'center'}
                alignItems='center'
            >
                {sponsorNames.map((sponsorName, key) => (
                    <WrapItem
                        display={'flex'}
                        alignItems='center'
                        justifyContent={'center'}
                        key={key}
                    >
                        <Sponsor sponsorName={sponsorName}/>
                    </WrapItem>
                ))}
            </Wrap>
        </Container>
    );
};

export default SponsorsSection;
