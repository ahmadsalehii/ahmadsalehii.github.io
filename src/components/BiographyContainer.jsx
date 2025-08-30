import { useEffect, useState } from "react";

import HeaderBiography from "./HeaderBiography";
import HeaderImage from "./HeaderImage";
import ShortBiography from "./ShortBiography";
import LongBiography from "./LongBiography";
import Links from "./Links";
import PulseScrollIcon from "./PulseScrollIcon";

function BiographyContainer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-pulse rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 mix-blend-multiply blur-3xl filter"></div>
        <div className="animation-delay-2000 absolute top-1/3 right-1/4 h-80 w-80 animate-pulse rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mix-blend-multiply blur-3xl filter"></div>
        <div className="animation-delay-4000 absolute bottom-1/4 left-1/3 h-72 w-72 animate-pulse rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 mix-blend-multiply blur-3xl filter"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-gray-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-transparent to-gray-900/30"></div>
        <div className="bg-radial-gradient absolute inset-0 from-transparent via-gray-800/10 to-gray-900/50"></div>
      </div>
      <div
        className={`relative z-10 mx-auto max-w-4xl transform text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <HeaderBiography>
          <HeaderImage />
          <ShortBiography />
        </HeaderBiography>
        <LongBiography />
        <Links />
        <PulseScrollIcon />
      </div>
    </>
  );
}

export default BiographyContainer;
