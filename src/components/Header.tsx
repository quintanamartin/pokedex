import {Heading} from "@chakra-ui/layout";
import {Center} from "@chakra-ui/react";
import * as React from "react";

const Header: React.FC = () => {
  return (
    <Heading fontWeight={600}>
      <Center>POKEDEX</Center>
    </Heading>
  );
};

export default Header;
