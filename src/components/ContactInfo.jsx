import { IoMail, IoCall, IoLocation, IoLogoInstagram } from "react-icons/io5";
import { ImGithub } from "react-icons/im";
import { RiTelegram2Fill } from "react-icons/ri";
import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

function ContactInfo() {
  const { elementRef, hasAnimated } = useAnimateOnScroll();

  return (
    <div
      ref={elementRef}
      className={`transform transition-all duration-1000 ${hasAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <div className="rounded-xl border border-slate-700 bg-slate-900 p-8">
        <h3 className="font-nunito mb-6 text-2xl font-extrabold text-white">
          Contact Information
        </h3>
        <div className="space-y-6">
          <a
            target="_blank"
            href="mailto:ahmaadsaalehi@gmail.com"
            className="group flex items-center"
          >
            <div className="mr-4 inline-block h-12 w-12 items-center rounded-xl bg-red-400 p-3 transition-colors duration-300 group-hover:bg-red-500">
              <IoMail size={24} className="text-white" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="font-openSans font-semibold text-gray-300">
                Email
              </span>
              <span className="font-nunito font-bold text-white group-hover:text-red-400">
                ahmaadsaalehi@gmail.com
              </span>
            </div>
          </a>
          <a
            target="_blank"
            href="tel:+989901145819"
            className="group flex items-center"
          >
            <div className="mr-4 inline-block h-12 w-12 items-center rounded-xl bg-red-400 p-3 transition-colors duration-300 group-hover:bg-red-500">
              <IoCall size={24} className="text-white" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="font-openSans font-semibold text-gray-300">
                Phone
              </span>
              <span className="font-nunito font-bold text-white group-hover:text-red-400">
                +98 990 114 5819
              </span>
            </div>
          </a>
          <a
            target="_blank"
            href="#"
            className="group flex items-center"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <div className="mr-4 inline-block h-12 w-12 items-center rounded-xl bg-red-400 p-3 transition-colors duration-300 group-hover:bg-red-500">
              <IoLocation size={24} className="text-white" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <span className="font-openSans font-semibold text-gray-300">
                Location
              </span>
              <span className="font-nunito font-bold text-white group-hover:text-red-400">
                Tehran, Ir
              </span>
            </div>
          </a>
        </div>
        <div className="mt-8 border-t border-slate-600 pt-6">
          <h4 className="font-nunito mb-4 text-2xl font-extrabold text-white">
            Follow Me
          </h4>
          <div className="flex space-x-4">
            <a
              target="_blank"
              href="https://github.com/ahmadssalehi"
              className="flex items-center justify-center rounded-lg border border-slate-600 bg-slate-900 p-2 text-red-300 transition-all duration-300 hover:scale-110 hover:border-red-400 hover:bg-slate-700 hover:text-red-400"
            >
              <ImGithub size={24} />
            </a>
            <a
              target="_blank"
              href="https://instagram.com/pixbyas/"
              className="flex items-center justify-center rounded-lg border border-slate-600 bg-slate-900 p-2 text-red-300 transition-all duration-300 hover:scale-110 hover:border-red-400 hover:bg-slate-700 hover:text-red-400"
            >
              <IoLogoInstagram size={24} />
            </a>
            <a
              target="_blank"
              href="https://t.me/No75i"
              className="flex items-center justify-center rounded-lg border border-slate-600 bg-slate-900 p-2 text-red-300 transition-all duration-300 hover:scale-110 hover:border-red-400 hover:bg-slate-700 hover:text-red-400"
            >
              <RiTelegram2Fill size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
