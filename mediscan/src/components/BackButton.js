// components/BackButton.js
"use client";

import React from "react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Go back to the previous page
  };

  return (
    <div className="absolute top-4 left-4 z-10">
      <button
        onClick={handleGoBack}
        className="bg-blue-600 text-white font-medium px-4 py-2 rounded-md shadow-md hover:bg-blue-500 transition"
      >
        &#8592; Back
      </button>
    </div>
  );
};

export default BackButton;
