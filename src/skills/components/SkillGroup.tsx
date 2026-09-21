import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SKILLS } from "../../constants/skills";
import Skill from "../../shared/models/Skill";
import SkillItem from "./SkillItem";
import { EASE_PREMIUM } from "../../shared/motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

const SkillGroup: React.FC<{ skillTitle: string; skillID: string }> = (
  props
) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  return (
    <div ref={ref} className="py-8 border-t border-line first:border-t-0">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 8 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: EASE_PREMIUM },
          },
        }}
        className="text-[11px] uppercase tracking-[0.24em] text-ink-dim font-medium mb-5"
      >
        {props.skillTitle}
      </motion.p>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={container}
        className="flex flex-wrap gap-2"
      >
        {SKILLS[props.skillID].map((skill: Skill) => (
          <SkillItem
            key={`skill-${skill.name}-${skill.icon}`}
            skill={skill}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SkillGroup;
