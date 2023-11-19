import {
    Button,
    Center,
    Heading,
    Wrap, WrapItem,
} from '@chakra-ui/react';
import React, {useState} from 'react';
import {Inktrap, Pixel} from '../FontFamily';
import {FiExternalLink} from "react-icons/fi";
import Image from "next/image";

const Resources = () => {

    return (
        <>
            <Center flexDirection={'column'} maxW={'4xl'} py='4rem'>
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
                    Resources
                </Heading>
                <Wrap
                    w='100%'
                    maxW='100vw'
                    py={{base: '0.5rem', md: '1rem'}}
                    p='2rem'
                    spacing={{base: '0.5rem', md: '1rem'}}
                    direction={'column'}
                    margin={'auto'}
                    justify={'center'}
                    fontSize={{base: '2xl', md: '2xl'}}
                    alignItems='center'
                    fontFamily={Pixel.style.fontFamily}
                    textAlign='center'
                >
                    <p>Speedrun your game development journey <br/>
                        <Button
                            as='a'
                            href='https://github.com/magicblock-labs/solana-gaming-resources'
                            target={'_blank'}
                            fontFamily={Inktrap.style.fontFamily}
                            backdropFilter='blur(10px)'
                            backgroundColor='rgba(255, 255, 255, 0.10)'
                            rounded={'full'}
                            p='0.35rem 1rem 0rem 1rem'
                            mt='2rem'
                            color='white'
                            fontSize={{base: 'xs', md: 'sm'}}
                            rightIcon={
                                <FiExternalLink
                                    style={{
                                        transform: 'translateY(-4px)',
                                        width: '12px',
                                    }}
                                />
                            }
                        >
                            Resources
                        </Button>
                    </p>
                </Wrap>
                <Center mt={{base: '4rem', md: '6rem'}} h={{ base: '3rem', md: '4rem' }} w={{ base: '12rem', md: '20rem' }}>
                    <Image src='/keyboard.png' alt='speedrun' width={800} height={800} />
                </Center>
            </Center>
        </>
    );
};

export default Resources;
