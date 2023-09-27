import { Box, Center, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import SignOut from '../auth/SignOut'
function Form5() {
  
  return (
   <Center>
     <Flex justifyContent={"center"} alignItems={"center"} h={"60vh"} direction={"column"} gap={4} fontFamily={"monospace"} fontSize={"sm"}>
            <img className='rounded-full align-center' src='/images/icon-thank-you.svg'/>
            <Heading textAlign={"center"}>Thank you!</Heading>
            <p>Thanks for conforming your subscription! We hope you have fun using our platform. if you ever need support,</p>
            <p> please feel free to email us at</p>
            <p>support@loremgaming.com.</p>
            <SignOut/>
    </Flex>
   </Center>
  )
}

export default Form5