"use client";

import React from "react";
import MainSection from "./components/MainSection";
import SecondSection from "./components/SecondSection";
import {ClientTestimonials} from "./components/ClientTestimonials";

export default function HomePage() {
  return (
    <div className=" w-full h-auto bg-[#e6f2ff] flex flex-col items-center">
      <MainSection />
      <SecondSection />
      <ClientTestimonials />
    </div>
  );
}
