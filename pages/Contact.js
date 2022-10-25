import { Box, Button, Container, FormControl, FormLabel, Heading, Input, useColorModeValue } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { FiSend } from 'react-icons/fi'

const Contact = () => {
  return (
    <>
    <Head>
      <title>
      Aditya Shinde-Contact
      </title>
    </Head>
    <Container align='center' my='10'>
      <Heading>Contact</Heading>
      <Box my='10'>
        <FormControl isRequired>
          <FormLabel > Your Name</FormLabel>
          <Input placeholder='Your Name ' borderColor={useColorModeValue('#E3CEBF' , 'white')}/>
        </FormControl>
        <FormControl isRequired my='2'>
          <FormLabel > Email Address</FormLabel>
          <Input placeholder='Email Address'  borderColor={useColorModeValue('#E3CEBF' , 'white')}/>
        </FormControl>
        <FormControl isRequired>
          <FormLabel >Message</FormLabel>
          <Input placeholder='Your Message Here' height='10rem'  borderColor={useColorModeValue('#E3CEBF' , 'white')}/>
        </FormControl>

        <Button my='4' leftIcon={<FiSend/>} bg={useColorModeValue('#E3CEBF' , '#4E4E4E')}> Send   </Button>
      </Box>
    </Container>
    </>
  )
}

export default Contact
