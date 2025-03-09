import React from "react";

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-6">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg text-gray-600 max-w-2xl text-center mb-6">
        We are a passionate team dedicated to building high-quality web solutions. Our goal is to provide modern, user-friendly, and efficient digital experiences.
      </p>
      <p className="text-md text-gray-500 max-w-lg text-center">
        Whether you're a developer, designer, or business owner, we're here to help you navigate the digital world with ease.
      </p>
    </div>
  );
}

export default About;
