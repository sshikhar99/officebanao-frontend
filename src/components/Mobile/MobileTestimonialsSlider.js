import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "./MobileTestimonialsSlider.css";

export default function MobileTestimonialsSlider() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      msg: "Amazing execution and beautiful workspace transformation!"
    },
    {
      name: "Meera Patel",
      msg: "Very professional team with clear communication."
    },
    {
      name: "Arjun Verma",
      msg: "High-quality finishing and modern design. Loved the experience!"
    }
  ];

  return (
    <div className="mts-wrapper fade-in">
      <h2 className="mts-title">Testimonials</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="mts-card">
              <p className="mts-msg">“{t.msg}”</p>
              <h4 className="mts-name">— {t.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
