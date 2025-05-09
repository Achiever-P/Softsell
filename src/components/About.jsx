"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import uploadImage from "/1.png";
import valuationImage from "/2.png";
import paymentImage from "/3.png";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Upload License",
    description:
        "Begin by uploading your unused software license details through our simple, secure form. It takes just a few minutes to complete, and no technical knowledge is required. Start your journey today!",
    image: uploadImage,
  },
  {
    title: "Get Valuation",
    description:
        "Our system instantly analyzes your license’s market value using real-time data and industry trends. Within moments, you’ll receive a fair offer, ensuring you're getting the best price available.",
    image: valuationImage,
  },
  {
    title: "Receive Payment",
    description:
        "Once you accept the offer, choose your preferred payment method—whether it’s PayPal, bank transfer, or other options—and receive your funds securely within 24 hours. Fast and reliable!",
    image: paymentImage,
  },
];

const About = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
          [titleRef.current, subtitleRef.current],
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top center",
            },
          }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
      <section
          id="how-it-works"
          ref={containerRef}
          className="min-h-screen w-full bg-[#d0c3f1] dark:bg-black py-20 px-4 transition-colors duration-300"
      >
          {/* Title */}
          <div className="text-center mb-16">
              <h1
                  ref={titleRef}
                  className="text-5xl font-bold text-gray-800 dark:text-white opacity-0"
              >
                  How It Works
              </h1>
              <p
                  ref={subtitleRef}
                  className="text-xl text-gray-600 dark:text-white mt-2 opacity-0"
              >
                  Follow these simple steps to get started
              </p>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-8 max-w-6xl mx-auto">
              {steps.map((step, index) => (
                  <div
                      key={index}
                      className={`flex flex-col md:flex-row ${
                          index % 2 === 1 ? "md:flex-row-reverse" : ""
                      } items-center gap-10`}
                  >
                      <img
                          src={step.image}
                          alt={step.title}
                          className="w-60 h-60 object-contain"
                      />

                      <div className="text-center md:text-left max-w-md">
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{step.title}</h3>
                          <p className="text-base text-gray-700 dark:text-white mt-2">
                              {step.description}
                          </p>
                      </div>
                  </div>
              ))}
          </div>
      </section>
  );
};

export default About;
