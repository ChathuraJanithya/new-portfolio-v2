import React from "react";
import { Hero } from "@/components/common/Hero";
import { TypewriterEffect } from "../common/TypewriterEffect";

const words = [
  {
    text: "Build",
  },
  {
    text: "awesome",
  },
  {
    text: "apps",
  },
  {
    text: "with",
  },
  {
    text: "Aceternity.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export function WavyBackgroundHero() {
  return (
    <Hero className="mx-auto max-w-4xl pb-40">
      <p className="inter-var text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl">
        Welcome
      </p>
      <p className="inter-var mt-4 text-center text-base font-normal text-white md:text-lg">
        <TypewriterEffect words={words} />
      </p>
    </Hero>
  );
}
