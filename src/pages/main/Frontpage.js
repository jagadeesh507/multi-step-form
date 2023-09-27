import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import SignIn from "@/components/auth/SignIn";
function Frontpage() {
  return (
    <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          MULTI STEP FORM
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          {" "}
          multi-step forms serve as interesting tools for customer engagement as
          it breaks down the form into smaller segments, to reduce the question
          overload for the visitor.
        </p>
        <div className="flex justify-center">
          <SignIn />
        </div>
      </div>
    </section>
  );
}

export default Frontpage;
