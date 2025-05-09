import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FloatingImage from "./FloatingImage.jsx";
import gsap from "gsap";

const testimonials = [
  {
    name: "Alice Johnson",
    title: "Software Engineer",
    message:
        "This platform made it incredibly easy to sell my unused licenses. The valuation was fair, and I received my payment in no time!",
    image: "/t1.jpg",
  },
  {
    name: "Mark Thompson",
    title: "IT Consultant",
    message:
        "I’ve tried multiple services before, but this one stands out. Transparent, fast, and reliable. Highly recommended.",
    image: "/t2.jpg",
  },
  {
    name: "Sara Lee",
    title: "Freelancer",
    message:
        "I was unsure at first, but the team’s support and the seamless process won me over. Great service!",
    image: "/t3.jpg",
  },
  {
    name: "Tom Wang",
    title: "Product Manager",
    message:
        "Selling software licenses has never been this easy. Love the user interface and prompt customer service.",
    image: "/t4.jpg",
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const cardsRef = useRef([]);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 320;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 320;
  };

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        y: 10,
        duration: 2 + index * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, []);

  return (
      <section
          id="testimonials"
          className="bg-[#dfdff2] dark:bg-black py-24 transition-colors duration-300"
      >
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white">Testimonials</h2>
          <p className="text-lg text-gray-700 dark:text-white mt-3 opacity-70">
            Hear from our satisfied customers
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal Scrollable Cards */}
          <div
              ref={scrollRef}
              className="flex overflow-x-auto overflow-y-hidden no-scrollbar space-x-6 py-6 px-4"
              style={{scrollBehavior: "smooth"}}
          >
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    ref={(el) => (cardsRef.current[index] = el)}
                    className="min-w-[300px] h-[400px] bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between"
                >
                  <p className="text-gray-700 text-lg italic">
                    “{testimonial.message}”
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-gray-900 font-semibold">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-500 text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-6 gap-6">
            <button
                onClick={scrollLeft}
                className="p-3 bg-white text-gray-800 rounded-full shadow hover:scale-105 transition"
                aria-label="Scroll Left"
            >
              <ChevronLeft size={24}/>
            </button>
            <button
                onClick={scrollRight}
                className="p-3 bg-white text-gray-800 rounded-full shadow hover:scale-105 transition"
                aria-label="Scroll Right"
            >
              <ChevronRight size={24}/>
            </button>
          </div>
        </div>
      </section>
  );
};

export default Testimonials;
