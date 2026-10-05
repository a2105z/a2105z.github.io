export interface BackgroundPathsProps {
  children: React.ReactNode;
  onGoToPage: (newPage: string) => void;
}

export function BackgroundPaths({
  children,
  onGoToPage,
}: BackgroundPathsProps) {
  return (
    <div className="relative min-h-[100dvh] w-full flex items-center bg-white">
      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-6 sm:px-10 md:px-14">
        {children}
      </div>

      <button
        aria-label="Scroll to About"
        onClick={() => onGoToPage("About")}
        className="absolute bottom-8 left-6 sm:left-10 md:left-14 text-[13px] text-accent hover:underline"
      >
        About
      </button>
    </div>
  );
}
