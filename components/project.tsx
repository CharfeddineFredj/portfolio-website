"use client";

import { useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Définition des types pour les props de la modale
interface ModalProps {
  message: string;
  onClose: () => void;
}

// Composant de la modale
const Modal = ({ message, onClose }: ModalProps) => (
  <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
      <p className="text-lg">{message}</p>
      <button
        onClick={onClose}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Close
      </button>
    </div>
  </div>
);

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubLink,
  alertMessage
}: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour gérer la modale
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-6 sm:mb-10 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[55rem] border border-black/5 rounded-lg overflow-hidden sm:pr-10 relative sm:h-[29rem] hover:bg-gray-200 sm:group-even:pl-10 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 group-hover:scale-105 group-hover:w-[56rem] transition-all duration-500 ease-in-out">
        <div className="pt-6 pb-10 px-6 sm:pl-12 sm:pr-3 sm:pt-12 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[20rem]">
          <h3 className="text-3xl font-semibold">{title}</h3>
          <p className="mt-3 leading-relaxed text-gray-800 dark:text-white/80 text-lg mb-6">
            {description}
          </p>
          <ul className="flex flex-wrap mt-6 gap-3 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-4 py-2 text-[0.85rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* Bouton Discover this project */}
          <div className="mt-6">
            <a
              className="bg-blue-600 text-white px-6 py-3 text-lg font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-700 active:scale-105 transition duration-300 ease-in-out"
              onClick={() => {
                if (!githubLink) {
                  setIsModalOpen(true); // Ouvre la modale si pas de lien GitHub
                } else {
                  window.open(githubLink, "_blank");
                }
              }}
              style={{ cursor: "pointer" }}
            >
              Discover this project
            </a>
          </div>
        </div>

        {/* Réduction de la taille de l'image */}
        <div className="mt-8">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-10 -right-40 w-[32rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.05] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
          />
        </div>
      </section>

      {/* Affiche la modale si isModalOpen est true */}
      {isModalOpen && (
        <Modal
          message={alertMessage} // Affiche le message d'alerte dans la modale
          onClose={() => setIsModalOpen(false)} // Ferme la modale
        />
      )}
    </motion.div>
  );
}
