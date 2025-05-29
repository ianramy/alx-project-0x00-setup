import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      <Card />
      <Card />

      <div className="mt-8 flex flex-col gap-4">
        <Button title="Small Button" styles="text-sm rounded-sm bg-blue-500" />
        <Button title="Medium Button" styles="text-md rounded-md bg-green-500" />
        <Button title="Large Button" styles="text-lg rounded-full bg-red-500" />
      </div>
    </div>
  );
};

export default Landing;
