"use client";
import Slider from "react-slick";
import { BiRightArrowAlt } from "react-icons/bi";
import { IServices } from "@/types";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useRef } from "react";
import Card from "./Card";

const ServicesCarousel = ({ services }: { services: IServices[] }) => {
 
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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
          slidesToShow: 1,
          slidesToScroll: 1,
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
      <div className="flex relative min-h-[40vh] justify-center">
        <div className="w-full  px-10 md:px-0 md:w-6/12 lg:w-6/12 xl:w-5/12 absolute -top-12 ">
          {services && services.length > 0 ? (
            <Slider {...settings}>
              {services &&
                services.length > 0 &&
                services.map((item) => (
                  <Card item={item} key={item._id} />
                ))}
            </Slider>
          ) : (
            <div className="flex justify-center pt-10 items-center h-full">
              <CircularProgress />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
