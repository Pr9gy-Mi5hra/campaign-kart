import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BiRightArrowAlt, BiLeftArrowAlt  } from "react-icons/bi";

export function TestimonialsPrevArrow(props: { className?: any; style?: any; onClick?: any; }) {
    const { className, style, onClick } = props;
  
    return (
      <div
        className="absolute -left-20 top-1/2 hidden md:block transform -translate-y-1/2 cursor-pointer z-10"
        onClick={onClick}
      >
        <BiLeftArrowAlt className="text-4xl text-brand_secondary" />
      </div>
    );
  }
  
  
  export function TestimonialsNextArrow(props: { className?: any; style?: any; onClick?: any; }) {
    const { className, style, onClick } = props;
  
    return (
      <div
        className="absolute -right-20 top-1/2 hidden md:block transform -translate-y-1/2 cursor-pointer "
        onClick={onClick}
      >
        <BiRightArrowAlt className="text-4xl text-brand_secondary" /> {/* Changed the color to white for better visibility */}
      </div>
    );
  }
  
