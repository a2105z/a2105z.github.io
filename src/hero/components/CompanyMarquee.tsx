import { motion } from "framer-motion";
import { useState } from "react";

interface MarqueeItem {
  label: string;
  logo?: string;
  wordmark?: string;
}

const ITEMS: MarqueeItem[] = [
  {
    label: "RV Tech",
    logo: "/icons/organizations/rv-tech.png",
    wordmark: "RV",
  },
  { label: "Rivian", logo: "/icons/organizations/rivian.png" },
  { label: "Google", logo: "/icons/organizations/google.png" },
  { label: "NVIDIA", logo: "/icons/organizations/nvidia.svg" },
  { label: "Amazon", logo: "/icons/organizations/amazon.png" },
  { label: "NASA", logo: "/icons/organizations/nasa.png" },
  {
    label: "Palantir",
    logo: "/icons/organizations/palantir.png",
    wordmark: "P",
  },
  {
    label: "AlgoDynamix",
    logo: "/icons/organizations/algodynamix.png",
    wordmark: "AD",
  },
  { label: "UIUC", logo: "/icons/organizations/uiuc.png" },
  { label: "UC Berkeley", logo: "/icons/organizations/berkeley.svg" },
];

const Wordmark: React.FC<{ text: string }> = ({ text }) => (
  <span className="inline-flex items-center justify-center h-5 min-w-[1.25rem] px-0.5 text-[11px] font-bold tracking-[0.06em] text-ink">
    {text}
  </span>
);

const MarqueeLogo: React.FC<{ item: MarqueeItem }> = ({ item }) => {
  const [errored, setErrored] = useState(false);
  if (!item.logo || errored) {
    return <Wordmark text={item.wordmark || item.label.slice(0, 1)} />;
  }
  return (
    <img
      src={item.logo}
      alt={item.label}
      onError={() => setErrored(true)}
      className="h-5 w-5 rounded-[4px] object-cover opacity-90"
    />
  );
};

const CompanyMarquee: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee gap-14 py-1">
        {doubled.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="flex items-center gap-2.5 text-ink-muted"
          >
            <MarqueeLogo item={item} />
            <span className="text-[13px] tracking-[0.02em] font-medium whitespace-nowrap">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CompanyMarquee;
