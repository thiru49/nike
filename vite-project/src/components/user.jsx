import React, { useState } from "react";
import { useNavigate } from "react-router";

function User({ userData }) {
  const navigate = useNavigate();
  if (!userData) {
    return (
      <div className="text-gray-300 text-center ">
        <h1 className=" font-bold text-xl">Fill the form</h1>
        <button
          className="mt-4 bg-white px-4 py-2 rounded-md hover:bg-blue-500 text-black font-bold hover:text-white transition-all"
          onClick={() => {
            navigate("/form");
          }}
        >
          Back to the form
        </button>
      </div>
    );
  }
  return (
    <div className="container mx-auto mt-8 bg-red p-5 shadow-md rounded-md">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-semibold mb-4">User Data</h1>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center">
            <span className="font-bold w-24">Name:</span>
            <p className="data">{userData.name}</p>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-24">Email:</span>
            <p className="data">{userData.email}</p>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-24">Phone:</span>
            <p className="data">{userData.phone}</p>
          </div>
          <div className="flex items-center">
            <span className="font-semibold w-24">Department:</span>
            <p className="data">{userData.department}</p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          className="mt-4 bg-white px-4 py-2 rounded-md hover:bg-blue-500 text-black font-bold hover:text-white transition-all"
          onClick={() => {
            navigate("/form");
          }}
        >
          Back to the form
        </button>
      </div>
    </div>
  );
}

export default User;
