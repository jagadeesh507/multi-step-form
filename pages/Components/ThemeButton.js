import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import { BsMoon} from "react-icons/bs";
import {BiSun} from "react-icons/bi"
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
          <BsMoon fontSize={"24px"}/>
        ) : (
          <BiSun _hover={{color:"red.700"}} fontSize={"30px"} />
        )}
      </Button>
    </Box>
  );
}

export default ThemeButton;
