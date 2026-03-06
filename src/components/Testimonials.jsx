import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      course: "JEE 2024",
      text: "Bhaskar Coaching Classes helped me build strong concepts and confidence. The mock tests and personal mentorship played a huge role in my success.",
    },
    {
      name: "Anjali Verma",
      course: "NEET 2023",
      text: "The faculty is extremely supportive and experienced. Regular doubt sessions and structured study plans made my preparation smooth and effective.",
    },
    {
      name: "Priya Singh",
      course: "Board Exams 2023",
      text: "The teaching method is clear and practical. I improved my scores significantly thanks to the guidance and consistent practice.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section
      id="testimonials"
      className="relative py-28 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-400/20 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-slate-900"
        >
          Loved by Our <span className="text-indigo-600">Students</span>
        </motion.h2>

        <p className="mt-6 text-slate-600 text-lg">
          Real feedback from our achievers.
        </p>

        {/* Card */}
        <div className="mt-20 relative flex justify-center">

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
              className="relative max-w-3xl w-full bg-white/70 backdrop-blur-xl
              border border-indigo-100 rounded-3xl p-12 shadow-2xl"
            >
              {/* Big Quote Mark */}
              <div className="absolute -top-6 left-8 text-6xl text-indigo-200 font-bold">
                “
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>

              <p className="text-xl text-slate-700 leading-relaxed">
                {testimonials[index].text}
              </p>

              <div className="mt-10">
                <h4 className="text-lg font-semibold text-slate-900">
                  {testimonials[index].name}
                </h4>
                <p className="text-indigo-600 text-sm mt-1">
                  {testimonials[index].course}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 transition-all duration-300 rounded-full ${
                i === index
                  ? "w-8 bg-indigo-600"
                  : "w-3 bg-gray-300 hover:bg-indigo-400"
              }`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;