"use client";
// import { IServices } from "@/types";
import React from "react";

import Link from "next/link";
import Contact from "../contact/Contact";
import Breadcrumbs from "../breadCrumbs/BreadCrumbs";
const ServicesDetails = ({ data }: { data: IServices }) => {

  const paragraphs = data.long_description.split('\n');

  return (
    <div>
      <div className="h-[20vh] bg-brand_bggray pt-16 text-center ">
        <div className="text-[11px] uppercase">
          <Breadcrumbs />
        </div>
        <p className="text-2xl md:text-3xl pb-4 pt-4 font-semibold">{data.title}</p>
      </div>
      <div className=" ">
        <img className="w-full" src="/assets/images/layer2.png" />
      </div>
      <div className="md:px-20 px-10 flex flex-wrap-reverse lg:justify-center lg:space-x-8 py-10">
        <div className="w-full  md:w-5/12">
          <div className="text-brand_text text-sm">
           {/* Map each paragraph to a <p> tag */}
            {paragraphs.map((paragraph, index) => (
              <p className="py-1" key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="pt-10">
           <Link shallow href="/contact">
           <Contact /></Link>
          </div>
        </div>
        <div className="w-full pb-4   lg:pb-0 flex    lg:justify-center md:w-6/12">
          <div className="">
            <img src={data.cover_image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;