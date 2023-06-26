import {
  Button,
  Heading,
  HStack,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Inktrap } from '../FontFamily';
import { faqType } from '../../../interfaces/faq';
import { FiExternalLink } from 'react-icons/fi';
import Sponsor from './Sponsor';

type PropsType = {
  faq?: faqType;
};

const CardMobile = ({ faq }: PropsType) => {
  const [clicked, setClicked] = useState(false);
  return (
    <WrapItem
      onClick={() => {
        setClicked(!clicked);
      }}
    >
      <VStack
        overflow='hidden'
        w={{ base: '85vw', sm: '90vw', md: '38rem' }}
        alignItems={'start'}
        background={'rgba(88, 82, 139, 0.2)'}
        sx={{
          backdropFilter: 'blur(14px)',
          margin: '0px !important',
          marginTop: '0px !important',
        }}
        borderRadius={'1.2rem'}
        p='1.6rem'
        m='0px !important'
      >
        <Heading
          fontWeight={'700'}
          fontSize={{ base: '14px', md: '18px' }}
          noOfLines={1}
        >
          {faq ? faq?.Question : 'Hello World'}
        </Heading>
        {/*{clicked ? (*/}
        {/*  ''*/}
        {/*) : (*/}
        {/*  <Text*/}
        {/*    fontSize={{ base: 'xs', md: 'sm' }}*/}
        {/*    pt={'1.4rem'}*/}
        {/*    fontWeight='300'*/}
        {/*    opacity='0.8'*/}
        {/*    noOfLines={2}*/}
        {/*  >*/}
        {/*    {faq*/}
        {/*      ? faq?.Answer*/}
        {/*      : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}*/}
        {/*  </Text>*/}
        {/*)}*/}
        {clicked && (
          <VStack
            maxW={'full'}
            alignItems={'start'}
            p='2.5rem 0rem 0.2rem 0rem'
            rounded='2xl'
          >
            <VStack pt={'0rem'} fontSize='xl' alignItems={'start'}>

              <Text
                fontFamily={Inktrap.style.fontFamily}
                fontSize={{ base: 'sm', md: 'md' }}
                pt='0.4rem'
              >
                {faq
                  ? faq?.Answer
                  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}
              </Text>
              <Wrap py='0.2rem'>
                {faq?.Links?.map((link, index) => (
                  <WrapItem key={index}>
                    <Button
                      as='a'
                      href={link.Link}
                      target={'_blank'}
                      fontFamily={Inktrap.style.fontFamily}
                      backdropFilter='blur(10px)'
                      backgroundColor='rgba(255, 255, 255, 0.10)'
                      rounded={'full'}
                      p='0.35rem 1rem 0rem 1rem'
                      color='white'
                      fontSize={{ base: 'xs', md: 'sm' }}
                      rightIcon={
                        <FiExternalLink
                          style={{
                            transform: 'translateY(-4px)',
                            width: '12px',
                          }}
                        />
                      }
                    >
                      {link.Title}
                    </Button>
                  </WrapItem>
                ))}
              </Wrap>
            </VStack>
          </VStack>
        )}
      </VStack>
    </WrapItem>
  );
};

export default CardMobile;
