import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import Fonts from "./Components/Fonts"

import Navbar from "./Components/Navbar"

import theme from "./Components/theme"

function MyApp({ Component, pageProps }) {
 

  return<ChakraProvider theme={theme}> 
    <ColorModeScript/>
    <Fonts/>
    <Navbar/>
    <Component {...pageProps} />
    
   
    </ChakraProvider> 
}

export default MyApp
