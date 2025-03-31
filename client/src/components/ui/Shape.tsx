import React from 'react'
import { motion } from 'framer-motion'

interface FloatingShapeProps {
  color: string;
  size: string;
  top: string;
  left: string;
  delay: number;
}

export default function FloatingShape({ color, size, top, left, delay }: FloatingShapeProps) {
  return (
    <motion.div className={`absolute z-0 rounded-full ${color} ${size} opacity-50 blur-xl`}
    style={{ top: top, left: left }}
    animate={{
      y: ["0%", "80%", "0%"],
      x: ["0%", "80%", "0%"],
      rotate: [0, 360],
    }}
    transition={{
      duration: 10,
      ease: 'linear',
      repeat: Infinity,
      delay: delay,
    }}
    />

  )
}