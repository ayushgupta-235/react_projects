import React from "react";


function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
        Discover amazing content and explore endless possibilities with us.
      </p>

      {/* Image Section */}
      <img
        src="https://www.mondigroup.com/cdn-cgi/image/f=auto,fit=cover,w=1420,h=799,g=auto,sharpen=1/AdaptiveImages/celum/369359/Mondi%20and%20easy2cool%20freshen%20up%20the%20eCommerce%20market_Banner.jpeg?stamp=fd5cf3ecc674d3266beca50edb738355307646b6"
        alt="Hero"
        className="w-full max-w-lg rounded-lg shadow-lg"
      />

      <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
        Get Started
      </button>
    </div>
  );
}

export default Home;
