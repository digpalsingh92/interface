import { motion } from "framer-motion";
import Image from "next/image";
import Doctor from "@/assets/cartoon_doctor.png";

const Appointment = () => {
  return (
    <div className="relative bg-gradient-to-tr from-blue-400 to-blue-200 p-4 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between space-y-6 space-x-6 md:space-y-0 md:space-x-6">
      {/* Text Section */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg text-center md:text-left"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Schedule Your Appointment<br />with us</h2>
        <p className="text-gray-700 mt-4 text-sm md:text-base">
          We're here to help! Whether you have inquiries about our services, need assistance, 
          or simply want more information, feel free to reach out.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-lg"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full md:w-1/3 flex justify-center relative"
      >
        <Image src={Doctor} alt="Cartoon Doctor" className="max-w-[200px] md:max-w-[300px] lg:max-w-[400px]" />
      </motion.div>
    </div>
  );
};

export default Appointment;
