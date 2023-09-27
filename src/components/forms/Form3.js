import { Checkbox, Flex, Heading, Input } from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";

function Form3() {

  const data=[
    {
      Servicetype:"Online service",
      access:"Access to multiplayer games",
      plan:10
    },
    {
      Servicetype:"Larger storage",
      access:"Extra 1TB of cloud save",
      plan:20,
    },
    {
      Servicetype:"Customizable profile",
      access:"Custom theme on your profile",
      plan:30
    }
  ]
  return (
    <div className="font-mono">
      <Heading color={"darkblue"} pb={"10px"}>
        Pick add-ons
      </Heading>
      <p className="text-gray-400 pb-[20px]">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="grid w-full gap-6">
        {
          data.map((values,index)=>(
            <div key={index} className="flex items-center pl-4 border border-gray-200 rounded pointer ">
          <Field as={Checkbox}
          id={values.Servicetype}
            type="checkbox"
            value={values.plan}
            name="checked"
            className="w-6 h-6 text-blue-900 bg-gray-100 border-gray-300 rounded "
          />
          <label
            htmlFor={values.Servicetype}
            className="w-full py-4 ml-2 text-sm font-medium text-blue-900 cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <div className="block">
                <p className="font-bold">{values.Servicetype}</p>
                <p className="text-gray-400">{values.access}</p>
              </div>
              <p className="pr-[10px]">+${values.plan}/yr</p>
            </div>
          </label>
        </div>
          ))
        }
      </div>
    </div>
  );
}

export default Form3;
