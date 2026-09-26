import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Testimonials() {
  const reviews = [
    {
      text: "Honestly the best burgers I've ever had. The smash burger is incredible - perfectly crispy edges, juicy inside, and those pickles! We come every Friday now.",
      image: "img/testimonial/1.jpg",
      name: "Monica Wilber",
      role: "Regular Customer",
    },
    {
      text: "Ordered delivery and the food arrived hot and fresh in 22 minutes. Portions are generous. Sarab has become my go-to comfort food spot without question.",
      image: "img/testimonial/2.jpg",
      name: "Cameron Fox",
      role: "Food Blogger",
    },
    {
      text: "The truffle pasta blew my mind. I didn't expect that quality from a fast food place. Great ambiance, super friendly staff. Highly recommended!",
      image: "img/testimonial/3.jpg",
      name: "Priya Sharma",
      role: "Food Enthusiast",
    },
    {
      text: "Catered our office party of 50 people and everything was flawless. Fresh, delicious, on time and well presented. Nashville chicken was the absolute star!",
      image: "img/testimonial/4.jpg",
      name: "David Park",
      role: "Corporate Client",
    },
  ];

  return (
    <section id="testimonials">
      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">
          <span className="slbl">What People Say</span>

          <h2 className="stitle">
            Our Customers <span>Feedback</span>
          </h2>

          <div className="sline"></div>
        </div>

        <Swiper
          className="tesSwiper"
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {reviews.map((review, index) => (
            <SwiperSlide key={index}>

              <div className="tescard">

                <div className="tesq">"</div>

                <div className="tess">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>

                <p className="testxt">
                  {review.text}
                </p>

                <div className="tesauth">

                  <img
                    src={review.image}
                    alt={review.name}
                  />

                  <div>
                    <div className="tesnm">
                      {review.name}
                    </div>

                    <div className="tesrl">
                      {review.role}
                    </div>
                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}

export default Testimonials;