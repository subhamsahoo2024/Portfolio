"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950">
      <div className="relative flex items-center justify-center">
        <div className="h-16 w-16 rounded-full border-4 border-gray-800"></div>

        <motion.div
          className="absolute h-16 w-16 rounded-full border-4 border-blue-500 border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
}
