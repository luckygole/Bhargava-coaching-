import { motion } from "framer-motion";

function Courses() {
 const courses = [
  {
    title: "Class 6th - 8th Foundation Program",
    desc: "Build strong fundamentals in mathematics, science, and logical reasoning for middle school students.",
    duration: "1 Year Program",
  },
  {
    title: "Class 9th Academic Coaching",
    desc: "Complete subject guidance for Class 9 students with concept-based learning and regular assessments.",
    duration: "1 Year Program",
  },
  {
    title: "Class 10th Board Preparation",
    desc: "Comprehensive preparation for Class 10 board exams with mock tests, revision sessions, and doubt solving.",
    duration: "1 Year Program",
  },
  {
    title: "Class 11th Subject Coaching",
    desc: "In-depth coaching for Class 11 students focusing on core concepts in science, commerce, and mathematics.",
    duration: "1 Year Program",
  },
  {
    title: "Class 12th Board Preparation",
    desc: "Focused coaching for Class 12 board exams with expert faculty, practice papers, and revision strategies.",
    duration: "1 Year Program",
  },
  {
    title: "Spoken English & Communication Skills",
    desc: "Enhance spoken English, grammar, and communication confidence through interactive sessions.",
    duration: "6 Months Program",
  },
  {
    title: "Computer Basics & Digital Skills",
    desc: "Learn computer fundamentals, MS Office tools, internet usage, and basic digital literacy.",
    duration: "6 Months Program",
  },
  {
    title: "Crash Course for Board Exams",
    desc: "Short-term intensive program for quick revision, important topics coverage, and practice test series.",
    duration: "3-4 Months Program",
  }

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