"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion, useReducedMotion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { BsLinkedin } from "react-icons/bs";
import Magnetic from "./magnetic";
import { FaGithubSquare } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/charfeddine-fredj-b30635141/",
    icon: BsLinkedin,
    color: "#0A66C2",
  },
  {
    label: "GitHub",
    href: "https://github.com/CharfeddineFredj",
    icon: FaGithubSquare,
    color: "#000000",
  },
  {
    label: "Email",
    href: "https://mail.google.com/mail/u/0/#inbox?compose=VpCqJKjfhTKWrNlXMrrvCCQVgTkzCFzsnVJPXCnWDpnVDnJltDzQGCjkFtwmVLgPcvlMRNV",
    icon: HiOutlineMail,
    color: "rgb(var(--accent-rgb))",
  },
];

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      ref={ref}
      className="mb-16 w-full max-w-[60rem] scroll-mt-28"
    >
      <SectionHeading eyebrow="05 / Contact">Contact me</SectionHeading>

      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="text-2xl font-semibold leading-snug sm:text-3xl">
            Let&apos;s build something{" "}
            <span className="text-gradient">meaningful</span> together.
          </h3>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            Please contact me directly at{" "}
            <a
              className="text-fg underline decoration-accent underline-offset-4"
              href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJKjfhTKWrNlXMrrvCCQVgTkzCFzsnVJPXCnWDpnVDnJltDzQGCjkFtwmVLgPcvlMRNV"
            >
              fradjcharf@gmail.com
            </a>{" "}
            or through this form.
          </p>

          <ul className="mt-10 flex flex-wrap gap-2.5">
            {socialLinks.map(({ label, href, icon: Icon, color }, index) => (
              <motion.li
                key={label}
                initial={{ opacity: 0, y: 24, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ type: "spring", stiffness: 140, damping: 14, delay: index * 0.1 }}
              >
                <Magnetic>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ "--brand": color } as React.CSSProperties}
                    className="glass group inline-flex items-center gap-2 overflow-hidden rounded-full py-1.5 pl-1.5 pr-3.5 text-sm font-medium transition duration-300 hover:-translate-y-0.5"
                  >
                    {/* Colour wash that fades in on hover (sits under the content) */}
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-[var(--brand)] opacity-0 transition duration-300 group-hover:opacity-15"
                    />
                    {/* Light sweep across the button on hover */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-white/25 opacity-0 transition-[left,opacity] duration-700 group-hover:left-full group-hover:opacity-100"
                    />

                    <span className="relative grid h-8 w-8 place-items-center rounded-full bg-fg/[0.06] transition duration-300 group-hover:scale-110 group-hover:bg-[var(--brand)] group-hover:text-white">
                      <Icon className="text-base transition duration-300 group-hover:-rotate-6" aria-hidden />
                    </span>
                    <span className="relative">{label}</span>
                  </a>
                </Magnetic>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl p-[2px] shadow-[0_0_50px_-18px_rgb(var(--accent-rgb)/0.5)]"
        >
          {/* Rotating light arc. Only its 2px edge shows, around the solid layer below. */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[250%] bg-[conic-gradient(from_0deg,transparent_0deg,rgb(var(--accent-rgb))_60deg,rgb(var(--accent2-rgb))_120deg,transparent_180deg)]"
            style={{ x: "-50%", y: "-50%" }}
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
          <div
            aria-hidden
            className="absolute inset-[2px] rounded-[calc(1rem_-_2px)] bg-[rgb(var(--bg-rgb))]"
          />

          <form
            ref={formRef}
            className="glass relative flex flex-col gap-8 rounded-[calc(1rem_-_2px)] p-7 sm:p-10"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            formRef.current?.reset();
            toast.success("Message sent! Thank you for getting in touch.");
          }}
        >
          <h3 className="text-lg font-semibold">Send a message</h3>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-email" className="text-sm font-medium">
              Your email{" "}
              <span className="text-accent" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="contact-email"
              className="h-14 w-full rounded-xl border border-line bg-fg/[0.03] px-4 text-fg placeholder:text-muted transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="name@example.com"
              autoComplete="email"
            />
            <p className="text-xs text-muted">I will reply to this address.</p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-subject" className="text-sm font-medium">
              Subject{" "}
              <span className="text-accent" aria-hidden="true">
                *
              </span>
            </label>
            <input
              id="contact-subject"
              className="h-14 w-full rounded-xl border border-line bg-fg/[0.03] px-4 text-fg placeholder:text-muted transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              name="subject"
              type="text"
              required
              maxLength={200}
              placeholder="What is this about?"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="contact-message" className="text-sm font-medium">
              Your message{" "}
              <span className="text-accent" aria-hidden="true">
                *
              </span>
            </label>
            <textarea
              id="contact-message"
              className="h-52 w-full resize-none rounded-xl border border-line bg-fg/[0.03] p-4 text-fg placeholder:text-muted transition focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              name="message"
              required
              maxLength={5000}
              placeholder="Write your message here..."
            />
            <p className="text-xs text-muted">Up to 5000 characters.</p>
          </div>

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted">
              <span className="text-accent" aria-hidden="true">
                *
              </span>{" "}
              Required fields
            </p>
            <SubmitBtn />
          </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
