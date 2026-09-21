import Skill from "../../shared/models/Skill";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SkillItem: React.FC<{
  skill: Skill;
  compact?: boolean;
}> = ({ skill }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.3 }}
      className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 shadow-ring hover:border-line-strong hover:shadow-card transition-all"
    >
      <img
        className="h-4 w-4 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
        src={`/icons/libs/${skill.icon}.png`}
        alt={skill.icon}
      />
      <span className="text-[13px] text-ink-soft font-medium">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default SkillItem;
