import React from 'react'
import {auth,googleProvider} from "../auth/firebaseconfig";
import { signInWithPopup } from 'firebase/auth';
import { Flex,Button } from '@chakra-ui/react';
import { useRouter } from "next/router";

function SignIn() {
    const router = useRouter();
    const signInWithGoogle = async () => {
        try {
        const res=await signInWithPopup(auth,googleProvider);
        router.push("/main/UiCard");
        } catch (err){
          console.error(err);
        }
      };
  return (
    <Flex>
        <Button onClick={signInWithGoogle} px={"20px"}>Login</Button>
    </Flex>
  )
}

export default SignIn