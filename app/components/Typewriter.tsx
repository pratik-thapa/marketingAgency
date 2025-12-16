"use client";
import Typewriter from "typewriter-effect";

// Define the type so TypeScript knows we expect an array of strings
interface TypewriterTextProps {
  strings: string[];
}

export default function TypewriterText({ strings }: TypewriterTextProps) {
  return (
    <span className="inline-block">
      <Typewriter
        options={{
          strings: strings, // 👈 Now it uses whatever words you pass in
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 75,
        }}
      />
    </span>
  );
}
