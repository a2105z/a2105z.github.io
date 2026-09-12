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
  groupIcon?: string;
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
  workplaceType?: string;
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
      className={`flex-shrink-0 h-12 w-12 rounded-lg flex items-center justify-center overflow-hidden ${chromeClass}`}
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
  if (/present/i.test(endDate)) return "";
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
  delay = 0,
  roles,
  kind,
  startDate,
  endDate,
  groupIcon,
  employmentType,
  workplaceType,
}) => {
  const roleList = roles ?? [];
  const listedName = company;
  const tenure = inclusiveDuration(startDate, endDate);
  const metaLine = [employmentType, tenure].filter(Boolean).join(" · ");
  const hasRail = roleList.length > 0;
  const isInternship = kind !== "fulltime";
  const workplaceLabel = workplaceType || "On-site";

  if (isInternship) {
    const role = roleList[0];
    const { headline, group } = splitHeadline(role?.title);
    const typeLine = [listedName, employmentType].filter(Boolean).join(" · ");
    const dateLine = [role?.dateRange, tenure].filter(Boolean).join(" · ");

    return (
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay, ease: EASE_PREMIUM }}
        className="group"
      >
        <div className="flex items-start gap-3.5">
          <LogoBadge
            logo={logo}
            logoFull={logoFull}
            tileColor={tileColor}
            company={company}
            monogram={monogram}
          />
          <div className="min-w-0 flex-1">
            <h3 className="text-[16px] font-semibold text-ink leading-snug">
              {headline || listedName}
            </h3>
            <p className="text-[14px] text-[#666666] mt-0.5 leading-snug">
              {typeLine}
            </p>
            {dateLine && (
              <p className="text-[14px] text-[#666666] mt-0.5 leading-snug">
                {dateLine}
              </p>
            )}
            {location && (
              <p className="text-[14px] text-[#666666] mt-0.5 leading-snug">
                {location}
              </p>
            )}
            {group && (
              <p className="text-[14px] text-ink mt-2 leading-snug">
                {groupIcon ? `${groupIcon} ${group}` : group}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: EASE_PREMIUM }}
      className="group"
    >
      <div className="flex items-stretch gap-3.5">
        <div className="relative w-12 flex-shrink-0">
          <div className="relative z-10">
            <LogoBadge
              logo={logo}
              logoFull={logoFull}
              tileColor={tileColor}
              company={company}
              monogram={monogram}
            />
          </div>
          {hasRail && (
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-14 bottom-1 w-px -translate-x-1/2 bg-line"
            />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-[16px] font-semibold text-ink leading-snug">
            {listedName}
          </h3>
          {metaLine && (
            <p className="text-[14px] text-[#666666] mt-0.5 leading-snug">
              {metaLine}
            </p>
          )}
          <p className="text-[14px] text-[#666666] mt-0.5 leading-snug">
            {workplaceLabel}
          </p>

          <ul className="mt-5 space-y-6">
            {roleList.map((role) => {
              const { headline, group } = splitHeadline(role.title);
              const roleIcon = role.groupIcon ?? groupIcon;
              return (
                <li key={`${role.title}-${role.dateRange}`} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute top-1.5 left-[-2.875rem] h-2 w-2 rounded-full bg-ink-dim ring-4 ring-canvas"
                  />
                  <p className="text-[16px] font-semibold text-ink leading-snug">
                    {headline || role.title}
                  </p>
                  <p className="text-[14px] text-[#666666] mt-0.5 leading-snug">
                    {role.dateRange}
                  </p>
                  {(role.location || location) && (
                    <p className="text-[14px] text-[#666666] mt-0.5 leading-snug">
                      {role.location || location}
                    </p>
                  )}
                  {group && (
                    <p className="text-[14px] text-ink mt-2 leading-snug">
                      {roleIcon ? `${roleIcon} ${group}` : group}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
