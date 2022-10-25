import React from 'react'
import Head from 'next/dist/shared/lib/head'
import { Box, Container, Grid, GridItem, Heading, Image, Kbd, useColorModeValue } from "@chakra-ui/react"

const Recent = () => {
  return (
    <>
    <Head>
    <title>
      Aditya Shinde-Projects 
    </title>
    </Head>
    <Container  align="center" my='10'>
    <Box>
      <Box>
      <Heading fontSize="40">
      Recent Projects</Heading></Box>
    </Box>

    <Box>
    <Container my="10">
    <Heading fontSize="23" letterSpacing="tighter">
      PortFolio Website using Next.js</Heading>
      <Box>
        My current portfolio Website using Next.js and Chakra-ui</Box>
        <Grid my="1">
          <GridItem><Kbd bg={useColorModeValue('#E3CEBF')} >Stack</Kbd> : Next.js, Chakra-ui</GridItem>
          <GridItem><Kbd bg={useColorModeValue('#E3CEBF')}>Source</Kbd> : </GridItem></Grid> 
    </Container>

      <Container my="10">
        <Heading fontSize="23" letterSpacing="tighter">
          Weather App using React.
        </Heading>
        <Box>
          A simple Weather App using React and Bootstrap. Open Weather API is used to fetch the weather details.
          <Grid my="1">
            <GridItem><Kbd bg={useColorModeValue('#E3CEBF')}>Stack</Kbd> : React, Bootstrap</GridItem>
            <GridItem><Kbd bg={useColorModeValue('#E3CEBF')}>Source</Kbd> : </GridItem>
            
          </Grid>
        </Box>
      </Container>
      <Container my="10">
        <Heading fontSize="23" letterSpacing="tighter">
          News App using Next.js
        </Heading>
        <Box>
          A news app made using Next.js and Chakra-ui.
        </Box>
        <Grid my="1">
          <GridItem><Kbd bg={useColorModeValue('#E3CEBF')}>Stack</Kbd> : Next.js, Chakra-Ui</GridItem>
          <GridItem><Kbd bg={useColorModeValue('#E3CEBF')}>Source</Kbd> : </GridItem>
        </Grid>
      </Container>
    </Box>
    </Container>
    </>
  )
}

export default Recent
