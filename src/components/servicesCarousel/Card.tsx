import { IServices } from "@/types";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

function Card({ item }: { item: IServices }) {
    function truncateText(text: string, maxLength: number) {
        if (text.length <= maxLength) {
          return text;
        }
        return text.slice(0, maxLength) + "...";
      }

      const RenderSVG = ({ svgString }: { svgString: string }) => {
        const ref = useRef(null);
      
        useEffect(() => {
          if (ref.current && svgString) {
            //@ts-ignore
            ref.current.innerHTML = svgString;
          }
        }, [svgString]);
      
        return <div key={item._id} ref={ref}></div>;
      };

  return (
    <div className=" p-2   w-[300px] h-[300px]" key={item._id}>
      <div className="rounded-md bg-white">
        <div className="pt-5 h-[40%] flex justify-center">
        <img className="w-[90px]" src={item.icon} alt="Icon" />
        </div>

        <div className="text-center pt-6">
          <p className="text-md font-bold">{item.title}</p>
          <p className="text-[12px] xl:text-sm pt-3">
            {truncateText(item.short_description, 50)}
          </p>
        </div>
        <Link href={`/services/${item.slug}`}>
          <div className="flex pt-6 items-center justify-center">
            <p className="border-b text-sm text-brand_headings border-b-brand_headings">
              View more
            </p>

            <div className="pl-3 text-2xl text-brand_headings">
              <BiRightArrowAlt />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
