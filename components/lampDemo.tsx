"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/LampEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { TypewriterEffectSmooth } from "./ui/TypeWriter";

const words = [
  {
    text: "Hi i'm",
  },
  {
    text: "Heyru ",
  },
  {
    text: "Next.Js",
  },
  {
    text: "Developer",
  },
  {
    text: "Based in",
  },
  {
    text: "Ethiopia.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br pt-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <div className="flex justify-center relative mt-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest  text-xs text-center text-black-100 max-w-80">
              Dynamic Web Magic with Next.js
            </p>

            {/**
             *  Link: https://ui.aceternity.com/components/text-generate-effect
             *
             *  change md:text-6xl, add more responsive code
             */}
            <TextGenerateEffect
              words="Transforming Concepts into Seamless User Experiences"
              className="text-center [word-spacing:0.16rem] text-[40px] md:text-5xl lg:text-6xl"
            />

            <div className="text-center sm:tracking-wider text-white-200 text-sm">
              <TypewriterEffectSmooth
                words={words}
                className="[word-spacing:0.1rem]"
              />
            </div>
          </div>
        </div>
      </motion.h1>
    </LampContainer>
  );
}
