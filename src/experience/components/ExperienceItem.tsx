import { motion } from "framer-motion";
import { useState } from "react";
import { EASE_PREMIUM } from "../../shared/motion";

interface ExperienceRoleLink {
  label: string;
  href: string;
}

interface ExperienceRole {
  title: string;
  dateRange: string;
  location?: string;
  highlights: string[];
  links?: ExperienceRoleLink[];
}

interface ExperienceItemProps {
  logo?: string;
  logoFull?: boolean;
  tileColor?: string;
  company: string;
  monogram?: string;
  location?: string;
  summary?: string;
  delay?: number;
  roles?: ExperienceRole[];
}

const LogoBadge: React.FC<{
  logo?: string;
  logoFull?: boolean;
  tileColor?: string;
  company: string;
  monogram?: string;
}> = ({ logo, logoFull, tileColor, company, monogram }) => {
  const [errored, setErrored] = useState(false);
  const showFallback = !logo || errored;
  const fallbackText = monogram || company.slice(0, 3).toUpperCase();
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
  const chromeStyle =
    isColored && tileColor
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
          alt={company}
          onError={() => setErrored(true)}
          className={`w-full h-full object-contain ${
            logoFull ? "p-0" : "p-2"
          }`}
        />
      )}
    </div>
  );
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  logo,
  logoFull,
  tileColor,
  company,
  monogram,
  location,
  summary,
  delay = 0,
  roles,
}) => {
  const primary = roles && roles.length > 0 ? roles[0] : undefined;
  const headline = primary?.title ?? company;
  const links = primary?.links;

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
          company={company}
          monogram={monogram}
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-[17px] sm:text-[19px] font-medium text-ink tracking-tight leading-snug">
              {headline}
            </h3>
            {links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="hover-underline text-[12.5px] text-accent hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-ink-muted text-[14px] mt-0.5">{company}</p>
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
    </motion.div>
  );
};

export default ExperienceItem;
