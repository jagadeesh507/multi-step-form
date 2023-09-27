import { Flex,Heading } from '@chakra-ui/react'
import React from 'react'
import { useFormikContext } from 'formik'

function Form4() {
  const {values}=useFormikContext();

  console.log(values)
  return (
    <Flex gap={4} direction={"column"} fontFamily={"monospace"}>
      <Heading color={"darkblue"}>Finishing up</Heading>
      <p className='text-gray-400'>Double-check everything looks OK before confirming.</p>
      <p>{values.email}</p>
    </Flex>
  )
}

export default Form4