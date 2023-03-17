import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/iconnguyencoder.png";
import ColorSwitch from "./ColorSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} height="3rem" />
      <SearchInput onSearch={onSearch} />
      <ColorSwitch />
    </HStack>
  );
};

export default NavBar;
