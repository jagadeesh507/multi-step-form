import { Divider, Flex,Heading } from '@chakra-ui/react'
import { dataStore } from '../Store/datastore'
function Form4() {
  const {check,YrOrMo,select}=dataStore();
let total=0
check.map((val)=>{
  total=total+val.plan
})
total=total+select.planAmount
  return (
    <Flex gap={4} direction={"column"} fontFamily={"monospace"} fontSize={"md"} color={"darkblue"} fontWeight={"bold"}>
      <Heading color={"darkblue"}>Finishing up</Heading>
      <p className='text-gray-400'>Double-check everything looks OK before confirming.</p>
      <Flex justifyContent={"space-between"}>
        <p>{select.service} <span>({YrOrMo})</span></p>
        <p className='text-md'>+${select.planAmount}/{YrOrMo==="yearly"?"yr":"mo"}</p>
      </Flex>
      <Divider/>
      {
           check.map((val,index)=>(
            <Flex justifyContent={"space-between"} direction={"row"}key={index} fontSize={"md"} gap={"8px"}>
              <p className='text-gray-400 font-sm font-bold'>{val.srv}</p>
              <p className='text-blue-900 font-bold'>+${val.plan}{YrOrMo==="yearly"?"yr":"mo"}</p>
            </Flex>
           ))
      }
        <Flex justifyContent={"space-between"} pt={{sm:"40px", md:"80px"}}>
        <p className='text-gray-400 text-lg'>Total ({YrOrMo})</p>
        <p>+${total}/{YrOrMo==="yearly"?"yr":"mo"}</p>
        </Flex>

    </Flex>
  )
}

export default Form4