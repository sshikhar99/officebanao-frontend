import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialsSlider.css";

export default function TestimonialsSlider() {
  const reviews = [
    {
      name: "Rahul Sharma — BluSmart",
      msg: "Amazing execution and stunning design quality. They delivered exactly what we imagined!"
    },
    {
      name: "Meera Patel — Amway",
      msg: "Highly professional and very clear in communication. 3D design accuracy was excellent."
    },
    {
      name: "Arjun Verma — Pioneer Urban",
      msg: "Premium finishing, timely delivery, and excellent material choices."
    }
  ];

  return (
    <div className="slider-wrapper fade-in">
      <h2 className="slider-title">What Our Clients Say</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {reviews.map((r, i) => (
          <SwiperSlide key={i}>
            <div className="slider-card">
              <p>"{r.msg}"</p>
              <h4>— {r.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
