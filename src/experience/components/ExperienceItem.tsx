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
  const [startMonth, startYear] = startDate.split(" ");
  const [endMonth, endYear] = endDate.split(" ");
  const start = Number(startYear) * 12 + MONTH_INDEX[startMonth];
  const end = Number(endYear) * 12 + MONTH_INDEX[endMonth];
  const months = end - start + 1;
  if (!Number.isFinite(months) || months < 1) return "";
  return months === 1 ? "1 mo" : `${months} mos`;
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
  summary,
  delay = 0,
  roles,
  kind,
  startDate,
  endDate,
  groupIcon,
  employmentType,
}) => {
  const roleList = roles ?? [];
  const isProgression = roleList.length > 1;
  const primary = roleList[0];
  const listedName =
    ticker && exchange ? `${company} (${exchange}: ${ticker})` : company;
  const { headline: internHeadline, group } = splitHeadline(primary?.title);
  const headline = isProgression ? listedName : internHeadline || listedName;
  const links = primary?.links;
  const duration = inclusiveDuration(startDate, endDate);
  const dateLine = [primary?.dateRange ?? `${startDate} — ${endDate}`, duration]
    .filter(Boolean)
    .join(" · ");
  const typeLine = [listedName, employmentType].filter(Boolean).join(" · ");
  const isInternship = kind === "internship" || (!kind && !isProgression);

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
          {isInternship && !isProgression ? (
            <>
              <h3 className="text-[16px] sm:text-[17px] font-semibold text-ink tracking-tight leading-snug">
                {headline}
              </h3>
              <p className="text-[14px] text-ink-muted mt-0.5">{typeLine}</p>
              {dateLine && (
                <p className="text-[13px] text-ink-dim mt-0.5">{dateLine}</p>
              )}
              {location && (
                <p className="text-[13px] text-ink-dim mt-0.5">{location}</p>
              )}
              {group && (
                <p className="text-[14px] text-ink-muted mt-2">
                  {groupIcon ? `${groupIcon} ${group}` : group}
                </p>
              )}
            </>
          ) : (
            <>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-[17px] sm:text-[19px] font-medium text-ink tracking-tight leading-snug">
                  {isProgression ? listedName : primary?.title ?? listedName}
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
              {!isProgression && (
                <p className="text-ink-muted text-[14px] mt-0.5">{listedName}</p>
              )}
              {location && (
                <p className="text-[12px] text-ink-dim mt-1">{location}</p>
              )}
              {isProgression ? (
                <ol className="relative mt-5">
                  <div
                    aria-hidden="true"
                    className="absolute left-[5px] top-2 bottom-2 w-px bg-line"
                  />
                  {roleList.map((role) => (
                    <li
                      key={`${role.title}-${role.dateRange}`}
                      className="relative pl-7 pb-6 last:pb-0"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-[1.5px] top-1.5 h-2 w-2 rounded-full bg-ink ring-4 ring-canvas"
                      />
                      <p className="text-[11px] uppercase tracking-[0.22em] text-ink-dim font-medium">
                        {role.dateRange}
                      </p>
                      <p className="mt-1.5 text-[16px] sm:text-[17px] font-medium text-ink tracking-tight leading-snug">
                        {role.title}
                      </p>
                    </li>
                  ))}
                </ol>
              ) : (
                summary && (
                  <p className="text-ink-muted text-[14px] leading-relaxed mt-3 max-w-2xl">
                    {summary}
                  </p>
                )
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
