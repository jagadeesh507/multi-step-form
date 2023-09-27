import { Flex,Heading } from '@chakra-ui/react'

function Form4() {

  return (
    <Flex gap={4} direction={"column"} fontFamily={"monospace"}>
      <Heading color={"darkblue"}>Finishing up</Heading>
      <p className='text-gray-400'>Double-check everything looks OK before confirming.</p>
    
    </Flex>
  )
}

export default Form4