import React, { useEffect, useState } from "react";
import { Box, Flex, Button, Spacer } from "@chakra-ui/react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Form1 from "@/components/forms/Form1";
import Form2 from "@/components/forms/Form2";
import Form3 from "@/components/forms/Form3";
import Form4 from "@/components/forms/Form4";
import Form5 from "@/components/forms/Form5";
import FormStepper from "./FormStepper";
import {dataStore} from "../../components/Store/datastore"
import { auth } from "@/components/auth/firebaseconfig";
import { useRouter } from "next/router";

function UiCard() {
  const router = new useRouter();
  const {userdata, state, nextStep, prevStep } = dataStore();
 const handlePrev = () => {
  prevStep(); 
};

const handleNext = (values) => {
  nextStep(); 
};
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/");
    });
  });

  return (
    <div className="static">
      <Flex
        maxW={"3xl"}
        mx="auto"
        h={{ base: "auto", md: "560px" }}
        flexDirection={{ base: "column", md: "row" }}
        bg="white"
        _dark={{
          bg: "gray.900",
        }}
        mt={{base:"0px",md:"40px"}}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Box
          w={{ base: "100%", md: "350px" }}
          h={{ base: "300px", md: "auto" }}
          bgSize="cover"
          bgRepeat={"no-repeat"}
          bgImg={{base:"url(/images/mobileview.png)",md:"url(/images/lightmode.png)"}}
          style={{
           
            backgroundPosition: "top center",
          }}
          rounded={{base:"sm",md:""}}
          shadow="lg"
          m={{md: "20px" }}
        >
          <FormStepper/>
        </Box>

        <Box
          w={{ base: "90vw%", md: "2xl" }}
          h={{base:"540px"}}
          p={{ base: "40px", md: "40px" }}
          pos="relative"
          mt={{ base: "-120px", md: "0" }}
          borderRadius={{ base: "20px", md: "0" }}
          bg="white"

          boxShadow={{base:"dark-lg", md: "sm" }}
          mx={{ base: "10px", md: "0" }}
        
        >
          <Box base={{ h: "full" }}>
         
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required("Name is required"),
                email: Yup.string()
                  .email("Invalid email")
                  .required("Email is required"),
                phone: Yup.string()
                  .matches(/^[0-9]{10}$/, "Exactly 10 digits allowed")
                  .required("Phone number is required"),
              })}
              onSubmit={(values) => handleNext()}
            >
              <Form>
                {state === 1 && <Form1 />}
                {state === 2 && <Form2 />}
                {state === 3 && <Form3 />}
                {state === 4 && <Form4 />}
                {state === 5 && <Form5 />}
                {state === 5 ? null : (
        <Flex
          justifyContent={"space-between"}
          direction={"row"}
          pos={{ base: "fixed", md: "absolute" }}
          bottom="0"
          p={{base:"10px"}}
          w={{ base: "full", md: "md" }}
          pr={{md:"40px"}}
          ml={{base:"-50px",md:"0px"}}
          bgColor={{base:"gray.100",md:"white"}}
          rounded={"md"}
         
        >
          <Button variant={"unstyled"} onClick={handlePrev}isDisabled={state===1}>
            Go Back
          </Button>
          <Button
            type="submit"
            color={"white"}
            backgroundColor={"darkblue"}
            _hover={"darkblue"}
          >
            {state < 4 ? "Next Step" : "Confirm"}
          </Button>
        </Flex>
      )}
              </Form>
            </Formik>
          </Box>
        </Box>
      </Flex>


    </div>
  );
}

export default UiCard;
