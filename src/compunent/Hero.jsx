import React, { useState, useEffect } from "react";

const LoopingTypingEffect = ({
  texts,
  typingSpeed = 80,
  pauseTime = 1000, // pause after full text typed
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!deleting && charIndex < texts[textIndex].length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayed(texts[textIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!deleting && charIndex === texts[textIndex].length) {
      // Pause before deleting
      timeout = setTimeout(() => setDeleting(true), pauseTime);
    } else if (deleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayed(texts[textIndex].slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed / 2);
    } else if (deleting && charIndex === 0) {
      // Next text
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, texts, textIndex, typingSpeed, pauseTime]);

  return (
    <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white inline-block">
      {displayed}
      <span className="blinking-cursor">|</span>

      <style>{`
        .blinking-cursor {
          display: inline-block;
          margin-left: 3px;
          width: 1ch;
          animation: blink 1s step-start infinite;
          color: white;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </h3>
  );
};

const Hero = () => {
  const lines = [
    "We Don’t Just Build Websites. We Build Results.",
    "Build Modern Websites That Convert Visitors into Customers",
    "Grow Your Business with Custom, High-Performing Websites",
  ];

  return (
    <section
      className="relative h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://scitechdaily.com/images/Universe-Astronomy-Art-Concept.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4">
        <div className="text-center">
          <LoopingTypingEffect texts={lines} typingSpeed={80} pauseTime={1000} />

          <p className="text-lg md:text-xl mb-6 text-white">
            Let’s turn your ideas into real digital products.
          </p>
          <a
            href="#contact"
            className="bg-white text-black px-6 py-3 font-semibold rounded-full hover:bg-gray-300 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
