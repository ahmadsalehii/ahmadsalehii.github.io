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
        <div className="mx-auto h-48 w-48 rounded-full bg-gradient-to-r from-red-400 to-red-600 p-1">
          <img
            src={profileImg}
            alt="Profile"
            loading="lazy"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;
