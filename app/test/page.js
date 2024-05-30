import React from "react";
import { FlipWords } from "./flip-words";

export default function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <div className="w-screen h-screen bg-black">
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Enjoy
        <FlipWords words={words} duration={1000} /> <br />
        With NAS Js
      </div>
      </div>

    </div>
  );
}
