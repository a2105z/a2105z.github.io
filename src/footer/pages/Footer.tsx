import { GITHUB_PROJECT_LINK } from "../../constants/links";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="w-full max-w-[1180px] mx-auto px-6 sm:px-10 md:px-14 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-[12px] text-ink-dim tracking-[0.02em]">
          © {year} Aarav Mittal · Designed &amp; built by hand
        </p>
        <a
          href={GITHUB_PROJECT_LINK}
          target="_blank"
          rel="noreferrer"
          className="hover-underline text-[12px] text-ink-dim hover:text-ink transition-colors"
        >
          Source on GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
