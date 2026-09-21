import { motion } from "framer-motion";
import ProjectItem from "../../shared/models/ProjectItem";
import { EASE_PREMIUM } from "../../shared/motion";

const Project: React.FC<{
  project: ProjectItem;
  index: number;
  last?: boolean;
}> = ({ project, index, last }) => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: EASE_PREMIUM }}
      className={`group grid grid-cols-12 gap-x-8 py-10 ${
        last ? "" : "border-b border-line"
      }`}
    >
      <div className="col-span-2 sm:col-span-1">
        <span className="text-[11px] font-mono text-ink-dim tracking-widest">
          {num}
        </span>
      </div>

      <div className="col-span-10 sm:col-span-8">
        <h3 className="text-[1.35rem] sm:text-[1.55rem] font-medium text-ink tracking-tight leading-tight group-hover:opacity-80 transition-opacity">
          {project.displayTitle}
        </h3>
        <p className="mt-2 text-ink-muted text-[15px] sm:text-[16px] leading-relaxed max-w-2xl">
          {project.description}
        </p>
        {project.impact && (
          <p className="mt-2 text-ink-dim text-[13.5px] leading-relaxed max-w-2xl">
            {project.impact}
          </p>
        )}

        {project.skills && project.skills.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
            {project.skills.slice(0, 6).map((skill) => (
              <span
                key={`${project.id}-${skill.name}`}
                className="text-[11.5px] uppercase tracking-[0.16em] text-ink-dim font-medium"
              >
                {skill.name}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="hidden sm:flex col-span-3 items-start justify-end pt-1">
        <span className="text-[12px] text-ink-dim tracking-[0.06em]">
          {project.startTime}
          {project.endTime && ` — ${project.endTime}`}
        </span>
      </div>
    </motion.div>
  );
};

export default Project;
