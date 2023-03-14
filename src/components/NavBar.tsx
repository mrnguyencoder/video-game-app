import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/iconnguyencoder.png'
import ColorSwitch from './ColorSwitch'

export const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='2rem'>
        <Image src={logo} boxSize='3rem'/>
        <ColorSwitch/>
    </HStack>
  )
}
