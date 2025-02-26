import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A modern web design.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Project Two",
    description: "A sleek mobile UI.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Project Three",
    description: "An intuitive dashboard.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Project Four",
    description: "A cutting-edge SaaS platform.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Project Five",
    description: "A creative e-commerce experience.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Project Six",
    description: "A smooth fintech application.",
    image: "https://via.placeholder.com/300",
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-12 space-y-16">
      {/* Header Section */}
      <header className="text-left">
        <h1 className="text-5xl font-bold inline-block border-b-4 border-green-500 pb-2">
          MIKE RETTEW
        </h1>
        <p className="text-lg text-gray-600 text-right mt-2">
          Product Designer | UI/UX Specialist
        </p>
      </header>

      {/* Projects Section */}
      <section className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-1/3"
            />
            <Card className="w-2/3 bg-gray-100 p-6">
              <CardContent>
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-gray-600 text-lg">{project.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Footer Section */}
      <footer className="text-center space-y-4">
        <h2 className="text-xl">Connect with me</h2>
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" size="icon">
            <Mail />
          </Button>
          <Button variant="ghost" size="icon">
            <Github />
          </Button>
          <Button variant="ghost" size="icon">
            <Linkedin />
          </Button>
        </div>
      </footer>
    </div>
  );
}
