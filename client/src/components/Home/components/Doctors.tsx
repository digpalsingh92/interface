"use client";

import Image from "next/image";
import React from "react";
import Doctor from "@/assets/Doctor.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const doctorInfo = [
  { id: 1, name: "Dr. John Doe", image: Doctor, specialty: "Cardiologist" },
  { id: 2, name: "Dr. Jane Doe", image: Doctor, specialty: "Neurologist" },
  { id: 3, name: "Dr. Ankit Singh", image: Doctor, specialty: "Surgeon" },
  { id: 4, name: "Dr. Digpal Singh", image: Doctor, specialty: "Pediatrician" },
  { id: 5, name: "Dr. Yash Rathore", image: Doctor, specialty: "Veterinarian" },
  { id: 6, name: "Dr. Sophia Patel", image: Doctor, specialty: "Dermatologist" },
  { id: 7, name: "Dr. Raj Mehta", image: Doctor, specialty: "Oncologist" },
];

const DoctorCard = ({ name, image, specialty }: { name: string; image: any; specialty: string }) => {
  return (
    <Card className="relative w-full h-96 rounded-xl overflow-hidden bg-gradient-to-br from-blue-300 to-blue-200">
      {/* Doctor Image */}
      <Image src={image} alt={name} className="absolute inset-0 w-full h-full object-cover" />

      {/* Overlay Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      {/* Doctor Info */}
      <CardContent className="absolute bottom-4 left-4 text-white">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-200">{specialty}</p>
      </CardContent>
    </Card>
  );
};

const DoctorSection = () => {
  return (
    <div className="container px-4 py-10 md:py-16 text-center">
      {/* Heading */}
      <div className="text-center px-4 py-10 md:py-16">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-black flex flex-wrap items-center justify-center gap-2">
        Designed for{" "}
        <span className="relative flex items-center">
          {/* Profile Pictures Overlapping */}
          <span className="flex">
            <Image src={Doctor} alt="User 1" className="w-16 h-16 md:w-14 md:h-14 shadow-md rounded-full" />
            <Image src={Doctor} alt="User 1" className="w-16 h-16 md:w-14 md:h-14 shadow-md rounded-full -ml-3" />
            <Image src={Doctor} alt="User 1" className="w-16 h-16 md:w-14 md:h-14 shadow-md rounded-full -ml-3" />
            <Image src={Doctor} alt="User 1" className="w-16 h-16 md:w-14 md:h-14 shadow-md rounded-full -ml-3" />
            <Image src={Doctor} alt="User 1" className="w-16 h-16 md:w-14 md:h-14 shadow-md rounded-full -ml-3" />
          </span>
          <span className="ml-4">specialists</span>
        </span>
        leading healthcare excellence.
      </h1>

      {/* Subheading */}
      <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto mt-4">
        Discover a platform designed for trailblazing specialists. Our resources empower leaders in healthcare innovation and excellence.
      </p>
    </div>
      {/* Carousel Slider */}
      <div className="mt-10 max-w-6xl mx-auto">
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {doctorInfo.map((doctor) => (
              <CarouselItem
                key={doctor.id}
                className="pl-1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4" // Shows 4–5 slides at a time
              >
                <div className="p-1">
                  <DoctorCard name={doctor.name} image={doctor.image} specialty={doctor.specialty} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default DoctorSection;
