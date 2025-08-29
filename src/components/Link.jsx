function Link({ children, href = "#" }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex h-12 w-12 items-center justify-center rounded-full border-1 border-solid border-slate-600 bg-gray-800 transition-transform hover:scale-110 hover:bg-gray-600"
    >
      {children}
    </a>
  );
}

export default Link;
