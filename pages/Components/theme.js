import {extendTheme} from '@chakra-ui/react'
import { mode} from '@chakra-ui/theme-tools'

const styles ={
    global:props => ({
        body:{
            bg: mode('#F4EAE2', '#242323')(props)
        }
    })
}

const theme = extendTheme({ styles})
export default theme