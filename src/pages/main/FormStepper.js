import { Flex } from '@chakra-ui/react'
import React from 'react'
function FormStepper({Step}) {
    const steps=["YOUR INFO","SELECT PLAN","ADD-ONS","SUMMARY",]
  return (
      <Flex justify={"center"} pt={{base:"50px",md:"20px"}}>
         <div className='flex justify-center align-center'>
         <div className='grid grid-cols-4 md:grid-cols-1 gap-4 md:gap-8 mt-[40px]'>
        {
        steps?.map((step,i) => (
        
        <div  key={i} className='flex flexDirection-row gap-4 items-center'>
            <div className={`${Step===i+1?"bg-blue-400":Step===5?"bg-blue-400":"bg-gray "} w-8 h-8 flex items-center justify-center rounded-full font-semibold text-white border border-blue-400 border-[2px] `}>{i+1}</div>
            <div className='block font-bold text-white '>
            <p className='text-xs hidden md:block'>STEP {i+1}</p>
            <p className='text-sm hidden md:block'>{step}</p>
            </div>
           
        </div>
       

        ))
    }
    </div>
   
       </div>
      </Flex>
  )
}

export default FormStepper