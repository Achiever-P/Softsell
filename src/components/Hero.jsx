import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef } from "react";
import Button from "./Button.jsx";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text animation
            gsap.from(textRef.current, {
                y: 80,
                opacity: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            });

            // Button animation
            gsap.from(buttonRef.current, {
                y: 60,
                opacity: 0,
                duration: 1.6,
                delay: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            });

            // Clip-path animation
            gsap.to(containerRef.current, {
                clipPath: "polygon(0 0, 100% 0, 100% 85%, 15% 100%)",
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="home">
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-20"
            style={{
                backgroundImage: 'url("/hero.png")',  // Background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                borderRadius: '0 0 10% 10%',
            }}
            id="Hero"
            ref={containerRef}
        >
            <div className="text-white text-center max-w-[90rem] w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center gap-6">
                    <div
                        className="flex flex-col items-center gap-4 sm:gap-6 text-center px-4"
                        ref={textRef}
                    >
                        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[72px] font-semibold leading-tight max-w-full md:max-w-5xl">
                            Turn Unused Software Into Cash
                        </h2>

                        <h5 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium leading-snug max-w-xl">
                            SoftSell helps you sell your old software licenses quickly and securely.
                        </h5>
                    </div>

                    <div className="mt-6" ref={buttonRef}>
                        <Button
                            id="product-button"
                            title="Get a Free Quote"
                            rightIcon={<TiLocationArrow />}
                            containerClass="bg-blue-50 text-black px-6 py-3 flex items-center justify-center gap-2 text-base sm:text-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Hero;
