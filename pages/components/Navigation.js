import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();

  const isDonatePage = router.pathname === "/supportme";

  return (
    <div className="sticky top-0 z-20 py-2 md:py-6 md:mb-6 dark:bg-black bg-white">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <div className="items-start flex">
          <Link
            href="/"
            className={
              "font-medium tracking-wider transition-colors text-gray-900 dark:hover:text-sky-500 hover:text-sky-500 uppercase dark:text-white"
            }
          >
            DevSpectrum
          </Link>
        </div>
        <div className="items-end flex space-x-5">
          {!isDonatePage && (
            <Link
              href="/supportme"
              className="font-medium px-8 py-3 mr-4 rounded tracking-wider bg-blue-700 transition-colors text-gray-900 dark:hover:text-sky-500 hover:text-sky-500 uppercase dark:text-white"
            >
              Donate
            </Link>
          )}

          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
