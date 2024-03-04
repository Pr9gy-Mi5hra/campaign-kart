"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Breadcrumbs from "@/components/breadCrumbs/BreadCrumbs";
const page = () => {
  return (
    <div id="#about">
      <div className="h-[20vh] bg-brand_bggray pt-16 text-center ">
        <div className="text-[11px] uppercase">
          <Breadcrumbs />
        </div>
        <p className="text-3xl pt-4 font-bold">About Us</p>
      </div>
      <div className=" ">
        <img className="w-full " src="/assets/images/layer2.png" />
      </div>
      <div className="bg-white py-10 px-10 lg:px-20 ">
        <div>
          <p className="text-3xl font-semibold ">
            We are a team of performance marketers obsessed with generating
            revenue for our clients.
          </p>
          <p className="text-brand_text text-sm  pt-6 ">
            We are a team of performance marketers who are relentlessly focused
            on one goal: generating revenue for our clients.At CampaignKart, we
            are your dedicated growth partner, fully invested in your brand&apos;s
            success. With a personalized approach, we plan and execute strategic
            marketing initiatives that align seamlessly with your brand&apos;s
            mission. Our expertise extends beyond mere execution – we provide
            growth consulting to help you scale and achieve your business
            objectives. What sets CampaignKart apart is our perfect combination
            of marketing mastery and unwavering determination. We go the extra
            mile to deliver exceptional results that our clients love. We
            understand that success is not just about vanity metrics; it&apos;s about
            driving tangible growth. Our team of seasoned professionals are
            well-versed in the latest industry trends and cutting-edge
            techniques. We stay ahead of the curve to ensure that your marketing
            campaigns are innovative, data-driven, and optimized for maximum
            performance. When you choose CampaignKart, you gain a partner who
            truly cares about your success. We believe in transparent
            communication, collaborative partnerships, and a client-centric
            approach. Your goals become our goals, and we work tirelessly to
            exceed your expectations. Experience the CampaignKart difference and
            unlock your brain&apos;s true potential. Contact us today to discuss how
            our team can propel your business forward and achieve remarkable
            revenue growth.
          </p>
        </div>
        <div className="pt-14">
          <div className="flex flex-wrap   justify-center items-center lg:h-[60vh] ">
            <div className=" w-full h-full md:pr-2 lg:pr-5  md:w-6/12">
              <img
                className="h-full rounded-md w-full object-cover"
                src="/assets/images/aboutus1.png"
              />
            </div>
            <div className="w-full h-full pt-4 md:pt-0  md:w-6/12 flex space-x-2">
              <div className="h-full ">
                <img
                  className="h-full rounded-md  "
                  src="/assets/images/about1.png"
                />
              </div>
              <div className="  h-full ">
                <div className="h-1/2">
                  <img
                    className="h-full rounded-md "
                    src="/assets/images/about2.png"
                  />
                </div>
                <div className="h-1/2">
                  <img
                    className="h-full mt-1 rounded-md "
                    src="/assets/images/about3.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
