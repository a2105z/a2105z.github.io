const Wrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`w-full max-w-[1180px] mx-auto px-6 sm:px-10 md:px-14 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
