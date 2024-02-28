"use client"
import React from "react";
import Slider from "react-slick";
const Team = () => {
    const settings = {
        dots: true,
        arrows:false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div>
      <div className=" hidden md:block">
        <img className="w-full" src="/assets/images/layer.png" />
      </div>
      <div className="bg-brand_bg pt-6 pb-16 px-10 md:px-20">
        <div className="flex  justify-center  font-bold font-md">
         <div className="md:w-3/12 text-xl text-center relative">
         <div className="absolute w-[50%] left-20 right-0 xl:left-36 xl:w-[30%] top-3 h-[10px] bg-brand_secondary bg-opacity-20"></div>
          <p className="text-brand_headings">THE MEMBERS</p>
         </div>
        </div>
        <div className=" flex justify-center  pt-6">
        <div className= "md:w-7/12 text-center">
        <p className="text-4xl font-semibold">Our Amazing Team</p>
          <p className="text-sm pt-4 text-brand_text ">
            Cras a elit sit amet leo accumsan volutpat. Suspendisse hendreriast
            ehicula leo, vel efficitur felis ultrices non. Cras a elit sit amet
            leo acun volutpat. Suspendisse hendrerit vehicula leo, vel efficitur
            fel.
          </p>
        </div>
        </div>
        <div className="pt-10">
            <Slider {...settings}>
                <div className="w-3/12 md:p-4 lg:p-2 xl:p-4">
                   <div className="bg-white rounded-md cardShadow">
                      <div className="h-[70%] rounded-t-md bg-brand_secondary bg-opacity-20 py-10 flex justify-center">
                        <img loading = "lazy" alt="team member 1" className="lg:w-[80%] p-6 lg:p-0 rounded-full" src="/assets/images/teamMember1.png"/>
                      </div>
                      <div className="px-2  py-4">
                        <p className="text-md font-semibold">Pranav Kumar</p>
                        <p className="text-[10px] pt-2 font-medium text-brand_text">CMO and Founder.</p>
                      </div>
                   </div>
                </div>
                <div className="w-3/12 md:p-4 lg:p-2  xl:p-4">
                   <div className="bg-white rounded-md cardShadow">
                   <div className="h-[70%] rounded-t-md bg-brand_secondary bg-opacity-20 py-10 flex justify-center">
                        <img loading = "lazy" alt="team member 2" className="lg:w-[80%]  p-6 lg:p-0  rounded-full" src="/assets/images/teamMember2.png"/>
                      </div>
                      <div className="px-2 py-4">
                        <p className="text-md font-semibold">Shivanand Kumar</p>
                        <p className="text-[10px] pt-2 text-brand_text font-medium">CTO and Co-Founder.</p>
                      </div>
                   </div>
                </div>
                <div className="w-3/12 md:p-4 lg:p-2  xl:p-4">
                   <div className="bg-white rounded-md cardShadow">
                   <div className="h-[70%] rounded-t-md bg-brand_secondary bg-opacity-20 py-10 flex justify-center">
                        <img loading = "lazy" alt="team member 3" className="lg:w-[80%]  p-6 lg:p-0  rounded-full" src="/assets/images/teamMember3.png"/>
                      </div>
                      <div className="px-2 py-4">
                        <p className="text-md font-semibold">Ashutosh Kumar</p>
                        <p className="text-[10px] pt-2 text-brand_text font-medium">Strategist & Campaign Manager.</p>
                      </div>
                   </div>
                </div>
                <div className="w-3/12 md:p-4 lg:p-2  xl:p-4">
                   <div className="bg-white rounded-md cardShadow">
                   <div className="h-[70%] rounded-t-md bg-brand_secondary bg-opacity-20 py-10 flex justify-center">
                        <img loading = "lazy" alt="team member 4" className="lg:w-[80%]  p-6 lg:p-0  rounded-full" src="/assets/images/teamMember4.png"/>
                      </div>
                      <div className="px-2 py-4">
                        <p className="text-md font-semibold">Khushi Kumari</p>
                        <p className="text-[10px] pt-2 text-brand_text font-medium">PPC Expert Social Media Specialist. </p>
                      </div>
                   </div>
                </div>
            </Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;