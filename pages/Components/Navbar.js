import React from 'react'
import {FaSun,FaMoon} from 'react-icons/fa' 
import { HamburgerIcon } from '@chakra-ui/icons'
import {Flex, IconButton, useColorMode,Heading,Stack, Box, Menu,useColorModeValue, MenuButton, MenuList, MenuItem, Container} from '@chakra-ui/react'
import Link from 'next/dist/client/link'

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode=== "dark"

  return (
    
      <Box w="100%"
      as="nav"
      bg={useColorModeValue('#E3CEBF' , 'rgb(30,30,30)')}
       >
        <Flex width="100%" color = "white" p = {1} > 
        <Box>
        <Heading letterSpacing='tighter' fontSize='28' color={useColorModeValue('black','white')}><Link href="./">Aditya Shinde</Link> </Heading></Box>
       
        <Stack direction={{base:'column' , md :'row'}}
        display={{base:'none', md:'flex'}} 
        width={{base: 'full', md:'auto'}}
        alignItems="center"
        justifyContent="space-between"
        color={useColorModeValue('black','white')}
        mx="4"
        fontWeight='bold'>
        <Link href="./About">  About </Link>
        <Link href="./Recent"> Projects </Link>
        <Link href="./Contact"> Contact </Link>
        </Stack>
        <Box>
          <Container align='right'>
        <IconButton icon={isDark ? <FaSun/> : <FaMoon/>} bg={useColorModeValue('gray' , 'white')} color='cyan' borderRadius="6" onClick={toggleColorMode} mx="2"/>
        <Box display={{base: 'inline-block', md:'none'}} >
        <Menu >
        <MenuButton as={IconButton}  icon={<HamburgerIcon/>} aria-label='Menu' mx="2" bg={useColorModeValue('#F4EAE2' , '#454545')} color={useColorModeValue('black','white')}> 
        </MenuButton>
        <MenuList color={useColorModeValue('black','white')} bg={useColorModeValue('#E3CEBF', 'rgb(30,30,30)')}>
          <MenuItem><Link href="./About"> About </Link> </MenuItem>
          <MenuItem><Link href="./Recent"> Projects </Link> </MenuItem>
          <MenuItem><Link href="./Contact"> Contact </Link> </MenuItem>
        </MenuList>
       </Menu>
      
       </Box>
       </Container>
       </Box>
    </Flex>
    </Box>
    
  )
}

export default Navbar
