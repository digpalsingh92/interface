"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaStar } from "react-icons/fa";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Doctor from "@/assets/Doctor.png";

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
    <div className="flex flex-col items-center justify-center px-10 py-10">
      <Carousel className="w-full max-w-5xl">
        <CarouselContent className="-ml-2">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="px-2 md:basis-1/2 lg:basis-1/3" // 1 item on small screens, 2 on tablets, 3 on large screens
            >
              <Card className="flex flex-col items-center justify-between p-6 shadow-lg w-full">
                <CardHeader className="flex flex-col items-center">
                  <span className="w-20 h-20 rounded-full flex items-center justify-center bg-gray-200">
                    <img
                      src={testimonial.image.src}
                      alt="Testimonial"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </span>
                  <CardTitle className="mt-2">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.title}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-800">{testimonial.content}</p>
                  <div className="flex justify-center mt-3">
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

        {/* Prev & Next Buttons */}
        <CarouselPrevious className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-[-2.5rem] top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
}
