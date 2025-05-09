"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// BentoTilt Component
export const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();
        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle("");
    };

    return (
        <div
            ref={itemRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};

// BentoCard Component with More Rounded Corners
export const BentoCard = ({ title, description, icon, bgImage }) => {
    return (
        <div
            className="relative size-full text-white rounded-3xl p-5 flex flex-col justify-between shadow-md hover:shadow-lg transition"
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="text-3xl">{icon}</div>
            <div className="text-left">
                <h1 className="bento-title mt-4 font-semibold text-left">{title}</h1>
                {description && (
                    <p className="mt-2 max-w-64 text-sm opacity-80 text-left">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );
};

// Features Component
const Features = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the title and subtitle on scroll
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
            id="why-choose-us"
            ref={containerRef}
            className="bg-[#d0c3f1] dark:bg-black py-32 flex items-center justify-center"
        >
            <div className="container mx-auto px-3 md:px-10 flex flex-col items-center justify-center text-center">
                <div className="mb-8">
                    <p
                        ref={titleRef}
                        className="font-bold text-6xl text-gray-800 dark:text-white opacity-0"
                    >
                        Why Choose Us
                    </p>
                </div>
                <div>
                    <p
                        ref={subtitleRef}
                        className="max-w-md text-lg text-gray-800 dark:text-white opacity-0"
                    >
                        Discover the advantages that make our platform stand out and why users trust us every day.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 md:grid-rows-2 mt-20">
                    <BentoTilt className="h-[35vh] w-full overflow-hidden rounded-5xl">
                        <BentoCard
                            title="Trusted Reseller"
                            description="We’ve built a reputation as a reliable and professional reseller you can depend on."
                            bgImage='/11.png'
                        />
                    </BentoTilt>

                    <BentoTilt className="h-[35vh] w-full overflow-hidden rounded-5xl">
                        <BentoCard
                            title="Secure Transactions"
                            description="Your privacy and security are our top priority, with encrypted and safe processes at every step."
                            bgImage='/21.png'
                        />
                    </BentoTilt>

                    <BentoTilt className="h-[35vh] w-full overflow-hidden rounded-5xl">
                        <BentoCard
                            title="Fast Payouts"
                            description="Experience instant and hassle-free payouts that keep your business moving forward."
                            bgImage='/31.png'
                        />
                    </BentoTilt>

                    <BentoTilt className="h-[35vh] w-full overflow-hidden rounded-5xl">
                        <BentoCard
                            title="24/7 Support"
                            description="Our expert support team is always here to help—anytime, anywhere."
                            bgImage='/41.png'
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    );
};

export default Features;
