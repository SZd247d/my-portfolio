import React from "react";

const Footer = () => {
  return (
    <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-gray-400">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300" />
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <p>Built with Next.js, Tailwind</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
