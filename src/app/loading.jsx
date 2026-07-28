import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-base-100">
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/20"></div>

          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-primary/20 border-t-primary">
            <span className="text-3xl font-black text-primary">HK</span>
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-bold text-secondary">Hero Kidz</h2>

        <p className="mt-2 text-base-content/70">
          Loading amazing learning experiences...
        </p>

        <progress className="progress progress-primary w-56 mt-6"></progress>
      </div>
    </div>
  );
};

export default Loading;
