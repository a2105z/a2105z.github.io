const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-white">
      <div className="w-full max-w-[1180px] mx-auto px-6 sm:px-10 md:px-14 py-8">
        <p className="text-[13px] text-ink-dim">
          © {year} Aarav Mittal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
