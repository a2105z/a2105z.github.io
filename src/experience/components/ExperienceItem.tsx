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
  ticker?: string;
  exchange?: string;
  summary?: string;
  delay?: number;
  roles?: ExperienceRole[];
  kind?: "internship" | "fulltime";
  startDate?: string;
  endDate?: string;
  groupIcon?: string;
  employmentType?: string;
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
    ? "border-0 shadow-ring"
    : "bg-surface border border-line shadow-ring";
  const chromeStyle =
    isColored && tileColor
      ? { backgroundColor: tileColor }
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
          className={
            logoFull
              ? "h-full w-full object-cover object-center"
              : "h-full w-full object-contain p-2"
          }
        />
      )}
    </div>
  );
};

const MONTH_INDEX: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

const inclusiveDuration = (startDate?: string, endDate?: string): string => {
  if (!startDate || !endDate) return "";
  if (/^\d{4}$/.test(startDate) && /^\d{4}$/.test(endDate)) {
    const years = Math.max(Number(endDate) - Number(startDate), 1);
    return years === 1 ? "1 yr" : `${years} yrs`;
  }
  const [startMonth, startYear] = startDate.split(" ");
  const [endMonth, endYear] = endDate.split(" ");
  const start = Number(startYear) * 12 + MONTH_INDEX[startMonth];
  const end = Number(endYear) * 12 + MONTH_INDEX[endMonth];
  const months = end - start + 1;
  if (!Number.isFinite(months) || months < 1) return "";
  return months === 1 ? "1 mo" : `${months} mos`;
};

const durationFromRange = (dateRange?: string): string => {
  if (!dateRange) return "";
  const [start, end] = dateRange.split(" — ").map((part) => part.trim());
  return inclusiveDuration(start, end);
};

const dateLineFor = (dateRange?: string, startDate?: string, endDate?: string) => {
  const range = dateRange || (startDate && endDate ? `${startDate} — ${endDate}` : "");
  const duration = dateRange
    ? durationFromRange(dateRange)
    : inclusiveDuration(startDate, endDate);
  return [range, duration].filter(Boolean).join(" · ");
};

const splitHeadline = (title?: string) => {
  if (!title) return { headline: "", group: undefined as string | undefined };
  const idx = title.lastIndexOf(", ");
  if (idx === -1) return { headline: title, group: undefined };
  return {
    headline: title.slice(0, idx),
    group: title.slice(idx + 2),
  };
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  logo,
  logoFull,
  tileColor,
  company,
  monogram,
  location,
  ticker,
  exchange,
  delay = 0,
  roles,
  startDate,
  endDate,
  groupIcon,
  employmentType,
}) => {
  const roleList = roles ?? [];
  const listedName =
    ticker && exchange ? `${company} (${exchange}: ${ticker})` : company;
  const typeLine = [listedName, employmentType].filter(Boolean).join(" · ");

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
          {roleList.map((role, index) => {
            const { headline, group } = splitHeadline(role.title);
            const showMeta = index === 0;
            return (
              <div key={`${role.title}-${role.dateRange}`} className={index === 0 ? "" : "mt-5"}>
                <h3 className="text-[16px] sm:text-[17px] font-semibold text-ink tracking-tight leading-snug">
                  {headline || listedName}
                </h3>
                {showMeta && (
                  <p className="text-[14px] text-ink-muted mt-0.5">{typeLine}</p>
                )}
                <p className="text-[13px] text-ink-dim mt-0.5">
                  {dateLineFor(role.dateRange, startDate, endDate)}
                </p>
                {showMeta && location && (
                  <p className="text-[13px] text-ink-dim mt-0.5">{location}</p>
                )}
                {group && (
                  <p className="text-[14px] text-ink-muted mt-2">
                    {groupIcon ? `${groupIcon} ${group}` : group}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
