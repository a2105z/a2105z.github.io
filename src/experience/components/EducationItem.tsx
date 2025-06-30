import { motion } from "framer-motion";
import { useState } from "react";
import { EASE_PREMIUM } from "../../shared/motion";

interface EducationItemProps {
  institution: string;
  monogram?: string;
  logo?: string;
  logoFull?: boolean;
  tileColor?: string;
  degree: string;
  degreeSecondary?: string;
  dateRange: string;
  location?: string;
  focus: string[];
  summary?: string;
  delay?: number;
}

const LogoBadge: React.FC<{
  logo?: string;
  logoFull?: boolean;
  tileColor?: string;
  institution: string;
  monogram?: string;
}> = ({ logo, logoFull, tileColor, institution, monogram }) => {
  const [errored, setErrored] = useState(false);
  const showFallback = !logo || errored;
  const fallbackText = monogram || institution.slice(0, 3).toUpperCase();
  const fallbackSize =
    fallbackText.length >= 4
      ? "text-[9px]"
      : fallbackText.length === 3
      ? "text-[10.5px]"
      : "text-[13px]";

  const isColored = logoFull && !showFallback;
  const chromeClass = isColored
    ? "border border-transparent shadow-ring"
    : "bg-surface border border-line shadow-ring";
  const chromeStyle = isColored && tileColor
    ? { backgroundColor: tileColor, borderColor: tileColor }
    : undefined;

  return (
    <div
      className={`flex-shrink-0 h-11 w-11 rounded-xl flex items-center justify-center overflow-hidden ${chromeClass}`}
      style={chromeStyle}
    >
      {showFallback ? (
        <span
          className={`${fallbackSize} font-bold text-ink tracking-[0.06em]`}
        >
          {fallbackText}
        </span>
      ) : (
        <img
          src={logo}
          alt={institution}
          onError={() => setErrored(true)}
          className={`w-full h-full ${
            logoFull ? "object-cover p-0" : "object-contain p-2"
          }`}
        />
      )}
    </div>
  );
};

const EducationItem: React.FC<EducationItemProps> = ({
  institution,
  monogram,
  logo,
  logoFull,
  tileColor,
  degree,
  degreeSecondary,
  location,
  focus,
  summary,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: EASE_PREMIUM }}
      className="group"
    >
      <div className="flex items-start gap-4">
        <LogoBadge
          logo={logo}
          logoFull={logoFull}
          tileColor={tileColor}
          institution={institution}
          monogram={monogram}
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-[17px] sm:text-[19px] font-medium text-ink tracking-tight leading-snug">
            {degree}
          </h3>
          {degreeSecondary && (
            <h3 className="text-[17px] sm:text-[19px] font-medium text-ink tracking-tight leading-snug mt-1">
              {degreeSecondary}
            </h3>
          )}
          <p className="text-ink-muted text-[14px] mt-0.5">{institution}</p>
          {location && (
            <p className="text-[12px] text-ink-dim mt-1">{location}</p>
          )}
          {summary && (
            <p className="text-ink-muted text-[14px] leading-relaxed mt-3 max-w-2xl">
              {summary}
            </p>
          )}
        </div>
      </div>

      {focus.length > 0 && (
        <div className="mt-5 pl-0 sm:pl-[3.75rem]">
          <p className="text-[10px] uppercase tracking-[0.24em] text-ink-dim font-medium mb-3">
            Focus
          </p>
          <ul className="flex flex-wrap gap-2">
            {focus.map((f) => (
              <li
                key={f}
                className="text-[12.5px] text-ink-soft bg-surface border border-line rounded-full px-3 py-1"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default EducationItem;
