import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaStar } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Doctor from "@/assets/Doctor.png";
import Image from "next/image";
import FloatingShape from "@/components/ui/Shape";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    image: Doctor,
    name: "John Doe",
    title: "CEO",
    ratings: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: Doctor,
    name: "Jane Doe",
    title: "CTO",
    ratings: 3,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    image: Doctor,
    name: "John Smith",
    title: "CFO",
    ratings: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    image: Doctor,
    name: "Alice Brown",
    title: "CMO",
    ratings: 4,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    image: Doctor,
    name: "Robert Wilson",
    title: "COO",
    ratings: 5,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export function ClientTestimonials() {
  return (
    <motion.div
      className="flex flex-col w-full relative items-center px-8 py-8"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <FloatingShape
        color="bg-blue-800"
        size="w-16 h-16 md:w-24 md:h-24"
        top="10%"
        left="80%"
        delay={0}
      />
      <FloatingShape
        color="bg-green-500"
        size="w-16 h-16 md:w-24 md:h-24"
        top="10%"
        left="60%"
        delay={0}
      />
      <FloatingShape
        color="bg-blue-300"
        size="w-16 h-16 md:w-24 md:h-24"
        top="50%"
        left="40%"
        delay={1}
      />
      <FloatingShape
        color="bg-green-300"
        size="w-16 h-16 md:w-24 md:h-24"
        top="10%"
        left="5%"
        delay={0}
      />
      <FloatingShape
        color="bg-blue-200"
        size="w-16 h-16 md:w-24 md:h-24"
        top="-10%"
        left="35%"
        delay={1}
      />
      <FloatingShape
        color="bg-green-200"
        size="w-16 h-16 md:w-24 md:h-24"
        top="-10%"
        left="35%"
        delay={0}
      />
      <Carousel className="w-full max-w-[80rem]">
        <CarouselContent className="-ml-2">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="px-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card
                className={`flex flex-col items-center bg-[] justify-between shadow-none w-full`}
              >
                <CardHeader className="flex flex-row items-center justify-start w-full gap-4">
                  <span className="w-20 h-20 rounded-full flex items-center justify-center bg-gray-200">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </span>
                  <CardTitle className="">
                    <div className="gap-1 flex items-center">
                      <span>{testimonial.name} -</span>
                      <span>{testimonial.title}</span>
                    </div>
                  </CardTitle>
                </CardHeader>

                <CardContent className="">
                  <p className="text-gray-800">{testimonial.content}</p>
                  <div className="flex mt-3">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FaStar
                        key={index}
                        className={`text-xl ${
                          index < testimonial.ratings
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Prev & Next Buttons - Visible only on large screens */}
        <CarouselPrevious className="hidden md:flex absolute left-[-2.5rem] top-1/2 -translate-y-1/2" />
        <CarouselNext className="hidden md:flex absolute right-[-2.5rem] top-1/2 -translate-y-1/2" />
      </Carousel>
    </motion.div>
  );
}
