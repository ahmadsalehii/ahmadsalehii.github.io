import useAnimateOnScroll from "../hooks/useAnimateOnScroll";

function Header({ title, desciption }) {
  const { elementRef, hasAnimated } = useAnimateOnScroll();

  return (
    <div
      ref={elementRef}
      className={`mb-16 transform text-center transition-all duration-1000 ${
        hasAnimated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } `}
    >
      <h2 className="font-nunito mb-4 text-4xl font-extrabold text-white md:text-5xl">
        {title.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="font-nunito text-red-500">
          {title.split(" ").slice(-1)}
        </span>
      </h2>
      <p className="font-nunito mx-auto max-w-2xl text-xl font-semibold text-gray-300">
        {desciption}
      </p>
    </div>
  );
}

export default Header;
