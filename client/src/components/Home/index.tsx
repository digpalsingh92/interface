"use client";

import React from "react";
import MainSection from "./components/MainSection";
import SecondSection from "./components/SecondSection";
import {ClientTestimonials} from "./components/ClientTestimonials";
import Appointment from "./components/Appointment";
import DoctorSection from "./components/Doctors";

export default function HomePage() {
  return (
    <div className=" w-full h-auto flex flex-col items-center">
      <MainSection />
      <SecondSection />
      <Appointment />
      <ClientTestimonials />
      <DoctorSection/>
    </div>
  );
}
