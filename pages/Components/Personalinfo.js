import React from "react";
import {
  FormControl,
  Input,
  FormLabel,
  chakra,
  Textarea,
  Heading,
} from "@chakra-ui/react";
import { Field, ErrorMessage,useFormikContext } from "formik";
function Personalinfo() {
  const {values}=useFormikContext();
  return (
    <chakra.div gap={12}>
      <Heading>Personal Info</Heading>
      <FormControl>
        <FormLabel>First name</FormLabel>
        <Field type="text" name="fname" as={Input} value={values.fname} />
        <ErrorMessage name="fname" />
      </FormControl>
      <FormControl>
        <FormLabel>Last name</FormLabel>
        <Field ype="text" name="lname" as={Input}  />
        <ErrorMessage className="text-red-500" name="lname" />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Field ype="text" name="email" as={Input} />
        <ErrorMessage name="email" />
      </FormControl>
      <FormControl>
        <FormLabel>Phone no</FormLabel>
        <Field ype="number" name="phone" as={Input} />
        <ErrorMessage name="phone" />
      </FormControl>
      <FormControl>
        <FormLabel>Address</FormLabel>
        <Field type="textarea" name="address" as={Textarea} />
        <ErrorMessage name="address" />
      </FormControl>
      
    </chakra.div>
  );
}

export default Personalinfo;
