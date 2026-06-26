import Connect from "./Connect";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5" id="footer">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#home" className="font-outfit text-xl font-bold tracking-tight text-white">
            <span className="gradient-text">&lt;</span>
            <span className="text-white"> Vishwas </span>
            <span className="gradient-text">/&gt;</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-gray-500 font-mono">
            © {currentYear} Vishwas Kumar. Crafted with ❤️
          </p>

          {/* Social */}
          <Connect />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
