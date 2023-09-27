import React from 'react'
import {auth} from "../auth/firebaseconfig"
import { signOut } from 'firebase/auth';
import { Button, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import {userdata} from "./Store/authstore"
function SignOut() {
  const router = new useRouter();
  
  const setUser =userdata((state)=>state.setUser)

  const logOut=async ()=>{
    
    await signOut(auth).then(() => {
          console.log("Signed out successfully");
          setUser(null)
         router.push("/")
      }).catch((error) => {
      console.log(error)
      });
  }
  return (
    <Flex>
        <Button onClick={logOut}>Logout</Button>
    </Flex>
  )
}

export default SignOut