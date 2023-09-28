import React from "react";
import { Checkbox, Flex, Heading } from "@chakra-ui/react";
import { dataStore } from "../Store/datastore";

function Form3() {
  
  const {check,YrOrMo}=dataStore();
  const checkedItems = dataStore((state) => state.check);
  const handleCheckboxChange = dataStore((state) => state.CheckedData);
 console.log(check)

  const data = [
    {
      id: 1,
      Servicetype: "Online service",
      access: "Access to multiplayer games",
      plan:  YrOrMo==="yearly"?10:1,
    },
    {
      id: 2,
      Servicetype: "Larger storage",
      access: "Extra 1TB of cloud save",
      plan: YrOrMo==="yearly"?20:2,
    },
    {
      id: 3,
      Servicetype: "Customizable profile",
      access: "Custom theme on your profile",
      plan:  YrOrMo==="yearly"?20:2,
    },
  ];

  return (
    <div className="font-mono">
      <Heading color={"darkblue"} pb={"10px"}>
        Pick add-ons
      </Heading>
      <p className="text-gray-400 pb-[20px]">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="grid w-full gap-6">
        {data.map((values, index) => (
          <div key={index} className="flex items-center pl-4 border border-gray-200 rounded pointer">
            <Checkbox
              id={values.Servicetype}
              isChecked={check.some((service) => service.id === values.id)}
              onChange={() => handleCheckboxChange(values.id, values.plan,values.Servicetype)}
              className="w-6 h-6 text-blue-900 bg-gray-100 border-gray-300 rounded"
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
                <p className="pr-[10px]">+${values.plan}/{ YrOrMo==="yearly"?"yr":"mo"}</p>
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Form3;