import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        });

        // Show the button first
        gsap.fromTo(
            "#contact-button",
            { opacity: 1 },
            {
                opacity: 0,
                scrollTrigger: {
                    trigger: "#clip",
                    start: "center center",
                    end: "+=400 center",
                    scrub: 0.5,
                },
            }
        );

        // Show the form later
        gsap.fromTo(
            "#contact-form",
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: "#clip",
                    start: "+=400 center",
                    end: "+=800 center",
                    scrub: 0.5,
                },
            }
        );
    });

    return (
        <section id='contact'>
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-10 flex flex-col items-center px-4 text-center gap-6">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug max-w-3xl">
                    Have questions or ready to sell your{" "}
                    <span className="block md:inline">software license?</span> Our team is here to help.
                </h2>
                <div className="about-subtext font-sans text-base max-w-2xl">
                    <p className="text-lg font-semibold text-black dark:text-white">Get in Touch</p>
                    <p className="text-gray-600 dark:text-white">
                        We are happy to answer your questions, walk you through the process, or help you get started.
                        Fill out the form and we’ll respond within one business day.
                    </p>
                </div>
            </div>

            <div className="relative h-dvh w-screen" id="clip">
                <div className="mask-clip-path about-image">
                    <img
                        src="/Softshell.png"
                        alt="Background"
                        className="absolute left-0 top-0 size-full object-cover"
                    />

                    {/* Contact Us Button */}
                    <div
                        id="contact-button"
                        className="absolute inset-0 z-10 m-auto h-fit w-fit px-6 py-3 bg-black text-white rounded-full text-sm md:text-base font-medium transition-opacity duration-300 flex items-center justify-center"
                    >
                        Contact Us
                    </div>

                    {/* Contact Form */}
                    <form
                        id="contact-form"
                        className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-0 text-white backdrop-blur-md bg-black/50 dark:bg-white/30 p-10 rounded-2xl"
                    >
                        {/* Title & Subtitle */}
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold mb-1">Let’s Get in Touch</h2>
                            <p className="text-lg text-gray-300">
                                Fill out the form below and we’ll get back to you as soon as possible.
                            </p>
                        </div>

                        <div className="flex flex-col items-center space-y-4 py-10 px-4">
                            {/* Name */}
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#242a3b] dark:text-white bg-white dark:bg-[#1e1e1e] placeholder-[#3e424f]"
                                required
                            />

                            {/* Email */}
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#242a3b] dark:text-white bg-white dark:bg-[#1e1e1e]  placeholder-[#3e424f]"
                                required
                            />

                            {/* Company */}
                            <input
                                type="text"
                                placeholder="Company"
                                className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#242a3b] dark:text-white bg-white dark:bg-[#1e1e1e]  placeholder-[#3e424f]"
                            />

                            {/* License Type Dropdown */}
                            <select
                                className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#1e1e1e] text-[#3e424f] dark:text-[#3e424f] custom-select"
                                required
                            >
                                <option value="" disabled selected className="text-[#3e424f]">Select License Type
                                </option>
                                <option value="Microsoft" className="text-[#3e424f]">Microsoft</option>
                                <option value="Adobe" className="text-[#3e424f]">Adobe</option>
                                <option value="Autodesk" className="text-[#3e424f]">Autodesk</option>
                                <option value="Other" className="text-[#3e424f]">Other</option>
                            </select>


                            {/* Message */}
                            <textarea
                                placeholder="Tell us about your license or ask a question"
                                rows="5"
                                className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-[#242a3b] dark:text-white bg-white dark:bg-[#1e1e1e]  placeholder-[#3e424f]"
                            />

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
    );
};

export default About;
