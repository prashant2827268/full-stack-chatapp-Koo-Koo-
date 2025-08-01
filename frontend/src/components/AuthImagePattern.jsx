const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-4 overflow-hidden">
      <div className="max-w-md text-center p-3">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`h-30 w-30 rounded-xl bg-primary/10 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
