import Head from 'next/head';
import { Container, Box,Heading,Button,IconButton, useColorModeValue, Grid, GridItem, Kbd, List, ListItem} from '@chakra-ui/react';
import Link from 'next/link';
import { BsInstagram, BsTwitter, BsLinkedin, BsGithub} from 'react-icons/bs'


export default function Home() {
  return (<>
    <Head>
      <title>
        Aditya Shinde-Homepage
      </title>
    </Head>

    <Container >
      <Box p={3} alignContent="center" justifyContent="center"  display="flex" borderRadius="8" bg={useColorModeValue('#E3CEBF','#4E4E4E')} my="10" fontSize="24">
        Hey I Am a Web-Developer
      </Box>
      <br/>
      <Box display={{ md : 'flex'}}>
          <Box>
            <Heading fontSize='40'>
            Aditya Shinde </Heading>
            
            <kbd>(Tech-Enthusiast/Developer)</kbd>
            
            <Box my='2' fontSize='18' letterSpacing='tighter'>
              Aditya is a Web-Developer who likes to build Web Application. He is currently pursuing Computer Enginnering.
              <br/>
              <Button my='2' mx='2' bg={useColorModeValue('#E3CEBF','#4E4E4E')}><Link href="./Contact" > Contact me</Link></Button>
            </Box>
          </Box>
      </Box>

    <Box my='10'>
        <Heading >
          Find Me on Internet</Heading>
      <Box my='1'  display='inline-flex'>
          <List> 
            <ListItem><Button leftIcon={<BsGithub/>} variant='ghost'>
            GitHub </Button></ListItem>
            <ListItem><Button leftIcon={<BsLinkedin/>} variant='ghost'>
            LinkedIn </Button></ListItem>
            <ListItem><Button leftIcon={<BsTwitter/>} variant='ghost'>
            Twitter </Button></ListItem>
            <ListItem><Button leftIcon={<BsInstagram/>} variant='ghost'>
            Instagram </Button></ListItem>
            </List>
      </Box>
       

    


    
    
    </Box>

    </Container>
    </>

  )
}
