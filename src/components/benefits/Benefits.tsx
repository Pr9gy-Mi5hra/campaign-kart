import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Benefits = () => {
  return (
   <div>
     <div className="hidden lg:block min-h-[80vh] bg-brand_bg benefitBg">
      <div className="flex flex-wrap  items-center justify-between">
        <div className="w-4/12 text-6xl xl:text-8xl text-white font-bold text-end relative">
            <p className="absolute w-full flex justify-end lg:left-24 xl:left-36">BENEFITS</p>
        </div>
        <div className="w-8/12 h-[80vh] items-center  flex justify-center">
          <div className="w-[60%]  pt-10 ">
            <div className="text-xl  relative font-semibold">
              <p className="text-brand_secondary">WHY US</p>
              <div className="absolute w-[10%] xl:w-[10%] left-10 top-3 h-[14px] bg-brand_secondary bg-opacity-20"></div>
            </div>
            <div className="pt-8">
              <p className="text-2xl text-white font-bold">
                It’s not about Us it’s about you! We care about your success as
                much you do.
              </p>
              <div className="pt-6 space-y-4">
                <div className="flex items-center text-brand_text ">
                  <div className="text-3xl">
                    <BsFillCheckCircleFill />
                  </div>
                  <p className="text-sm pl-6">
                    Customized solutions tailored to your unique goals and
                    products.
                  </p>
                </div>
                <div className="flex items-center text-brand_text ">
                  <div className="text-3xl">
                    <BsFillCheckCircleFill />
                  </div>
                  <p className="text-sm pl-6">
                    Dedicated team of experts working relentlessly to deliver
                    your vision.
                  </p>
                </div>
                <div className="flex items-center text-brand_text ">
                  <div className="text-3xl">
                    <BsFillCheckCircleFill />
                  </div>
                  <p className="text-sm pl-6">
                    Data-driven strategies optimized through ongoing analytics
                    and testing.
                  </p>
                </div>
                <div className="flex items-center text-brand_text ">
                  <div className="text-3xl">
                    <BsFillCheckCircleFill />
                  </div>
                  <p className="text-sm pl-6">
                    • Full transparency into progress and performance of all
                    initiatives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="block lg:hidden bg-brand_black py-20 px-10 md:px-20" >
    <div className="lg:text-md  relative font-semibold">
              <p className="text-brand_secondary">WHY US</p>
              <div className="absolute w-[20%] md:w-[10%]  left-6 top-2 h-[14px] bg-brand_secondary bg-opacity-40"></div>
            </div>
            <div className="pt-8">
              <p className="text-2xl text-white font-bold">
                It&apos;s not about Us it&apos;s about you! We care about your success as
                much you do.
              </p>
              <div className="pt-6 space-y-4">
                <div className="flex items-center text-brand_text ">
                  <div className="text-3xl">
                    <BsFillCheckCircleFill />
                  </div>
                  <p className="text-sm pl-6">
                    Customized solutions tailored to your unique goals and
                    products.
                  </p>
                </div>
                <div className="flex items-center text-brand_text ">
                  <div className="text-3xl">
                    <BsFillCheckCircleFill />
                  </div>
                  <p className="text-sm pl-6">
                    Dedicated team of experts working relentlessly to deliver
                    your vision.
                  </p>
                </div>
                <div className="flex items-center text-brand_text ">
                  <div className="text-3xl">
                    <BsFillCheckCircleFill />
                  </div>
                  <p className="text-sm pl-6">
                    Data-driven strategies optimized through ongoing analytics
                    and testing.
                  </p>
                </div>
                <div className="flex items-center text-brand_text ">
                  <div className="text-3xl">
                    <BsFillCheckCircleFill />
                  </div>
                  <p className="text-sm pl-6">
                    • Full transparency into progress and performance of all
                    initiatives
                  </p>
                </div>
              </div>
            </div>
    </div>
   </div>
    
  );
};

export default Benefits;
