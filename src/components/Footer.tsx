import {Box, Container, Stack, Text} from "@chakra-ui/react";
import {FaLinkedin, FaTwitter} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <Box borderColor={"green.100"} borderStyle={"solid"} borderTopWidth={1}>
      <Container
        align={{md: "center"}}
        as={Stack}
        direction={{base: "column", md: "row"}}
        justify={{md: "space-between"}}
        maxW={"6xl"}
        py={4}
        spacing={4}
      >
        <Text>© 2021 Martin Quintana. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <Box href={"https://twitter.com/mquintana1988"} label={"Twitter"}>
            <FaTwitter />
          </Box>
          <Box href={"#"} label={"YouTube"}>
            <FaLinkedin />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
