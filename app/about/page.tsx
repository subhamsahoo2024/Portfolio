"use client";
import { motion } from "framer-motion";

const techStack = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express.js"],
  database: ["MongoDB", "SQL"],
  ProgrammingLanguages: ["Python", "C++", "Java"],
  tools: ["Git", "GitHub", "VS Code", "Postman"],
};

export default function About() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
          I’m Subham Sahoo S, a Computer Science Engineering student and an
          Aspiring Full-Stack Developer specializing in creating clean,
          efficient, and scalable solutions.{" "}
        </p>
        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
          I’m passionate about combining logical thinking with creativity to
          build impactful digital experiences. My interests include Web
          Development, AI-powered applications, and Blockchain-based solutions,
          and I enjoy working on projects that solve meaningful real-world
          challenges.
        </p>
        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
          Currently, I’m exploring new technologies and improving my skills
          through hands-on projects.
        </p>
      </motion.section>

      <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
      <div className="space-y-8">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-gray-200 mb-4 capitalize">
              {category.replace(/([A-Z])/g, " $1")}
            </h3>

            <div className="flex flex-wrap gap-3">
              {items.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-gray-300 hover:border-blue-500 transition cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
