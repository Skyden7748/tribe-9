import React from 'react'
import './Home.css'
import heroImage from '../assets/hero90.png';
import flare from '../assets/flare1.png';
import eye from '../assets/eye.png';
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide ,  } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import Footer from '../components/Footer';


//  


const beams = [
  { initialX: 10, translateX: 10, duration: 7 },
  { initialX: 600, translateX: 600, duration: 3 },
  { initialX: 100, translateX: 100, duration: 7, className: "tall-beam" },
  { initialX: 400, translateX: 400, duration: 5 },
  { initialX: 800, translateX: 800, duration: 11, className: "wide-beam" },
];

function home() {
  return (
    <>
      <div className="home-main">
        <div className="home-content">
          <div className="hero-image">
            <div className="headings">
              <h1 className="he1">DESIGN</h1>
              <h1 className="he2">DEVELOP</h1>
              <h1 className="he3">DELIVER.</h1>
            </div>
            <div className="eye">
              <img src={eye} alt="" />
            </div>
            <div className="flare">
              <img src={flare} alt="" />
            </div>

            <img src={heroImage} alt="" />
          </div>
        </div>
      </div>
      <div className="home-main-two">
        <div className="home-main-three">
          <div className="home-three-content">
            <h1>We are-</h1>
            <p>
              A passionate and innovative group of individuals dedicated to
              transforming your digital presence.
            </p>
          </div>
        </div>
      </div>
      <div className="home-main-four">
        <div className="home-four-content">
          <h1>We Expertise in-</h1>
          <div className="swiper-container">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="swiper-slide-top">
                    <p>Software Development</p>
                  </div>
                  <div className="swiper-slide-bottom b1"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="swiper-slide-top ">
                    <p>UI/UX</p>
                  </div>
                  <div className="swiper-slide-bottom b2"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="swiper-slide-top">
                    <p>Graphics Design</p>
                  </div>
                  <div className="swiper-slide-bottom b3"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="swiper-slide-top">
                    <p>Digital Marketing</p>
                  </div>
                  <div className="swiper-slide-bottom"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="swiper-slide-top">
                    <p>Project Management</p>
                  </div>
                  <div className="swiper-slide-bottom"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="swiper-slide-top">
                    <p>Wealth Management</p>
                  </div>
                  <div className="swiper-slide-bottom"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="swiper-slide-top">
                    <p>Digital Transformation</p>
                  </div>
                  <div className="swiper-slide-bottom"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="swiper-slide-top"></div>
                  <div className="swiper-slide-bottom"></div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="swiper-slide-top"></div>
                  <div className="swiper-slide-bottom"></div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="home-main-five">
        <div className="home-five-content">
          <div className="home-five-content-top"></div>
          <div className="home-five-content-topt"></div>
          <div className="home-five-content-toptt"></div>
          <p>meet</p>
          <h1>The </h1>
          <p></p>
        </div>

        <div>
          <button className="button" data-text="Awesome">
            <span className="actual-text">&nbsp;TEAM&nbsp;</span>
            <span aria-hidden="true" className="hover-text">
              &nbsp;TEAM&nbsp;
            </span>
          </button>
        </div>
      </div>
      <div className="home-main-fivefive">
        <div className="home-fivefive-content">
          <div className="home-fivefive-content-left">
            <p>
              Transform your digital presence with us, and reach your target
              audience
            </p>
          </div>
          <div className="home-fivefive-content-right">
            <div className="loader">
              <span></span>

              <div id="dot-1" className="dot"></div>
              <div id="dot-2" className="dot"></div>
              <div id="dot-3" className="dot"></div>
              <div id="dot-4" className="dot"></div>
              <div id="dot-5" className="dot"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-main-four">
        <div className="home-four-content">
          <h1>Client Reviews</h1>
          <div className="swiper-container">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="swiper-slide client">
                  <div className="client-box">
                    <div className="client-circle"></div>
                    <div className="client-name">
                      <p>Chessensei</p>
                    </div>
                  </div>
                  <div className="client-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quia. Doloribus, dolores. Soluta, officiis.
                      Quisquam, quia. Doloribus, dolores. Soluta, officiis.
                      Quisquam, quia. Doloribus, dolores. Soluta, officiis.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide client">
                  <div className="client-box">
                    <div className="client-circle"></div>
                    <div className="client-name">
                      <p>Mainstay</p>
                    </div>
                  </div>
                  <div className="client-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quia. Doloribus, dolores. Soluta, officiis.
                      Quisquam, quia. Doloribus, dolores. Soluta, officiis.
                      Quisquam, quia. Doloribus, dolores. Soluta, officiis.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide client">
                  <div className="client-box">
                    <div className="client-circle"></div>
                    <div className="client-name">
                      <p>org s </p>
                    </div>
                  </div>
                  <div className="client-content">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quia. Doloribus, dolores. Soluta, officiis.
                      Quisquam, quia. Doloribus, dolores. Soluta, officiis.
                      Quisquam, quia. Doloribus, dolores. Soluta, officiis.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide"></div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide"></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default home