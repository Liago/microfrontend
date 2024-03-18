import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="mb-4 h-16 w-16 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
        <p className="text-lg text-gray-600">
          Loading component, please wait...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
