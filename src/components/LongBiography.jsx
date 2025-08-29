import { useEffect, useState } from "react";

function LongBiography() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`font-nunito mx-10 mb-6 max-w-3xl transform text-justify text-lg leading-relaxed font-semibold text-gray-300 transition-all delay-700 duration-1000 md:mx-auto md:text-xl ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      I'm a junior frontend developer, With a strong foundation in web
      technologies and a keen eye for design, I specialize in creating engaging
      and user-friendly web applications. My expertise includes HTML, CSS,
      JavaScript, and popular frameworks like{" "}
      <span className="font-bold text-red-400">React</span>. I am dedicated to
      continuous learning and staying updated with the latest industry trends to
      deliver high-quality solutions.
    </div>
  );
}

export default LongBiography;
