import {
  FormControl,
  FormLabel,
  Heading,
  chakra,
  Input,
 Textarea,
 File
} from "@chakra-ui/react";
import { ErrorMessage, Field } from "formik";
import React from "react";

function ExprienceAndcertification() {
  return (
    <chakra.div>
      <Heading>Experience</Heading>
      <FormControl>
        <FormLabel>Name of the Company</FormLabel>
        <Field as={Input} name="companyname" type="text" />
        <ErrorMessage name="companyname"/>
      </FormControl>
      <FormControl>
        <FormLabel>Job Title</FormLabel>
        <Field as={Input} name="jobtitile" type="text" />
        <ErrorMessage name="jobtitile"/>
      </FormControl>
      <FormControl>
        <FormLabel>Job Discription</FormLabel>
        <Field as={Textarea} name="jobdiscription" type="text" />
        <ErrorMessage name="jobdiscription"/>
      </FormControl>
      <FormControl>
        <FormLabel>Experience in Years</FormLabel>
       <Field as={Input} name="experience" type="number" />
       <ErrorMessage name="experience"/>
      </FormControl>
    <FormControl>
        <FormLabel>Experience Certificate </FormLabel>
        <Field as={File} name="certificationCourses" type="File"/>
    </FormControl>
    </chakra.div>
  );
}

export default ExprienceAndcertification;
