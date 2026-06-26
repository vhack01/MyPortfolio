import useScrollReveal from "../hooks/useScrollReveal";
import {
  ICON_JAVA_URL,
  ICON_CPP_URL,
  ICON_JAVASCRIPT_URL,
  ICON_SPRING_URL,
  ICON_REACT_URL,
  ICON_REDUX_URL,
  ICON_POSTGRESQL_URL,
  ICON_MYSQL_URL,
  ICON_REDIS_URL,
  ICON_KAFKA_URL,
  ICON_SPARK_URL,
  ICON_AWS_URL,
  ICON_DOCKER_URL,
  ICON_KUBERNETES_URL,
  ICON_TERRAFORM_URL,
  ICON_GIT_URL,
  ICON_GITLAB_URL,
  ICON_GRAFANA_URL,
} from "../utils/constants";

const skillGroups = [
  {
    title: "Languages",
    prefix: "lang",
    color: "text-cyber-green",
    borderColor: "border-cyber-green/20",
    skills: [
      { name: "Java", icon: ICON_JAVA_URL },
      { name: "C++", icon: ICON_CPP_URL },
      { name: "JavaScript", icon: ICON_JAVASCRIPT_URL },
      { name: "DSA", icon: null },
      { name: "Agentic AI", icon: null },
    ],
  },
  {
    title: "Frameworks",
    prefix: "fw",
    color: "text-cyber-cyan",
    borderColor: "border-cyan-500/20",
    skills: [
      { name: "Spring Boot", icon: ICON_SPRING_URL },
      { name: "Hibernate/JPA", icon: null },
      { name: "JUnit/Mockito", icon: null },
      { name: "ReactJS", icon: ICON_REACT_URL },
      { name: "Redux", icon: ICON_REDUX_URL },
    ],
  },
  {
    title: "Data & Streaming",
    prefix: "data",
    color: "text-cyber-yellow",
    borderColor: "border-yellow-500/20",
    skills: [
      { name: "MySQL", icon: ICON_MYSQL_URL },
      { name: "PostgreSQL", icon: ICON_POSTGRESQL_URL },
      { name: "Redis", icon: ICON_REDIS_URL },
      { name: "Apache Kafka", icon: ICON_KAFKA_URL },
      { name: "Apache Spark", icon: ICON_SPARK_URL },
    ],
  },
  {
    title: "Cloud & DevOps",
    prefix: "ops",
    color: "text-cyber-pink",
    borderColor: "border-pink-500/20",
    skills: [
      { name: "AWS", icon: ICON_AWS_URL },
      { name: "Docker", icon: ICON_DOCKER_URL },
      { name: "Kubernetes", icon: ICON_KUBERNETES_URL },
      { name: "Terraform", icon: ICON_TERRAFORM_URL },
      { name: "GitLab CI/CD", icon: ICON_GITLAB_URL },
      { name: "Git", icon: ICON_GIT_URL },
      { name: "Grafana", icon: ICON_GRAFANA_URL },
    ],
  },
];

const Skill = () => {
  const [ref, isVisible] = useScrollReveal(0.05);

  return (
    <section className="relative py-24" id="skill">
      <div className="section-sep" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-cyber-green tracking-widest uppercase">
            {"// 03"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-sora mt-2 text-white">
            Tech Arsenal
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 reveal ${
            isVisible ? "visible" : ""
          }`}
        >
          {skillGroups.map((group, gIdx) => (
            <div
              key={gIdx}
              className={`bento-card`}
            >
              {/* Category header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className={`font-mono text-xs ${group.color} opacity-50`}>
                    {group.prefix}/
                  </span>
                  <h3 className={`font-mono text-sm ${group.color}`}>
                    {group.title}
                  </h3>
                </div>
                <span className="font-mono text-xs text-white/15">
                  {group.skills.length} items
                </span>
              </div>

              {/* Skills list */}
              <div className="flex flex-col gap-2">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="skill-card"
                    style={{
                      transitionDelay: isVisible ? `${sIdx * 80}ms` : "0ms",
                    }}
                  >
                    {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} />
                    ) : (
                      <div
                        className={`w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold font-mono ${group.color}`}
                        style={{
                          background: "rgba(255,255,255,0.05)",
                        }}
                      >
                        {skill.name.charAt(0)}
                      </div>
                    )}
                    <span className="text-white/70 text-sm">{skill.name}</span>
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

export default Skill;
