import { Flex, Heading, Radio, Select, Spacer } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { Switch } from '@chakra-ui/react';
import { Field } from 'formik';
import { dataStore } from '../Store/datastore';
function Form2() {
    const {SelectYrOrMo,SelectData,YrOrMo}=dataStore();
    const [ischecked,setIsChecked] = useState(false)
    const [values, setValue]=useState(null)
    const setUser = SelectYrOrMo

    const handleChecked = () => {
      setIsChecked((prevIsChecked) => !prevIsChecked);
      
      setUser(ischecked ?'monthly' : 'yearly');
    };

    const handlePlanSelection=(id,name, amount)=>{
      setValue(id);
      SelectData(name, amount);
    }
  
  const data = [
    {
      id:1,
      image: '/images/icon-arcade.svg',
      name: 'Arcade',
      amount: ischecked?90:9,
      offfer:ischecked?"2 months free":null
    },
    {
      id:2,
      image: '/images/icon-advanced.svg',
      name: 'Advanced',
      amount: ischecked?120:12,
      offfer:ischecked?"2 months free":null
    },
    {
      id:3,
      image: '/images/icon-pro.svg',
      name: 'Pro',
      amount: ischecked?150:13,
      offfer:ischecked?"2 months free":null
    },
  ];



  return (
    <div className='font-mono'>
      <Heading as={"h6"}color={"darkblue"}pb={"10px"}>Select your plan</Heading>
      <p className='pb-[10px] text-gray-400 text-base'>you have an option of monthly or yearly billing. </p>
      <ul className="grid w-full gap-4 md:grid-cols-3">
        {data.map((item) => (
          <li key={item.id}>
            <input  
              type="radio"
              id={item.id}
              name="select"
              value="hello"
              checked={values===item.id}
              className="hidden peer"
              onChange={() => handlePlanSelection(item.id,item.name, item.amount)}
            />
            <label
              htmlFor={item.id}
              className="inline-flex items-center w-full p-4 md:h-[200px] bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 md:py-[20px] md:mt-[20px]"
            >
              <div className='inline-flex md:block text-blue-900 justify-between direction-column'>
              <img className="rounded-full pr-[20px]" src={item.image} alt="Icon" />
              <Spacer/>
              <div className="block">
                <div className="w-full text-lg font-bold">{item.name}</div>
                <div className="w-full text-gray-400">${item.amount}/{YrOrMo==="yearly"?"yr":"mo"}</div>
                <div className='w-full'>{item.offfer}</div>
              </div>
              </div>
            </label>
          </li>
        ))}
      </ul>
     <Flex justifyContent={"center"} mt={"20px"} gap={5} p={"5px"} bg={"gray.300"} rounded={"lg"}>
       <p className={`${ischecked?"text-gray-600 ":"text-blue-900  "} font-bold `}>monthly</p>
      <div className='text-blue-900 font-[40px] border border-gray-500 rounded-full backgroundColor-red'>
      <Switch colorScheme={"blue.900"} size={"lg"} lang='lg' isChecked={ischecked}  onChange={handleChecked} />
      </div>
       <p className={`${ischecked?"text-blue-900 ":"text-gray-500 "} font-bold `}>yearly</p>
     </Flex>
    </div>
  );
}

export default Form2;
