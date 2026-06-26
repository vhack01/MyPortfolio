import useScrollReveal from "../hooks/useScrollReveal";

const Education = () => {
  const [ref, isVisible] = useScrollReveal(0.1);

  return (
    <section className="relative py-24" id="education">
      <div className="section-sep" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-cyber-green tracking-widest uppercase">
            {"// 04"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-sora mt-2 text-white">
            Education
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 reveal ${
            isVisible ? "visible" : ""
          }`}
        >
          {/* B.Tech */}
          <div className="bento-card p-8 flex flex-col gap-5 relative">
            {/* Decorative number */}
            <div className="absolute -right-2 -top-4 text-[5rem] font-bold font-sora text-white/[0.02] leading-none select-none">
              01
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyber-green/10 flex items-center justify-center text-cyber-green text-lg">
                🎓
              </div>
              <div>
                <span className="tag tag-green text-[0.65rem]">Jul '21 — May '25</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white font-sora">
                Bachelor of Technology
              </h3>
              <p className="text-cyber-cyan text-sm font-medium mt-1">
                Computer Science & Engineering
              </p>
            </div>

            <div className="text-white/40 text-sm">
              <p className="font-medium text-white/60">
                Lovely Professional University
              </p>
              <p className="text-xs mt-0.5">Phagwara, Punjab, India</p>
            </div>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
              <span className="font-mono text-xs text-white/30 uppercase tracking-wider">
                Grade
              </span>
              <span className="font-mono text-lg font-bold text-cyber-green text-glow-green">
                8.12<span className="text-white/30 text-sm">/10.0</span>
              </span>
            </div>
          </div>

          {/* Higher Secondary */}
          <div className="bento-card p-8 flex flex-col gap-5 relative">
            <div className="absolute -right-2 -top-4 text-[5rem] font-bold font-sora text-white/[0.02] leading-none select-none">
              02
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyber-cyan/10 flex items-center justify-center text-cyber-cyan text-lg">
                🏫
              </div>
              <div>
                <span className="tag tag-cyan text-[0.65rem]">2018 — 2020</span>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white font-sora">
                Higher Secondary School
              </h3>
              <p className="text-cyber-cyan text-sm font-medium mt-1">
                Science (PCM)
              </p>
            </div>

            <div className="text-white/40 text-sm">
              <p className="font-medium text-white/60">
                Maharana Pratap Education Center
              </p>
              <p className="text-xs mt-0.5">Kanpur, Uttar Pradesh</p>
            </div>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
              <span className="font-mono text-xs text-white/30 uppercase tracking-wider">
                Score
              </span>
              <span className="font-mono text-lg font-bold text-cyber-cyan text-glow-cyan">
                91<span className="text-white/30 text-sm">%</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
