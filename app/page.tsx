"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Subham Sahoo S
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-lg mb-8 mx-auto md:mx-0">
            I am a Aspiring Full-Stack Developer passionate about architecting
            modern applications and solving complex challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/projects">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition flex items-center justify-center gap-2 w-full sm:w-auto">
                View Work <ArrowRight size={18} />
              </button>
            </Link>
            <Link href="/contact">
              <button className="border border-gray-700 hover:border-gray-500 hover:bg-gray-900 text-white px-8 py-3 rounded-full font-medium transition w-full sm:w-auto">
                Contact Me
              </button>
            </Link>
          </div>

          <div className="mt-8 flex gap-6 justify-center md:justify-start text-gray-500">
            <a
              href="https://github.com/subhamsahoo2024"
              target="_blank"
              className="hover:text-white transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/subhamsahoos"
              target="_blank"
              className="hover:text-white transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:subhamsahoo12346@gmail.com"
              className="hover:text-white transition"
            >
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl hover:border-blue-500 hover:scale-110 transition">
            <Image
              src="/photo.jpg"
              alt="Your Name"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
