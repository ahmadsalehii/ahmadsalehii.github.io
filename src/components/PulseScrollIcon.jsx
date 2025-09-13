function PulseScrollIcon() {
  return (
    <div className="absolute left-97/200 mt-4 flex animate-bounce items-center justify-center">
      <div className="flex h-10 w-6 justify-center rounded-full border-2 border-slate-300 bg-gray-800">
        <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-slate-300"></div>
      </div>
    </div>
  );
}

export default PulseScrollIcon;
