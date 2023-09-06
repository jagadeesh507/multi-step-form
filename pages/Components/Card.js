import React from 'react'
import { Flex,Box, useColorModeValue, Button,Input,chakra, Heading, Switch} from '@chakra-ui/react';
import Personalinfo from './Personalinfo';
import Step1Schema from '../Validations/Step1valid';
import Step3Schema from '../Validations/Step3valid';
import Step2Schema from '../Validations/Step2Valid';
import { Formik,Form,validationSchema} from 'formik';
import Educationalinfo from './Educationalinfo';
import Completeinfo from './Completeinfo';
import ExprienceAndcertification from './ExprienceAndcertification';
import { useState } from 'react';
import {InitialValues} from "./InitalValues"
function Card() {
  const [step,setStep]=useState(1);
  const nextStep = async() => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };
    const backgroundImage=useColorModeValue("url('/images/lightmode.png')","url('/images/Darkmode.jpg')");
    const handleSubmit = (values) => {
      console.log(values);
    }
    let validation
    switch(step){
      case 1:validation=Step1Schema
      break;
      case 2:validation=Step2Schema
      break;
      case 3:validation=Step3Schema
      break;
    }
  return (

<Flex
    maxW={"2xl"}
    mx="auto"
    h={"auto"}
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
      <Formik
      initialValues={InitialValues}
      validationSchema={validation}
      
      onSubmit={handleSubmit}
    >
        <Form>
          {step===1&&<Personalinfo/>}
          {step===2&& <Educationalinfo/>}
          {step===3&& <ExprienceAndcertification/>}
          {step===4&& <Completeinfo/>}

          <Flex alignItems={"center"} justifyContent={"space-between"} mt={"20px"}>
          <Button type="button" onClick={previousStep} colorScheme='red' isDisabled={step===1}>
            Go Back
          </Button>
          {step===4?<Button type="submit" colorScheme='green'>
            Submit
          </Button>:<Button type="button" onClick={nextStep} colorScheme='blue'>
            Next
          </Button>}
          </Flex>
        </Form>

    </Formik>
    </Box>
  </Flex>

  )
}

export default Card