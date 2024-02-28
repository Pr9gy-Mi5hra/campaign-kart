"use client";
import React, { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
// import fetchServices from "@/apiHelper/fetchServices";
// import { IServices } from "@/types";
import Link from "next/link";

const ServicesCard = ({ item }: { item: IServices }) => {

  function truncateText(text:string, maxLength:number) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  }
  return (
    
    <div className="flex  w-full flex-wrap  md:w-6/12  lg:w-4/12">
    <div className="w-full  p-2 lg:p-4 md:p-4 xl:p-6 " key={item.slug}>
      <Link shallow href={`/services/${item.slug}`}>
        <div className="card rounded-md bg-blue-400 servicesCardShadow h-[40vh]">
          <div className=" rounded-md relative h-[70%]">
            <div className="rounded-md  h-full">
              <img
                className="w-full rounded-t-md h-full object-cover"
                src={item.cover_image}
              />
            </div>
            <div className="w-full h-full rounded-t-md top-0 bottom-0 left-0 right-0 flex items-end pb-4 text-white font-semibold bg-black bg-opacity-20 absolute  pl-3">
              <p>{item.title}</p>
            </div>
          </div>
          <div className="h-[30%] px-2 rounded-b-md bg-white  flex items-center justify-between">
            <div>
              <p className="text-[12px] text-brand_text">
              {truncateText(item.short_description, 50)}
              </p>
            </div>
            <div className="text-5xl text-brand_headings">
              <BiRightArrowAlt />
            </div>
          </div>
        </div>
      </Link>
    </div>
  </div>
  );
};

export default ServicesCard;