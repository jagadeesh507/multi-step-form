import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { FaCloudMoon } from "react-icons/fa";
import { BsCloudSunFill } from "react-icons/bs";
function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box 
      w={"full"}
      h={{ base: "10vh", lg: "12vh" }}
      bg={"black"}
      textAlign={"center"}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={{base:"20px",md:"30px",lg:"50px"}}
    >
      <Heading as={"h2"} fontFamily={"cursive"} color={"white"}>
        Multi step from{" "}
      </Heading>
      <Button onClick={toggleColorMode} color={"white"} variant={"unstyled"}>
        {colorMode === "light" ? (
          <FaCloudMoon fontSize={"30px"} />
        ) : (
          <BsCloudSunFill fontSize={"30px"} />
        )}
      </Button>
    </Box>
  );
}

export default ThemeButton;
