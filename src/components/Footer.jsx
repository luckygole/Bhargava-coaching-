import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 pt-20 pb-10 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Column 1 - Brand */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-indigo-600">
            Bhargava Coaching
          </h2>
          <p className="mt-4 text-slate-600">
            Empowering students with quality education, structured learning,
            and dedicated mentorship.
          </p>

          <div className="flex gap-4 mt-6">
            <SocialIcon><FaFacebookF /></SocialIcon>
            <SocialIcon><FaInstagram /></SocialIcon>
          </div>
        </motion.div>

        {/* Column 2 - Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-slate-900">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-slate-600">
            <FooterLink href="#home">Home</FooterLink>
            <FooterLink href="#courses">Courses</FooterLink>
            <FooterLink href="#about">About</FooterLink>
            <FooterLink href="#testimonials">Testimonials</FooterLink>
            <FooterLink href="#contact">Contact</FooterLink>
          </ul>
        </motion.div>

        {/* Column 3 - Courses */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-slate-900">Our Courses</h3>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li>Class 9-10</li>
            <li>Class 11-12</li>
            <li>JEE Preparation</li>
            <li>NEET Preparation</li>
            <li>Board Exams</li>
          </ul>
        </motion.div>

        {/* Column 4 - Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold text-slate-900">Contact Us</h3>

          <div className="mt-4 space-y-4 text-slate-600">

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-indigo-600" />
              <span>Koshmoda road, Vikash Nagar , Guna M.P</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-indigo-600" />
              <span>+91 9179493156</span>
              <span>+91 9630593156</span>

            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-indigo-600" />
              <span>info@bhargavacoaching.com</span>
            </div>

          </div>
        </motion.div>

      </div>

      {/* Bottom Strip */}
      <div className="border-t border-indigo-100 mt-16 pt-6 text-center text-slate-500 text-sm">
         {/* {new Date().getFullYear()}  */}
        {/* Bhaskar Coaching Classes. All rights reserved. */}
          Developed by <b>Lucky Gole</b> &nbsp; &  <b>Bhumika sahu</b>
      </div>

      {/* Soft Glow */}
      <div className="absolute top-10 right-10 w-60 h-60 bg-blue-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-indigo-400/20 blur-3xl rounded-full"></div>

    </footer>
  );
}

/* Reusable Footer Link */
function FooterLink({ children, href }) {
  return (
    <li>
      <a
        href={href}
        className="hover:text-indigo-600 transition duration-300 hover:translate-x-1 inline-block"
      >
        {children}
      </a>
    </li>
  );
}

/* Social Icon Component */
function SocialIcon({ children }) {
  return (
    <div className="w-9 h-9 flex items-center justify-center rounded-full 
    bg-indigo-600 text-white cursor-pointer 
    hover:bg-indigo-700 hover:scale-110 transition duration-300">
      {children}
    </div>
  );
}

export default Footer;