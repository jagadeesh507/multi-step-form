import React, { useEffect, useState } from "react";
import {Box,Flex,Button, Spacer} from "@chakra-ui/react"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Form, Formik } from "formik";

import Form1 from "@/components/forms/Form1";
import Form2 from "@/components/forms/Form2";
import Form3 from "@/components/forms/Form3";
import Form4 from "@/components/forms/Form4";
import Form5 from "@/components/forms/Form5";

import FormStepper from "./FormStepper";

import { validation1 } from "@/components/validations/FormValidation";

import SignOut from "@/components/auth/SignOut";

import { auth } from "@/components/auth/firebaseconfig";

import { useRouter } from "next/router";

function UiCard() {

const router = new useRouter();
  const [step,setStep]=useState(1);

  const handleNext=()=>{
    setStep(step+1);
  }

  const handlePrev=()=>{
    setStep(step-1);
  }
const handelsubmit=(values)=>{
  console.log(values)
}

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
if(!user) 
router.push("/")
  })
})

  return (
    <div className="static">
    <Flex
      maxW={"3xl"}
      mx="auto"
      h={{base:"auto",md:"560px"}}
      flexDirection={{ base: "column", md: "row" }}
      bg="white"
      _dark={{
        bg: "gray.900",
      }}
      mt={"40px"}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
    >
      <Box
        w={{ base: "100%", md: "350px" }}
        h={{ base: "150px", md: "auto" }}
        bgSize="cover"
        bgRepeat={"no-repeat"}
        style={{
          backgroundImage: "url(/images/lightmode.png)",
          backgroundPosition: "top center",
        }}
        rounded={"lg"}
        shadow="lg"
        m={{ md: "20px" }}
      ><FormStepper Step={step}/></Box>

      <Box  width="100%" p={"40px"} pos="relative" >
     
      <Box
      base={{
          h:"full"
      }}>
      <Formik
       initialValues={{
        name:"",
        email:"",
        phone:"",
        checked:[],
        select:""
       }}
       validationSchema={validation1}
       onSubmit={handelsubmit}
       >
        <Form>
        {step===1&&<Form1/>}
          {step===2&& <Form2/>}
          {step===3&& <Form3/>}
          {step===4&& <Form4/>}
          {step===5&& <Form5/>}
        </Form>
       </Formik>
      </Box>

       {step===5?null:<Flex justifyContent={"space-between"} direction={'row'} alignSelf={"end"} pos="absolute" bottom="4" w="full" pr={"80px"}>
         <Button variant={"unstyled"} onClick={handlePrev}isDisabled={step===1}>Go Back</Button>
         <Button color={"white"} backgroundColor={"darkblue"} _hover={"darkblue"} onClick={handleNext}>{step<4?"Next Step":"Confirm"}</Button>
         </Flex>}
      </Box>
    </Flex>
    </div>
  );
}

export default UiCard;
