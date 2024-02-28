"use client";
import React, { useEffect, useState } from "react";
// import ServicesCard from "./servicesCard";
// import fetchServices from "@/apiHelper/fetchServices";
// import { IServices } from "@/types";
// import { CircularProgress } from "@mui/material";
import Link from "next/link";
import ServicesCard from "./servicesCard/ServicesCard";
const Services = ({ services }: { services: IServices[] }) => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="">
      <div className=" hidden md:block">
        <img className="w-full" src="/assets/images/layer.png" />
      </div>
      <div className="bg-brand_bg py-10">
        <div className="px-10 md:px-20">
          <div className=" flex justify-center   text-xl  text-brand_headings font-semibold">
            <div className="w-6/12  md:w-4/12  lg:w-2/12  flex justify-center relative ">
              <p>WHAT WE DO</p>
              <div className="bg-brand_secondary w-[50%] md:w-[40%] lg:w-[60%] xl:w-[40%] xl:right-10 h-[15px] absolute top-3 right-4 md:right-7 lg:right-1 bg-opacity-20"></div>
            </div>
          </div>
          <div className="text-center pt-6">
            <p className="text-3xl font-semibold">Our Services</p>
            <p className="text-sm text-brand_text pt-4">
              Want it all from web design to SEO? Our talented team brings
              comprehensive digital services including branding, marketing,
              advertising and beyond.
            </p>
          </div>
          <div className="flex flex-wrap w-full py-16">
            {services &&
              services.map((item) => (
                <ServicesCard key={item?._id} item={item} />
              ))}
          </div>
          <div className="flex justify-center">
            <Link href={"/services"}>
              <button className="text-sm rounded-md bg-brand_headings buttonShadow  text-white font-semibold px-4 py-2">
                All Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;