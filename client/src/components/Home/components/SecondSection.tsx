import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarDays, FlaskConical, PhoneCall } from "lucide-react";
import React from "react";
import {motion} from "framer-motion";

const cardItems = [
  {
    id: 1,
    icon: PhoneCall,
    description: "Instant Video Consultation",
    color: "#28b63f",
  },
  {
    id: 2,
    icon: CalendarDays,
    description: "Find doctor and Book Appointment",
    color: "#a146e0",
  },
  {
    id: 3,
    icon: FlaskConical,
    description: "Lab Test Clarification",
    color: "#8ac4f8",
  },
];

export default function SecondSection() {
  return (
    <section className="container mx-auto  md:py-14 flex flex-col items-center">
      <div className="flex flex-col md:flex-row lg:flex-row items-center">
        <div className="w-full md:w-[50%] lg:w-[50%] px-10 py-10">
          <span className="text-6xl">
            Sphere of <br />
          </span>
          <span className="text-7xl font-bold text-slate-300">
            health haven
          </span>
        </div>
        <div className="w-full md:w-[50%] lg:w-[50%] px-10 py-10">
          <span className="text-lg text-gray-700">
            Embark on a transformative journey into the world of Health, where
            our unwavering commitment to your well-being goes beyond
            expectations, ensuring trusted, compassionate care every step of the
            way.
          </span>
        </div>
      </div>

      <motion.div className="w-full h-full flex flex-wrap items-center justify-around gap-6 p-3"
       initial={{ opacity: 0, x: -50 }}
       animate={{ opacity: 1, x: 0 }}
       transition={{ duration: 0.8 }}>
        {cardItems.map((item) => {
          const lighterColor = `${item.color}33`; // Adding `33` for a transparent/light effect
          return (
            <Card
              key={item.id}
              className="p-4 w-[20rem] h-[20rem] flex flex-col items-center justify-between shadow-none"
              style={{ backgroundColor: lighterColor }}
            >
              <CardHeader className="flex flex-col ">
                <span
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: item.color }}
                >
                  <item.icon className="text-white w-8 h-8" />
                </span>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 text-2xl font-bold">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </motion.div>
    </section>
  );
}
