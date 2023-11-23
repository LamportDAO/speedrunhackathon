import {Container, Heading, Stack} from '@chakra-ui/react';
import {Pixel} from '../FontFamily';
import React from 'react';
import {NewYorkCard, BelgradeCard, SingaporeCard, SF} from './ImageCard';

const Locations = () => {
    return (
        <Container py={{base:'5rem', md:"6rem"}} maxW='7xl'>
            <Heading
                bgGradient={`linear-gradient(30deg, #D273D9 -8.03%, #D273D9 37.2%, #404DCF 109.33%)`}
                bgClip={'text'}
                fontFamily={Pixel.style.fontFamily}
                mx='auto'
                maxW='fit-content'
                py='2rem'
                fontSize={{ base: '4xl', md: '6xl' }}
                fontWeight='800'
            >
                GAME JAM IRL
            </Heading>
            <Stack
                maxW='4xl'
                mx='auto'
                flexWrap={'wrap'}
                alignItems={'center'}
                //  gap={{ base: '0.2rem', md: '1rem' }}
                justify='center'
                gap='1.5rem'
                spacing='0'
                flexDir={{base: 'column', lg: 'row'}}
            >
                <SingaporeCard/>
            </Stack>
        </Container>
    );
};

export default Locations;
