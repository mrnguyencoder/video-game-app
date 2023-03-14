import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/iconnguyencoder.png'

export const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize='3rem'/>
        <Text>NavBar</Text>
    </HStack>
  )
}
