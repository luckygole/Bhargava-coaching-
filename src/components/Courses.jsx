// function Courses() {
//   const courses = [
//     {
//       title: "JEE Preparation",
//       desc: "Comprehensive preparation for JEE Main & Advanced with expert faculty.",
//       duration: "2 Years Program",
//     },
//     {
//       title: "NEET Preparation",
//       desc: "Structured biology-focused coaching with mock tests & doubt sessions.",
//       duration: "2 Years Program",
//     },
//     {
//       title: "Board Exam Classes",
//       desc: "Focused preparation for Class 10th & 12th board examinations.",
//       duration: "1 Year Program",
//     },
//     {
//       title: "Foundation Course",
//       desc: "Strong academic foundation for students from Class 8 to 10.",
//       duration: "1 Year Program",
//     },
//     {
//       title: "JEE Preparation",
//       desc: "Comprehensive preparation for JEE Main & Advanced with expert faculty.",
//       duration: "2 Years Program",
//     },
//     {
//       title: "NEET Preparation",
//       desc: "Structured biology-focused coaching with mock tests & doubt sessions.",
//       duration: "2 Years Program",
//     },
//     {
//       title: "Board Exam Classes",
//       desc: "Focused preparation for Class 10th & 12th board examinations.",
//       duration: "1 Year Program",
//     },
//     {
//       title: "Foundation Course",
//       desc: "Strong academic foundation for students from Class 8 to 10.",
//       duration: "1 Year Program",
//     },
//   ];

//   return (
//     <section
//       id="courses"
//       className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-100"
//     >
//       <div className="max-w-7xl mx-auto text-center">

//         {/* Section Heading */}
//         <h2 className="text-4xl font-bold text-slate-900">
//           Our <span className="text-blue-600">Courses</span>
//         </h2>

//         <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
//           We offer result-oriented coaching programs designed to help
//           students achieve excellence in competitive and board examinations.
//         </p>

//         {/* Cards Grid */}
//         <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

//           {courses.map((course, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg p-6 text-left 
//               hover:shadow-2xl hover:-translate-y-2 transition duration-300"
//             >
//               <h3 className="text-xl font-semibold text-slate-900">
//                 {course.title}
//               </h3>

//               <p className="mt-3 text-slate-600 text-sm">
//                 {course.desc}
//               </p>

//               <p className="mt-4 text-blue-600 font-medium">
//                 {course.duration}
//               </p>

//               <a
//                 href="#contact"
//                 className="inline-block mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//               >
//                 Enroll Now
//               </a>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

// export default Courses;

import { motion } from "framer-motion";

function Courses() {
  const courses = [
    {
      title: "JEE Preparation",
      desc: "Comprehensive preparation for JEE Main & Advanced with expert faculty.",
      duration: "2 Years Program",
    },
    {
      title: "NEET Preparation",
      desc: "Structured biology-focused coaching with mock tests & doubt sessions.",
      duration: "2 Years Program",
    },
    {
      title: "Board Exam Classes",
      desc: "Focused preparation for Class 10th & 12th board examinations.",
      duration: "1 Year Program",
    },
    {
      title: "Foundation Course",
      desc: "Strong academic foundation for students from Class 8 to 10.",
      duration: "1 Year Program",
    },
    {
      title: "JEE Preparation",
      desc: "Comprehensive preparation for JEE Main & Advanced with expert faculty.",
      duration: "2 Years Program",
    },
    {
      title: "NEET Preparation",
      desc: "Structured biology-focused coaching with mock tests & doubt sessions.",
      duration: "2 Years Program",
    },
    {
      title: "Board Exam Classes",
      desc: "Focused preparation for Class 10th & 12th board examinations.",
      duration: "1 Year Program",
    },
    {
      title: "Foundation Course",
      desc: "Strong academic foundation for students from Class 8 to 10.",
      duration: "1 Year Program",
    },
  ];

  return (
    <section
      id="courses"
      className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold text-slate-900">
          Our <span className="text-blue-600">Courses</span>
        </h2>

        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          We offer result-oriented coaching programs designed to help
          students achieve excellence in competitive and board examinations.
        </p>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              whileHover="hover"
              transition={{ duration: 0.6, ease: "backInOut" }}
              variants={{
                hover: { scale: 1.05 },
              }}
              className="relative h-[340px] overflow-hidden rounded-2xl 
              bg-blue-600 p-6 text-left text-white shadow-xl"
            >
              {/* Content */}
              <div className="relative z-10">
                <span className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs">
                  Popular Course
                </span>

                <motion.h3
                  initial={{ scale: 0.95 }}
                  variants={{
                    hover: { scale: 1 },
                  }}
                  transition={{ duration: 0.6 }}
                  className="text-xl font-bold mt-2"
                >
                  {course.title}
                </motion.h3>

                <p className="mt-3 text-sm text-blue-100">
                  {course.desc}
                </p>

                <p className="mt-4 font-semibold text-white">
                  {course.duration}
                </p>
              </div>

              {/* Button */}
              <a
                href="#contact"
                className="absolute bottom-6 left-6 right-6 z-20 rounded-lg 
                bg-white py-2 text-center font-semibold text-blue-600 
                transition hover:bg-white/30 hover:text-white border border-white"
              >
                Enroll Now
              </a>

              {/* Background Animation */}
              <motion.div
                variants={{
                  hover: { scale: 1.5 },
                }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 z-0"
              >
                <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-indigo-800 opacity-40"></div>
                <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full bg-indigo-900 opacity-40"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;