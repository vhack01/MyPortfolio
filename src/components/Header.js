import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ["home", "experience", "skill", "education", "projects", "contact"];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skill" },
    { label: "Education", id: "education" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className={`w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? "pt-4" : "pt-6"}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div 
          className={`flex items-center justify-between transition-all duration-500 ${
            scrolled 
              ? "bg-[#050505]/80 backdrop-blur-lg border border-white/10 rounded-full px-5 md:px-6 py-2.5 shadow-2xl shadow-cyber-green/5" 
              : "bg-transparent px-2 py-2"
          }`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNav(e, "home")}
            className="font-sora font-bold text-xl tracking-tight text-white flex items-center gap-1.5 group select-none"
          >
            <span className="text-cyber-green font-mono opacity-60 group-hover:opacity-100 transition-opacity duration-300 text-lg">&lt;</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 group-hover:to-cyber-cyan transition-all duration-300">
              Vishwas
            </span>
            <span className="text-cyber-green font-mono opacity-60 group-hover:opacity-100 transition-opacity duration-300 text-lg">/&gt;</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/[0.05]">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNav(e, item.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-cyber-green text-[#050505] shadow-[0_0_15px_rgba(0,255,136,0.3)]"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden text-white p-2 relative z-[60]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 rounded-full ${
                    mobileOpen ? "rotate-45 translate-y-2 bg-cyber-green" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 rounded-full ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 bg-white transition-all duration-300 rounded-full ${
                    mobileOpen ? "-rotate-45 -translate-y-2 bg-cyber-green" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Overlay */}
        <div
          className={`fixed inset-0 z-50 bg-[#050505]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
            mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {navItems.map((item, idx) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNav(e, item.id)}
              className="font-sora text-3xl font-bold text-white/60 hover:text-cyber-green transition-colors"
              style={{
                transitionDelay: mobileOpen ? `${idx * 50}ms` : "0ms",
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                opacity: mobileOpen ? 1 : 0,
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
