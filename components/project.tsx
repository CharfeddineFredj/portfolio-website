"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import TiltCard from "./tilt-card";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData | string;
  githubLink: string;
  alertMessage: string;
  badge?: string;
  platform?: string;
};

interface ModalProps {
  title: string;
  message: string;
  onClose: () => void;
}

// Shown for projects without a public repository.
const Modal = ({ title, message, onClose }: ModalProps) =>
  createPortal(
    <motion.div
      className="fixed inset-0 z-[1001] flex items-center justify-center bg-bg/70 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="glass w-full max-w-lg rounded-2xl p-6"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        onClick={(event) => event.stopPropagation()}
      >
        <h4 id="project-modal-title" className="text-lg font-semibold">
          {title}
        </h4>
        <p className="mt-3 leading-relaxed text-muted">{message}</p>
        <button
          type="button"
          autoFocus
          onClick={onClose}
          className="mt-6 rounded-full bg-accent px-5 py-2 font-semibold text-bg transition hover:scale-[1.03]"
        >
          Close
        </button>
      </motion.div>
    </motion.div>,
    document.body
  );

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubLink,
  alertMessage,
  badge,
  platform,
}: ProjectProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <>
      <TiltCard className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-500 hover:border-accent/40">
        {/* No colour fade over the image, so screenshots and mockups stay clear */}
        <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
          <Image
            src={imageUrl}
            alt={`${title} screenshot`}
            fill
            quality={95}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.05]"
          />
          {platform && (
            <span className="absolute right-4 top-4 rounded-full border border-line bg-bg/80 px-3 py-1 font-mono text-xs text-fg backdrop-blur">
              {platform}
            </span>
          )}
          {badge && (
            <span className="absolute left-4 top-4 rounded-full border border-line bg-bg/80 px-3 py-1 font-mono text-xs text-fg backdrop-blur">
              {badge}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="line-clamp-4 leading-relaxed text-muted">{description}</p>

          <ul className="mt-auto flex flex-wrap gap-2 pt-2">
            {tags.map((tag, index) => (
              <li
                key={`${tag}-${index}`}
                className="rounded-full border border-line bg-fg/[0.04] px-3 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="pt-3">
            {githubLink ? (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition hover:scale-[1.03]"
              >
                <BsGithub />
                View on GitHub
                <BsArrowUpRight />
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold transition hover:border-accent/50 hover:text-accent"
              >
                Discover this project
                <BsArrowUpRight />
              </button>
            )}
          </div>
        </div>
      </TiltCard>

      {isModalOpen && (
        <Modal
          title={title}
          message={alertMessage || "Details for this project are not available."}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
