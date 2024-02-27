import React from "react";
import Link from "next/link";
import Contact from "@/components/contact/Contact";

const About = () => {
  return (
    <div className=" flex  flex-wrap justify-between pt-16 py-10 px-10 md:px-20">
      <div className="w-full md:w-5/12 flex space-x-2">
        <div className="h-full ">
          <img loading="lazy" alt="about images" className="h-full rounded-md" src="/assets/images/about1.png" />
        </div>
        <div className="  h-full ">
          <div className="h-1/2">
            <img loading="lazy" alt="about images" className="h-full rounded-md" src="/assets/images/about2.png" />
          </div>
          <div className="h-1/2 rounded-md  bg-red-400">
            <img loading="lazy" alt="about images"  className="h-full mt-1 rounded-md"  src="/assets/images/about3.png" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-6/12 h-full pt-8 md:pt-0 ">
        <div className="lg:text-xl relative font-semibold">
          <p className="text-brand_secondary">ABOUT US</p>
          <div className="absolute w-[14%] xl:w-[10%] left-10 top-3 h-[14px] bg-brand_secondary bg-opacity-20"></div>
        </div>
        <div className="pt-4 pr-6">
          <p className="lg:text-2xl xl:text-4xl font-bold">
            We are a team of performance marketers obsessed with generating
            revenue for our clients.
          </p>
          <p className="text-brand_text pt-6 text-[11px] lg:text-[13px] xl:text-[16px]">
            CampaignKart is your growth partner who cares about you and your
            brand&apos;s success. We plan, execute and help you scale by bringing the
            best strategic marketing initiatives and growth consulting that
            align with your brand&apos;s mission. CampaignKart is perfect combination
            of marketing mastery and determination that most agencies lack, but
            our client loves.
          </p>
        </div>
        <div className="pt-6 xl:pt-16">
          <Link shallow href="/contact">
          <Contact/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
