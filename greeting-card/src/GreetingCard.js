import React from "react";

const GreetingCard = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-300 via-red-400 to-red-600"
      style={{
        backgroundImage: "url('/inna-skosyreva-LdOV2aXciF0-unsplash.jpg')",
      }}
    >
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-red-600">
          Happy Holidays!
        </h1>
        <p className="mt-4 text-lg text-center text-gray-700">
          Wishing you a season filled with warmth, joy, and togetherness.
        </p>
        <div className="flex justify-center mt-6">
          <img
            src="/inna-skosyreva-LdOV2aXciF0-unsplash.jpg"
            alt="Holiday"
            className="rounded-lg"
          />
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-500">
            From <span className="font-bold text-red-500">Saumya Nayak</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;
