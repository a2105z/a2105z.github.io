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
  degreeTertiary?: string;
  gpa?: string;
  gpaSecondary?: string;
  dateRange: string;
  location?: string;
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
    ? "border-0 shadow-ring"
    : "bg-surface border border-line shadow-ring";
  const chromeStyle =
    isColored && tileColor ? { backgroundColor: tileColor } : undefined;

  return (
    <div
      className={`flex-shrink-0 h-12 w-12 rounded-lg flex items-center justify-center overflow-hidden ${chromeClass}`}
      style={chromeStyle}
    >
      {showFallback ? (
        <span className={`${fallbackSize} font-bold text-ink tracking-[0.06em]`}>
          {fallbackText}
        </span>
      ) : (
        <img
          src={logo}
          alt={institution}
          onError={() => setErrored(true)}
          className={
            logoFull
              ? "h-full w-full object-contain object-center p-1"
              : "h-full w-full object-contain p-2"
          }
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
  degreeTertiary,
  gpa,
  gpaSecondary,
  dateRange,
  location,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: EASE_PREMIUM }}
      className="group"
    >
      <div className="flex items-start gap-3.5">
        <LogoBadge
          logo={logo}
          logoFull={logoFull}
          tileColor={tileColor}
          institution={institution}
          monogram={monogram}
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-[16px] font-semibold text-ink leading-snug">
            {institution}
          </h3>
          <p className="text-[14px] text-ink mt-0.5 leading-snug">{degree}</p>
          {degreeSecondary && (
            <p className="text-[14px] text-ink mt-0.5 leading-snug">
              {degreeSecondary}
            </p>
          )}
          {degreeTertiary && (
            <p className="text-[14px] text-ink mt-0.5 leading-snug">
              {degreeTertiary}
            </p>
          )}
          <p className="text-[14px] text-[#666666] mt-0.5 leading-snug">
            {dateRange}
          </p>
          {location && (
            <p className="text-[14px] text-[#666666] mt-0.5 leading-snug">
              {location}
            </p>
          )}
          {gpa && (
            <p className="text-[14px] text-[#666666] mt-0.5 leading-snug">
              {gpa}
            </p>
          )}
          {gpaSecondary && (
            <p className="text-[14px] text-[#666666] mt-0.5 leading-snug">
              {gpaSecondary}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EducationItem;
