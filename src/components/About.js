import { TypeAnimation } from "react-type-animation";
import { FaDownload } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Connect from "./Connect";

const About = () => {
  const handleResumeDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = "/Vishwas_Resume.pdf";
    anchor.download = "Vishwas_Kumar_Resume.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const stats = [
    { value: "2+", label: "Years Exp" },
    { value: "240M+", label: "Records Processed" },
    { value: "3", label: "AI Agents Built" },
    { value: "10+", label: "Microservices" },
  ];

  return (
    <section className="relative min-h-screen flex items-center" id="home">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 w-full relative z-10">
        {/* Top: Status line */}
        <div className="flex items-center gap-3 mb-8 font-mono text-xs text-white/30">
          <div className="pulse-dot" />
          <span>system.status</span>
          <span className="text-white/10">—</span>
          <span className="text-cyber-green">ONLINE</span>
          <span className="text-white/10">|</span>
          <span>location: Hyderabad, IN</span>
        </div>

        {/* Main hero - 2 column */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Left: Text content */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Name */}
            <div>
              <p className="font-mono text-xs text-cyber-green mb-3 tracking-widest uppercase">
                {"// Software Engineer"}
              </p>
              <h1 className="text-5xl md:text-7xl font-bold font-sora leading-[1.1] tracking-tight">
                <span className="text-white">Vishwas</span>
                <br />
                <span className="gradient-text-cyber">Kumar</span>
              </h1>
            </div>

            {/* Terminal typing box */}
            <div className="terminal-window max-w-lg">
              <div className="terminal-header">
                <div className="terminal-dot red" />
                <div className="terminal-dot yellow" />
                <div className="terminal-dot green" />
                <span className="terminal-title">~/about-me</span>
              </div>
              <div className="terminal-body text-sm leading-relaxed">
                <span className="text-cyber-green">❯ </span>
                <span className="text-white/60">cat </span>
                <span className="text-cyber-cyan">whoami.txt</span>
                <div className="mt-3 text-white/50 leading-relaxed">
                  Java Backend Developer building{" "}
                  <span className="text-cyber-green">REST APIs</span>,{" "}
                  <span className="text-cyber-cyan">microservices</span>, and{" "}
                  <span className="text-cyber-yellow">real-time data pipelines</span>{" "}
                  with Spring Boot, AWS & Kafka.
                </div>
                <div className="mt-4">
                  <span className="text-cyber-green">❯ </span>
                  <TypeAnimation
                    sequence={[
                      "building scalable systems_",
                      2500,
                      "shipping production code_",
                      2500,
                      "processing 240M+ records_",
                      2500,
                      "crafting AI agents_",
                      2500,
                    ]}
                    speed={40}
                    className="text-white/80"
                    repeat={Infinity}
                  />
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="btn-cyber" onClick={handleResumeDownload}>
                <FaDownload size={12} />
                resume.pdf
              </button>
              <a href="#contact" className="btn-outline">
                <FiMail size={14} />
                say_hello()
              </a>
            </div>

            {/* Social */}
            <Connect />
          </div>

          {/* Right: Bento grid */}
          <div className="w-full lg:w-[420px] flex flex-col gap-4">
            {/* Profile photo card */}
            <div className="bento-card flex items-center gap-5 p-5">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border border-white/10 flex-shrink-0 shadow-lg">
                <img
                  src="/vishwas_min.png"
                  alt="Vishwas Kumar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">Vishwas Kumar</h3>
                <p className="text-white/40 text-sm font-mono">
                  @vhack01
                </p>
                <div className="flex items-center gap-2 mt-1.5">
                  <div className="pulse-dot" style={{ width: 6, height: 6 }} />
                  <span className="text-cyber-green text-xs font-mono">
                    Open to work
                  </span>
                </div>
              </div>
            </div>

            {/* Stats bento grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="bento-card text-center py-5">
                  <div className="text-2xl md:text-3xl font-bold font-sora gradient-text-cyber">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/30 font-mono mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech stack marquee */}
            <div className="bento-card p-4 overflow-hidden">
              <p className="text-xs text-white/20 font-mono mb-3 uppercase tracking-widest">
                tech_stack
              </p>
              <div className="marquee-container">
                <div className="marquee-content gap-3">
                  {[
                    "Java",
                    "Spring Boot",
                    "AWS",
                    "Kafka",
                    "PostgreSQL",
                    "Redis",
                    "Docker",
                    "K8s",
                    "Spark",
                    "FastAPI",
                    "Java",
                    "Spring Boot",
                    "AWS",
                    "Kafka",
                    "PostgreSQL",
                    "Redis",
                    "Docker",
                    "K8s",
                    "Spark",
                    "FastAPI",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="tag tag-green whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
