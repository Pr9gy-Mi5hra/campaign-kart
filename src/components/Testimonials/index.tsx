"use client";
import React from "react";
import Slider from "react-slick";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { TestimonialsNextArrow, TestimonialsPrevArrow } from "./Arrows";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <TestimonialsPrevArrow />, // Use the custom arrow components
    nextArrow: <TestimonialsNextArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="bg-brand_bg px-10 md:px-20 py-10">
      <div>
        <div className="flex  justify-center pb-5 text-sm text-brand_headings font-bold">
          <div className="w-full text-xl  md:w-2/12  relative text-center ">
            <p>TESTIMONIALS</p>
            <div className="absolute bg-brand_secondary  right-10 md:-right-16 md:w-[80%] lg:-right-6 xl:-right-1 top-3 bg-opacity-20 w-[40%] xl:w-[55%] h-[12px]"></div>
          </div>
        </div>
      </div>
      <div className="text-center font-semibold text-2xl">
        <p>What People Say</p>
      </div>
      <div className="py-8 relative flex justify-center">
        <div className=" w-10/12 ">
          <Slider {...settings}>
            <div className="text-center rounded-md bg-white px-10 py-16">
              <div className="text-3xl text-brand_secondary flex justify-center">
                <BiSolidQuoteAltLeft />
              </div>
              <div className="pt-4">
                <p className="text-sm text-brand_text">
                  Campaignkart Marketing Agency has been a game-changer for
                  Elementor Marketing. Their tailored strategy transformed our
                  online presence, resulting in increased organic traffic,
                  higher conversion rates, and improved visibility. We highly
                  recommend Campaignkart&apos;s expertise and commitment to
                  delivering exceptional results.
                </p>
                <p className="font-bold pt-4">-From Elementor marketing team</p>
              </div>
            </div>
            <div className="text-center rounded-md bg-white px-10 py-16">
              <div className="text-3xl text-brand_secondary flex justify-center">
                <BiSolidQuoteAltLeft />
              </div>
              <div className="pt-4">
                <p className="text-sm text-brand_text">
                  Working with Campaignkart Marketing Agency to reshape our
                  brand strategy has been a game-changer for A2 Hosting. Their
                  industry expertise and strategic approach brought clarity to
                  our brand, redefining our market positioning and messaging.
                  The collaboration has been remarkable, and we&apos;re thrilled with
                  the results. Campaignkart is the go-to agency for revitalizing
                  your brand strategy.
                </p>
                <p className="font-bold pt-4">-A2 Hosting</p>
              </div>
            </div>
            <div className="text-center rounded-md bg-white px-10 py-16">
              <div className="text-3xl text-brand_secondary flex justify-center">
                <BiSolidQuoteAltLeft />
              </div>
              <div className="pt-4">
                <p className="text-sm text-brand_text">
                  Livechat&apos;s collaboration with Campaignkart Marketing Agency
                  for Brand Protection has been nothing short of transformative.
                  Their vigilant monitoring, swift legal actions, and focus on
                  online reputation have effectively safeguarded our brand.
                  Campaignkart&apos;s expertise and dedication have made them an
                  invaluable partner. If you need to protect your brand,
                  Campaignkart is the trusted choice
                </p>
                <p className="font-bold pt-4">-Livechat</p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
