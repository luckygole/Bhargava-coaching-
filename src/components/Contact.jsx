// // import { motion } from "framer-motion";
// // import { useState } from "react";

// // function Contact() {
// //   const [formData, setFormData] = useState({
// //     studentName: "",
// //     fatherName: "",
// //     class: "",
// //     dob: "",
// //     phone: "",
// //     email: "",
// //     address: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(formData);
// //     alert("Admission Form Submitted Successfully!");
// //   };

// //   return (
// //     <section
// //       id="contact"
// //       className="relative py-28 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden"
// //     >
// //       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

// //         {/* LEFT SIDE CONTENT */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -60 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.7 }}
// //           viewport={{ once: true }}
// //         >
// //           <h2 className="text-5xl font-bold text-slate-900 leading-tight">
// //             Start Your <span className="text-indigo-600">Journey</span> With Us
// //           </h2>

// //           <p className="mt-6 text-slate-600 text-lg">
// //             Fill the admission form and take the first step towards your
// //             academic success. Our team will contact you shortly.
// //           </p>

// //           <div className="mt-10 space-y-4 text-slate-700">
// //             <p>✔ Personalized Mentorship</p>
// //             <p>✔ Structured Study Plans</p>
// //             <p>✔ Weekly Performance Tracking</p>
// //           </div>
// //         </motion.div>

// //         {/* RIGHT SIDE FORM */}
// //         <motion.div
// //           initial={{ opacity: 0, x: 60 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.7 }}
// //           viewport={{ once: true }}
// //           className="relative"
// //         >
// //           <div
// //             className="bg-white/70 backdrop-blur-xl border border-indigo-100
// //             rounded-3xl p-10 shadow-2xl"
// //           >
// //             <form onSubmit={handleSubmit} className="space-y-6">

// //               <ModernInput label="Student Name" name="studentName" onChange={handleChange} />
// //               <ModernInput label="Father Name" name="fatherName" onChange={handleChange} />
// //               <ModernInput label="Class" name="class" onChange={handleChange} />
// //               <ModernInput label="Date of Birth" name="dob" type="date" onChange={handleChange} />
// //               <ModernInput label="Phone Number" name="phone" onChange={handleChange} />
// //               <ModernInput label="Email ID" name="email" type="email" onChange={handleChange} />

// //               {/* Address */}
// //               <div className="relative">
// //                 <textarea
// //                   name="address"
// //                   placeholder="Address"
// //                   rows="3"
// //                   onChange={handleChange}
// //                   required
// //                   className="w-full bg-transparent border-b border-slate-300
// //                   focus:border-indigo-500 outline-none text-slate-800
// //                   placeholder-slate-400 py-2 transition"
// //                 />
// //               </div>

// //               {/* CTA Button */}
// //               <button
// //                 type="submit"
// //                 className="w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold
// //                 hover:bg-indigo-700 transition duration-300
// //                 shadow-lg shadow-indigo-500/30 hover:scale-105"
// //               >
// //                 Submit Admission →
// //               </button>

// //             </form>
// //           </div>
// //         </motion.div>
// //       </div>

// //       {/* Soft Glow Effects */}
// //       <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full"></div>
// //       <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-400/20 blur-3xl rounded-full"></div>
// //     </section>
// //   );
// // }

// // /* Modern Input Component */
// // function ModernInput({ label, name, type = "text", onChange }) {
// //   return (
// //     <div className="relative">
// //       <input
// //         type={type}
// //         name={name}
// //         placeholder={label}
// //         onChange={onChange}
// //         required
// //         className="w-full bg-transparent border-b border-slate-300
// //         focus:border-indigo-500 outline-none text-slate-800
// //         placeholder-slate-400 py-2 transition"
// //       />
// //     </div>
// //   );
// // }

// // export default Contact;




import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    class: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
📌 *New Admission Enquiry*

👤 Student Name: ${formData.studentName}
👨 Father Name: ${formData.fatherName}
🏫 Class: ${formData.class}
🎂 DOB: ${formData.dob}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}
🏠 Address: ${formData.address}
    `;

    const encodedMessage = encodeURIComponent(message);

    const whatsappNumber = "916265580736"; 
    // 👆 Apna number daalo (91 + number, without + sign)

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    // Optional: Reset form after redirect
    setFormData({
      studentName: "",
      fatherName: "",
      class: "",
      dob: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-100 overflow-hidden"
    >
      {/* Soft Background Glow */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-200/30 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 bg-white rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden"
        >

          {/* LEFT PANEL */}
          <div className="bg-indigo-600 text-white p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-bold leading-tight">
              Join Our <br /> Academic Program
            </h2>

            <p className="mt-6 text-indigo-100">
              Take the first step toward structured learning, expert mentorship,
              and consistent academic improvement.
            </p>

            <div className="mt-10 space-y-4 text-indigo-100">
              <p>✔ Small Batch Size</p>
              <p>✔ Weekly Test Series</p>
              <p>✔ Performance Tracking</p>
              <p>✔ Personal Mentorship</p>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="p-12">
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">
              Admission Form
            </h3>

            <p className="text-sm text-slate-500 mb-6">
              After submitting, you will be redirected to WhatsApp.
            </p>

            <form
              onSubmit={handleSubmit}
              className="grid md:grid-cols-2 gap-6"
            >
              <Input label="Student Name" name="studentName" value={formData.studentName} onChange={handleChange} />
              <Input label="Father Name" name="fatherName" value={formData.fatherName} onChange={handleChange} />
              <Input label="Class" name="class" value={formData.class} onChange={handleChange} />
              <Input label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} />
              <Input label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
              <Input label="Email ID" name="email" type="email" value={formData.email} onChange={handleChange} />

              <div className="md:col-span-2">
                <textarea
                  name="address"
                  placeholder="Address"
                  rows="4"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full border border-slate-300 rounded-xl px-4 py-3
                  focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                  outline-none transition"
                />
              </div>

              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-indigo-600 text-white
                  font-semibold hover:bg-indigo-700 transition duration-300
                  shadow-md hover:shadow-lg hover:-translate-y-1"
                >
                  Submit & Connect on WhatsApp →
                </button>
              </div>
            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

/* Clean Modern Input */
function Input({ label, name, type = "text", value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={label}
      value={value}
      onChange={onChange}
      required
      className="w-full border border-slate-300 rounded-xl px-4 py-3
      focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
      outline-none transition"
    />
  );
}

export default Contact;