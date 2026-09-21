import { motion } from "framer-motion";
import { EASE_PREMIUM } from "../../shared/motion";

interface CertificationItemProps {
  name: string;
  issuer: string;
  monogram?: string;
  logo?: string;
  logoFull?: boolean;
  tileColor?: string;
  issued: string;
  expires?: string;
  credentialId?: string;
  summary?: string;
  delay?: number;
}

const LogoBadge: React.FC<{
  logo?: string;
  logoFull?: boolean;
  tileColor?: string;
  name: string;
  monogram?: string;
}> = ({ logo, logoFull, tileColor, name, monogram }) => {
  const fallbackText = monogram || name.slice(0, 3).toUpperCase();
  const fallbackSize =
    fallbackText.length >= 4
      ? "text-[9px]"
      : fallbackText.length === 3
      ? "text-[10.5px]"
      : "text-[13px]";

  if (logo) {
    return (
      <div
        className={`flex-shrink-0 h-12 w-12 rounded-lg flex items-center justify-center overflow-hidden ${
          logoFull
            ? "border-0 shadow-ring"
            : "bg-surface border border-line shadow-ring"
        }`}
        style={logoFull && tileColor ? { backgroundColor: tileColor } : undefined}
      >
        <img
          src={logo}
          alt={name}
          className={
            logoFull
              ? "h-full w-full object-contain object-center p-1"
              : "h-full w-full object-contain p-2"
          }
        />
      </div>
    );
  }

  return (
    <div
      className="flex-shrink-0 h-12 w-12 rounded-lg flex items-center justify-center overflow-hidden border-0 shadow-ring"
      style={{ backgroundColor: tileColor || "#111111" }}
    >
      <span className={`${fallbackSize} font-bold text-white tracking-[0.04em]`}>
        {fallbackText}
      </span>
    </div>
  );
};

const CertificationItem: React.FC<CertificationItemProps> = ({
  name,
  issuer,
  monogram,
  logo,
  logoFull,
  tileColor,
  issued,
  expires,
  credentialId,
  summary,
  delay = 0,
}) => {
  const dateLine = expires
    ? `Issued ${issued} · Expires ${expires}`
    : `Issued ${issued}`;

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
          name={name}
          monogram={monogram}
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-[16px] font-semibold text-ink leading-snug">
            {name}
          </h3>
          <p className="text-[14px] text-ink mt-0.5 leading-snug">{issuer}</p>
          <p className="text-[14px] text-[#666666] mt-0.5 leading-snug">
            {dateLine}
          </p>
          {credentialId && (
            <p className="text-[14px] text-[#666666] mt-0.5 leading-snug">
              Credential ID {credentialId}
            </p>
          )}
          {summary && (
            <p className="text-[14px] text-[#666666] mt-1.5 leading-snug">
              {summary}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default CertificationItem;
