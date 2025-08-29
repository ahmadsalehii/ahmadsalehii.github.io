import { useEffect, useState } from "react";

import profileImg from "/src/assets/images/profile-500x500.jpg";

function HeaderImage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transform transition-all delay-300 duration-1000 ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
    >
      <div className="relative inline-block">
        <div className="mx-auto h-36 w-36 rounded-full bg-gradient-to-r from-red-400 to-red-600 p-[3px] md:h-48 md:w-48">
          <img
            src={profileImg}
            alt="Profile"
            loading="lazy"
            className="h-full w-full rounded-full border-4 border-slate-900 object-cover"
          />
        </div>
        <div className="absolute right-0 bottom-0 h-8 w-8 animate-pulse rounded-full border-4 border-gray-800 bg-green-500 md:h-10 md:w-10"></div>
      </div>
    </div>
  );
}

export default HeaderImage;
