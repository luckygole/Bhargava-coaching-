import { motion } from "framer-motion";
import pic from "../assets/pic.jpeg";
// import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden"
    >
      {/* Background Glow Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-300 opacity-20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute w-80 h-80 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>
              <img
                src={pic}
                alt="Director"
                className="relative w-80 md:w-96 rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
              About <span className="text-blue-600">Bhargava Coaching Classes</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              Bhaskar Coaching Classes is dedicated to delivering
              high-quality, structured, and result-oriented education.
              Our mission is to empower students with strong concepts,
              confidence, and the right mentorship to excel in competitive
              and board examinations.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              With experienced faculty, regular assessments, and
              personalized attention, we ensure every student reaches
              their highest potential.
            </p>
          </motion.div>

        </div>

        {/* FEATURES SECTION */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">

          {[
            "Experienced Faculty",
            "Regular Mock Tests",
            "Personal Mentorship",
            "Small Batch Size",
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 text-center"
            >
              <h4 className="font-semibold text-lg text-slate-900">
                {feature}
              </h4>
            </motion.div>
          ))}

        </div>

         {/* STATS SECTION */}
      <div className="grid md:grid-cols-3 gap-8 mt-24 text-center">
        {[
          { number: 500, label: "Students Enrolled", suffix: "+" },
          { number: 95, label: "Success Rate", suffix: "%" },
          { number: 10, label: "Years of Excellence", suffix: "+" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-3xl font-bold">
              <CountUp end={stat.number} suffix={stat.suffix} />
            </h3>
            <p className="mt-2 text-blue-100">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      

        {/* STATS SECTION */}
        {/* <div className="grid md:grid-cols-3 gap-8 mt-24 text-center">

          {[
            { number: "500+", label: "Students Enrolled" },
            { number: "95%", label: "Success Rate" },
            { number: "10+", label: "Years of Excellence" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-3xl font-bold">{stat.number}</h3>
              <p className="mt-2 text-blue-100">{stat.label}</p>
            </motion.div>
          ))}

        </div> */}

      </div>
    </section>
  );
}

export default About;

const CountUp = ({ end, duration = 1500, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};