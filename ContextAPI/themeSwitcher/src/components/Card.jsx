import React from "react";

function Card() {
   const title="React Card" 
   const description="This is a simple card component built with TailwindCSS." 
   const image="https://thumbs.dreamstime.com/b/cute-panda-cartoon-big-eyes-sitting-isolated-white-background-owl-320854001.jpg"
   return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 w-80">
      {image && <img src={image} alt={title} className="w-full h-full object-cover rounded-md mb-4" />}
      <h2 className="text-xl font-bold mb-2 dark:text-white">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

export default Card;
