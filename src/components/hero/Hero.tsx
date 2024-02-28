import React from "react";

const Hero = () => {
  return (
    <div className="bg-brand_lightgray">
        <div className="flex flex-wrap items-center justify-between px-10 md:px-20">
      <div  className="w-full md:w-4/12 py-16">
        <div className="main-text  text-3xl md:text-4xl lg:text-5xl xl:text-7xl">
          <p>STRATEGY</p>
          <p className="font-bold lg:pt-3 ">EXECUTION</p>
        </div>
        <div>
          <div className="text-sm lg:text-md lg:w-full xl:text-xl  font-semibold xl:w-10/12 pt-4 lg:pt-10 xl:pt-14">
            <p>
              Unleash Your Online Potential with Data-Backed{" "}
              <span className="relative " >Digital Solutions! <span className="absolute top-[10px] lg:top-[10px] xl:top-[13px] bg-opacity-20 right-0 w-[100%] h-[10px] bg-brand_secondary"></span> </span>
            </p>
          </div>
          <p className="text-brand_darkgray text-[12px] lg:text-sm  pt-6">
            We help you achieve your business goals through data driven digital
            marketing strategies. Our performance-focused campaigns deliver real
            ROI.
          </p>
        </div>
      </div>
      <div className="w-full hidden md:block md:w-7/12">
         <div>
            <img loading="lazy" alt="hero image" src="/assets/images/consulting.png"/>
         </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;