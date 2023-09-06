import React from "react";
import {
  FormControl,
  Input,
  FormLabel,
  chakra,
  Heading,
  HStack,
  Select,
} from "@chakra-ui/react";
import { Field, ErrorMessage,useFormikContext } from "formik";
function Educationalinfo() {
  const {values}=useFormikContext();
  return (
    <chakra.div>
      <Heading as={"h6"}>Education details</Heading>
      <FormControl>
        <FormLabel>Secondary Education School Name</FormLabel>
        <Field type="text" name="schoolname" as={Input} />
        <ErrorMessage name="schoolname" />
      </FormControl>
      <HStack>
        <chakra.div>
          <FormControl>
            <FormLabel>CGPA</FormLabel>
            <Field type="number" name="schoolcgpa" as={Input} />
            <ErrorMessage name="schoolcgpa" />{" "}
          </FormControl>
        </chakra.div>
        <chakra.div>
          <FormControl>
            <FormLabel>Year of passing</FormLabel>
            <Field type="date" name="schoolpassyear" as={Input} />
            <ErrorMessage name="schoolpassyear" />{" "}
          </FormControl>
        </chakra.div>
      </HStack>
      <FormControl>
        <FormLabel>Recent Degree</FormLabel>
        <Field as={Select} name="Degree">
          <option value={''}>Choose one</option>
         <option value={"Bachelor's Degree 11111"}>Bachelor's Degree</option>
         <option value={"postGraduate"}>Masters</option>
         <option value={"Doctorate"}>Doctorate</option>
        </Field>
        <ErrorMessage name="Degree"/>
      </FormControl>
   {console.log(values.Degree)}
    {values.Degree&& 
    <chakra.div>
      <FormControl>
        <FormLabel>Course</FormLabel>
        <Field type="text" name="course" as={Input} />
        <ErrorMessage name="course"/>
      </FormControl>
      <FormControl>
        <FormLabel>Branch</FormLabel>
        <Field type="text" name="branch" as={Input} />
        <ErrorMessage name="branch"/>
      </FormControl>
      <FormControl>
        <FormLabel>CGPA</FormLabel>
        <Field type="number" name="degreecgpa" as={Input} />
        <ErrorMessage name="degreecgpa"/>
      </FormControl>
      <FormControl>
        <FormLabel>Year of passing</FormLabel>
        <Field as={Input} name="degreepassyear" type="Date"/>
        <ErrorMessage name="degreepassyear"/>
      </FormControl>
    </chakra.div>}
    </chakra.div>
  );
}

export default Educationalinfo;
