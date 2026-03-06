// import { Typewriter } from "react-simple-typewriter";
// // import pic1 from "../assets/pic1.jpeg";
// import mayank from "../assets/mayanksir1.jpg";

// function Hero() {
//   return (
   

//     // <section
//     //   id="home"
//     //   className="relative min-h-screen flex items-center px-6 
//     //   bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white overflow-hidden"
//     // >
//     <section
//   // id="home"
//   // className="relative min-h-screen flex items-center px-6 
//   // bg-[linear-gradient(to_top,_#e8198b_0%,_#c7eafd_100%)] 
//   // text-white overflow-hidden"

//  id="home"
//   className="relative min-h-screen flex items-center px-6 
//   bg-[linear-gradient(to_top,_#ff512f_0%,_#f09819_100%)]
//   text-white overflow-hidden"

//   //  id="home"
//   //     className="relative min-h-screen flex items-center px-6 
//   //     bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white overflow-hidden"
// >
//       {/* Background Glow Effect */}
//       <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-20 right-10 w-72 h-72 bg-black-300 opacity-20 rounded-full blur-3xl"></div>

//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

//         {/* LEFT SIDE */}
//         <div className="space-y-6">

//           {/* Coaching Name */}
//           <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black">
//             Bhaskar <br />
//             <span className="text-black">
//               Coaching Classes
//             </span>
//           </h1>

//           {/* Typing Effect */}
//           <h2 className="text-2xl md:text-3xl font-semibold text-black">
//             Preparing Students for{" "}
//             <span className="text-white">
//               <Typewriter
//                 words={["JEE", "NEET", "Board Exams", "Competitive Exams"]}
//                 loop={0}
//                 cursor
//                 cursorStyle="|"
//                 typeSpeed={80}
//                 deleteSpeed={50}
//                 delaySpeed={1500}
//               />
//             </span>
//           </h2>

//           {/* Description */}
//           <p className="text-blue-100 text-lg max-w-lg">
//             We provide expert mentorship, structured learning programs,
//             and result-oriented preparation to help students achieve
//             academic excellence and secure top ranks.
//           </p>

//           {/* Buttons */}
//           <div className="flex gap-4">
//             <a
//               href="#contact"
//               className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-xl shadow-lg hover:bg-yellow-300 transition duration-300"
//             >
//               Enroll Now
//             </a>

//             <a
//               href="#courses"
//               className="px-6 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition duration-300"
//             >
//               View Courses
//             </a>
//           </div>
//         </div>

//         {/* RIGHT SIDE - IMAGE */}
//         <div className="flex justify-center relative">

//           {/* Glow Behind Image */}
//           <div className="absolute w-80 h-80 bg-yellow-300 opacity-20 rounded-full blur-3xl"></div>

//           <img
//             src={mayank}
//             alt="Director - Bhaskar Coaching Classes"
//             className="relative w-80 md:w-96 rounded-3xl shadow-2xl object-cover border-4 border-white/30 h-95"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Hero;


import { Typewriter } from "react-simple-typewriter";
import mayank from "../assets/mayanksir1.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 px-6 
      bg-[linear-gradient(to_top,_#ff512f_0%,_#f09819_100%)]
      text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-black/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">

        {/* LEFT SIDE */}
        <div className="space-y-6 text-center lg:text-left">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-black">
            Bhargava <br />
            <span className="text-black">
              Coaching Classes
                 {/* Educational Academy */}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black">
            Preparing Students for{" "}
            <span className="text-white">
              <Typewriter
                words={["JEE", "NEET", "Board Exams", "Competitive Exams"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="text-blue-100 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
            We provide expert mentorship, structured learning programs,
            and result-oriented preparation to help students achieve
            academic excellence and secure top ranks.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-xl shadow-lg hover:bg-yellow-300 transition duration-300"
            >
              Enroll Now
            </a>

            <a
              href="#courses"
              className="px-6 py-3 border border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition duration-300"
            >
              View Courses
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center mt-10 lg:mt-0 relative pb-6">

          <div className="absolute w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80 bg-yellow-300 opacity-20 rounded-full blur-3xl "></div>

          <img
            src={mayank}
            alt="Director - Bhaskar Coaching Classes"
            className="relative w-64 sm:w-72 md:w-80 lg:w-96 
            rounded-3xl shadow-2xl object-cover 
            border-4 border-white/30"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;