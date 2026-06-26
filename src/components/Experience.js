import useScrollReveal from "../hooks/useScrollReveal";
import { FiCalendar, FiMapPin } from "react-icons/fi";

const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Demandbase",
    period: "Aug '25 — Present",
    location: "Hyderabad, India",
    color: "text-cyber-green",
    bg: "bg-cyber-green",
    glow: "glow-green",
    border: "border-cyber-green/30",
    projects: [
      {
        name: "Match Mapping NRT Pipeline",
        bullets: [
          "Designed CDC Architecture pipeline from PostgreSQL to CelerData (StarRocks), reducing data inconsistency from 24h to < 5s.",
          "Built high-performance Spark job processing 240+ million records from Kafka to Apache Iceberg.",
          "Developed Kafka Connect application with Debezium to capture PostgreSQL WAL changes for real-time streaming.",
        ],
      },
      {
        name: "Account Intelligence Agent",
        bullets: [
          "Built a multi-tenant AI agent (FastAPI, LangGraph, AWS Bedrock) with 7+ tools & streaming APIs.",
          "Implemented 5-stage AI guardrail pipeline blocking prompt-injection & adversarial inputs.",
          "Added multi-turn memory on AWS AgentCore with circuit breaker, preventing conversation loss.",
          "Led zero-downtime LiteLLM proxy migration behind LaunchDarkly flags.",
        ],
      },
      {
        name: "Sales-AI-Summary",
        bullets: [
          "Integrated AWS Bedrock & LiteLLM with LaunchDarkly for dynamic model routing.",
          "Built REST APIs on PostgreSQL/Spring Data JPA with 22 Liquibase migrations.",
          "Designed async pipeline (Redis → AWS SQS → multi-threaded consumer) for AI caches.",
          "Built Strategy-pattern summary engine with 7 pluggable topic providers.",
        ],
      },
    ],
  },
  {
    role: "SDE Intern",
    company: "Demandbase",
    period: "Jul '24 — Jul '25",
    location: "Hyderabad, India",
    color: "text-cyber-cyan",
    bg: "bg-cyber-cyan",
    glow: "glow-cyan",
    border: "border-cyber-cyan/30",
    projects: [
      {
        name: "Core Infrastructure & Reliability",
        bullets: [
          "Resolved critical CRM data duplication by refactoring data transformation pipeline.",
          "Modernized cloud deployments migrating 3 microservices to Helm charts + K8s PDBs.",
          "Engineered API performance tests using Grafana K6 for high-load simulation.",
          "Enhanced reliability with JUnit/Mockito tests + GitLab CI/CD automated validations.",
        ],
      },
    ],
  },
];

const Experience = () => {
  const [ref, isVisible] = useScrollReveal(0.05);

  return (
    <section className="relative py-24" id="experience">
      <div className="section-sep" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-cyber-green tracking-widest uppercase">
            {"// 02"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-sora mt-2 text-white">
            Experience
          </h2>
        </div>

        {/* Timeline Container */}
        <div
          ref={ref}
          className={`relative border-l border-white/10 ml-4 md:ml-6 flex flex-col gap-16 reveal ${
            isVisible ? "visible" : ""
          }`}
        >
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-2 w-4 h-4 -translate-x-[9px] rounded-full ${exp.bg} ${exp.glow} ring-4 ring-[#050505]`}
              />

              {/* Role Header */}
              <div className="mb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-sora">
                    {exp.role}
                  </h3>
                  <div className={`font-mono text-lg mt-2 ${exp.color}`}>
                    @ {exp.company}
                  </div>
                </div>
                <div className="flex flex-col lg:items-end gap-2 text-white/50 font-mono text-sm">
                  <div className="flex items-center gap-2">
                    <FiCalendar className={exp.color} /> {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMapPin className={exp.color} /> {exp.location}
                  </div>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {exp.projects.map((proj, pIdx) => (
                  <div
                    key={pIdx}
                    className="bento-card p-6 md:p-8 hover:bg-white/[0.03] transition-colors group"
                  >
                    <h4 className="text-white font-sora text-lg md:text-xl mb-5 flex items-center gap-3">
                      <span
                        className={`w-2.5 h-2.5 rounded-sm ${exp.bg} opacity-80 group-hover:opacity-100 transition-opacity`}
                      />
                      {proj.name}
                    </h4>
                    <ul className="flex flex-col gap-4">
                      {proj.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="text-white/60 text-sm md:text-base leading-relaxed flex items-start gap-3"
                        >
                          <span className={`${exp.color} mt-1 text-xs opacity-70`}>
                            ❯
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
