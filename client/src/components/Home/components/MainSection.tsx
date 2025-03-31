import { Button } from "@/components/ui/button";
import Doctor from "../../../assets/Doctor.png";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MainSection() {
  return (
    <motion.div className="container flex flex-col items-center"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 10 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Main Content */}
      <div className="w-[90%] container lg:w-[70%] h-full p-4 font-semibold flex flex-col-reverse lg:flex-row justify-around items-center">
        {/* Left Section */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-center lg:items-start p-4 text-center lg:text-left">
          <p className="text-[2rem] md:text-[3rem] lg:text-[4rem] w-full md:w-[80%] font-bold leading-tight">
            Quality & Expert Care for Your Health
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start w-full">
            <Button className="bg-blue-600 font-mono px-6 py-2 w-full sm:w-auto">
             <Link href={"/login"}>
             Book an Appointment
             </Link>
            </Button>
            <Button className="bg-transparent hover:bg-transparent shadow-none text-black font-bold font-sans flex items-center w-full sm:w-auto">
              View Services
              <MoveRight size={24} className="ml-2" />
            </Button>
          </div>
        </div>

        {/* Right Section (Doctor Image) */}
        <div className="w-full lg:w-[50%] flex flex-col sm:flex-col justify-center items-center relative">
          {/* Gradient Background */}
          <div className="bg-gradient-to-b from-slate-400 w-[15rem] h-[15rem] md:w-[15rem] md:h-[20rem] lg:w-[20rem] lg:h-[20rem] rounded-2xl absolute z-0 inset-0 mx-auto"></div>

          {/* Doctor Image */}
          <img
            src={Doctor.src}
            alt="Doctor"
            className="h-[20rem] md:h-[22rem] lg:h-[25rem] w-auto max-w-full z-10 relative"
          />
        </div>
      </div>

      {/* Info Section */}
      {/* <div className="bg-[#8ac4f8] w-full h-24 flex z-10 flex-wrap rounded-2xl justify-around p-4">
        <div className="flex flex-col items-center m-2">
          <span className="text-3xl md:text-4xl text-white font-bold">
            24/7
          </span>
          <span className="text-sm text-white">Online Support</span>
        </div>
        <div className="flex flex-col items-center m-2">
          <span className="text-3xl md:text-4xl text-white font-bold">10+</span>
          <span className="text-sm text-white">Doctors</span>
        </div>
        <div className="flex flex-col items-center m-2">
          <span className="text-3xl md:text-4xl text-white font-bold">
            1,000+
          </span>
          <span className="text-sm text-white">Active Patients</span>
        </div>
      </div> */}
    </motion.div>
  );
}
