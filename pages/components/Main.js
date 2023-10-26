import Image from "next/image";
import React from "react";
// import bruceMarsUnsplash from "../public/bruceMarsUnsplash.png";

const Main = () => {
  return (
    <div className="container px-4 mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-gray-400">
            Hi there,
          </h1>
          <div className="mt-6 text-gray-800 dark:text-gray-400">
            <p className="mb-4 text-3xl">I&apos;m a FullStack Developer</p>
            <p className="mb-4 font-semibold">
              I&apos;m in a stuation where Im trying and hardly seeking to
              approach ,reach and achive a good level of skills and abilities so
              i can offre you a A highly crafted Professional development and
              web Services ,
            </p>
            <p className="mb-4 font-semibold">
              Looking forward to solve your problems and give you an Outstanding
              online presence , Helping you designing your vision Which will
              bring you more clarity to your online goals
            </p>

            <p className="mb-4 font-semibold">
              Have an online platform Which will be your stage where you can
              broadcast your message To make a great impact with your website or
              online product
            </p>
            <h2 className="font-bold text-3xl">
              You &apos;don&apos;t need a website you need a high performing
              website
            </h2>
          </div>
        </div>
        <div className="flex-shrink-0 flex justify-center items-center mt-5 lg:mt-12 lg:px-4 mb-10">
          <Image
            src="/bruceMarsUnsplash.jpg"
            alt="Public Avatar"
            priority={true}
            className="rounded-full "
            width={500}
            height={500}
            blurDataURL
          />

          <div className="flex justify-center items-center mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
