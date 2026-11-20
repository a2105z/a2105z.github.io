import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EMAIL_LINK, GITHUB_LINK, LINKEDIN_LINK } from "../../constants/links";

const Hero: React.FC<{
  onGoToPage: (newPage: string) => void;
}> = ({ onGoToPage }) => {
  const ref = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const blockRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const firstRef = useRef<HTMLSpanElement>(null);
  const lastRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fit = () => {
      const block = blockRef.current;
      const lines = [firstRef.current, lastRef.current];
      if (!block || lines.some((el) => !el)) return;
      const width = block.clientWidth;
      const sizes = lines.map((el) => {
        el!.style.fontSize = "100px";
        return el!.scrollWidth ? (100 * width) / el!.scrollWidth : 100;
      });
      lines.forEach((el, i) => {
        el!.style.fontSize = `${sizes[i]}px`;
      });

      const name = nameRef.current;
      const copy = copyRef.current;
      if (!name || !copy) return;
      const gap = Math.max(24, window.innerHeight * 0.05);
      const room = copy.offsetTop - gap - name.offsetTop;
      const height = block.offsetHeight;
      if (room > 0 && height > room) {
        const k = room / height;
        lines.forEach((el, i) => {
          el!.style.fontSize = `${sizes[i] * k}px`;
        });
      }
    };
    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    if (blockRef.current) ro.observe(blockRef.current);
    if (copyRef.current) ro.observe(copyRef.current);
    window.addEventListener("resize", fit);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, []);

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    for (const el of [firstRef.current, lastRef.current]) {
      if (!el) continue;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
      el.style.setProperty("--ma", "0.95");
    }
  };

  const onPointerLeave = () => {
    for (const el of [firstRef.current, lastRef.current]) {
      el?.style.setProperty("--ma", "0");
    }
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const firstY = useTransform(scrollYProgress, [0, 1], ["0%", "-38%"]);
  const lastY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const nameOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);
  const nameScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.32], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.32], [0, -48]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[560px] overflow-hidden bg-black"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <motion.div
        ref={nameRef}
        style={{ opacity: nameOpacity, scale: nameScale }}
        className="absolute inset-x-0 top-[18svh] px-6 sm:px-10 md:px-14"
      >
        <div ref={blockRef} className="intro-letters mx-auto w-full max-w-[1180px]">
          <h1 className="font-extrabold uppercase tracking-[-0.045em]">
            <motion.span
              ref={firstRef}
              style={{ y: firstY }}
              className="chrome block w-max whitespace-nowrap leading-[0.82] will-change-transform [--in:0.15s]"
            >
              Aarav
            </motion.span>
            <motion.span
              ref={lastRef}
              style={{ y: lastY }}
              className="chrome mt-[0.08em] block w-max whitespace-nowrap leading-[0.82] will-change-transform [--in:0.55s]"
            >
              Mittal
            </motion.span>
          </h1>
        </div>
      </motion.div>

      <motion.div
        ref={copyRef}
        style={{ opacity: copyOpacity, y: copyY }}
        className="absolute inset-x-0 bottom-0 px-6 pb-[max(28px,5svh)] sm:px-10 md:px-14"
      >
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="intro-copy max-w-xl">
            <p className="inline-flex items-center gap-2 text-[12px] tracking-[0.08em] text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Currently @ Rivian · Previously @ Amazon
            </p>
            <p className="mt-4 text-[1.35rem] font-medium leading-[1.15] tracking-[-0.03em] text-ink sm:text-[1.7rem]">
              Building products, companies,
              <br />
              and the businesses behind them.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px]">
              <button
                onClick={() => onGoToPage("About")}
                className="rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-canvas"
              >
                About
              </button>
              <button
                onClick={() => onGoToPage("Experience")}
                className="text-ink-muted hover:text-ink"
              >
                Experience
              </button>
              <a href={LINKEDIN_LINK} target="_blank" rel="noreferrer" className="text-ink-muted hover:text-ink">
                LinkedIn
              </a>
              <a href={GITHUB_LINK} target="_blank" rel="noreferrer" className="text-ink-muted hover:text-ink">
                GitHub
              </a>
              <a href={EMAIL_LINK} className="text-ink-muted hover:text-ink">
                Email
              </a>
            </div>
          </div>

          <div className="intro-portrait hidden md:block">
            <img
              src="/images/aarav.png?v=2"
              alt="Aarav Mittal"
              className="h-56 w-44 rounded-2xl object-cover object-[center_20%] shadow-ring"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
