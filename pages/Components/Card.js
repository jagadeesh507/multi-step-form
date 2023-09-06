import React from 'react'
import { Flex,Box, useColorModeValue, Button,Input,chakra, Heading} from '@chakra-ui/react';


function Card() {
    const backgroundImage=useColorModeValue("url('/images/lightmode.png')","url('/images/Darkmode.jpg')")
  return (

<Flex
    maxW={"xl"}
    mx="auto"
    h={"auto"}
    flexDirection={{ base: "column", md: "row" }}
    bg="white"
    _dark={{
      bg: "gray.800",
    }}
    mt={"40px"}
    shadow="lg"
    rounded="lg"
    overflow="hidden"
  
  >
    <Box
      w={{base:"100%",md:"400px"}}
      h={{ base: "150px", md: "auto" }}
      bgSize="cover"
      style={{
        backgroundImage:backgroundImage,
        backgroundPosition: "top center",
      }}
      rounded={"lg"}
      shadow="lg"
      m={{md:"20px"}}
      
    ></Box>

    <Box
      w="100%" 
      p={"40px"}
    >
     <Heading as="h6">Personal Info</Heading>
     <chakra.label>First Name</chakra.label>
     <Input type="text"  placeholder='e.g Jagadeesh' />
     <chakra.label>Last Name</chakra.label>
     <Input type="text"  placeholder='e.g Maripi'/>
     <chakra.label>Email</chakra.label>
     <Input type="email" placeholder='e.g example@gmail.com' />
     <chakra.label>Password</chakra.label>
     <Input type="password"  placeholder='******' />
     <chakra.label>Phone No</chakra.label>
     <Input type="number"  placeholder='+91 9381272780'/>
      <Flex mt={3} alignItems="center" justifyContent="space-between" >
        <Button colorScheme='blue'>Prev</Button>
        <Button colorScheme='blue'>Next</Button>
      </Flex>
    </Box>
  </Flex>

  )
}

export default Card