import {
    Flex,
    chakra,
    FormControl,
    FormLabel,
    Heading,
    Input,
  } from "@chakra-ui/react";
  import { ErrorMessage, Field } from "formik";
  import React from "react";
 
  function form1() {

    const formData=[
      {
          label:"Name",
          type:"name",
          name:"name",
          placeholder:"eg. Jhon Doe"
      },
      {
          label:"Email Address",
          type:"email",
          name:"email",
          placeholder:"eg. example@example.com"
      },
      {
          label:"Phone Number",
          type:"number",
          name:"phone",
          placeholder:"eg. 123456890"
      }
  ]
    return (
      <Flex direction={"column"} fontFamily={"monospace"}>
<Heading as={"h3"} paddingBottom={"20px"} color={"darkblue"}>Personal Info</Heading>
        <chakra.p color={"gray.400"} fontSize={"md"}>please provide your name,email address and phone number</chakra.p>
         <FormControl>
          {
            
            formData.map((value,index)=>(
              <chakra.div key={index} color={"darkblue"} >
                <div className="flex flex-row justify-between pt-[12px]">
                <FormLabel fontWeight={"bold"}>{value.label}</FormLabel>
                <div className="text-red-700 font-bold">
                <ErrorMessage name={value.name}/>
                </div>
               </div>
               <Field as={Input} type={value.type} name={value.name} placeholder={value.placeholder} />
              </chakra.div>
            ))
          }
         </FormControl>
       </Flex>
    );
  }
  
  export default form1;
  