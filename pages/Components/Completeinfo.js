import { Box, Divider, Flex, Heading,chakra } from '@chakra-ui/react'
import React from 'react'
import { useFormikContext } from 'formik'
function Completeinfo() {
    const {values}=useFormikContext();
  return (

    <Flex justifyContent={"center"} alignItems={"enter"} direction={"column"} gap={4}>
      <Box>
        <Heading as={"h6"}>Personal Info</Heading>
        <Divider/>
        <chakra.p>First Name: {values.fname}</chakra.p>
        <chakra.p>Last Name: {values.lname}</chakra.p>
        <chakra.p>Email: {values.email}</chakra.p>
        <chakra.p>Phone Number: {values.phone}</chakra.p>
        <chakra.p>Address: {values.address}</chakra.p>
      </Box>
      <Box>
        <Heading as={"h6"}>Educational Info</Heading>
        <Divider/>
        <chakra.p>Name of the Secondary School: {values.schoolname}</chakra.p>
        <chakra.p>CGPA: {values.schoolcgpa}</chakra.p>
        <chakra.p>Year of Passing: {values.schoolpassyear}</chakra.p>
        <chakra.p>Degree: {values.Degree}</chakra.p>
        <chakra.p>Course: {values.course}</chakra.p>
        <chakra.p>Branch: {values.branch}</chakra.p>
        <chakra.p>CGPA: {values.degreecgpa}</chakra.p>
        <chakra.p>Year of passing: {values.degreepassyear}</chakra.p>
      </Box>
      <Box>
        <Heading as={"h6"}>Experience History</Heading>
        <Divider/>
        <chakra.p>Name of the Company: {values.companyname}</chakra.p>
        <chakra.p>Job Title: {values.jobtitle}</chakra.p>
        <chakra.p>Discription: {values.jobdescription}</chakra.p>
        <chakra.p>Certificate: {values.experience}</chakra.p>
      </Box>
    </Flex>
  )
}

export default Completeinfo