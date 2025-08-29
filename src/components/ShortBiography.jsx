import { ImLocation } from "react-icons/im";
import { useEffect, useState } from "react";

function ShortBiography() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transform text-center transition-all delay-500 duration-1000 md:text-start ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <h1 className="mb-2 text-5xl font-extrabold md:text-6xl">
        <span className="font-nunito bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
          Ahmad Salehi
        </span>
      </h1>
      <p className="font-nunito text-xl font-bold text-gray-300 md:text-2xl">
        Frontend Developer
      </p>
      <div className="mt-2 flex items-center justify-center gap-[2px] text-gray-400 md:justify-start">
        <div className="mb-[4px]">
          <ImLocation size={16} />
        </div>
        <p className="font-nunito">Tehran, Iran</p>
      </div>
    </div>
  );
}

export default ShortBiography;
