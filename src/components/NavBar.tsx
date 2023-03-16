import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/iconnguyencoder.png'
import ColorSwitch from './ColorSwitch'
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding='2rem'>
        <Image src={logo} boxSize='3rem'/>
        <SearchInput onSearch={onSearch} />
        <ColorSwitch/>
    </HStack>
  )
}
