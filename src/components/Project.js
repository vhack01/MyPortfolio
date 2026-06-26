import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal";
import ImageSlider from "./ImageSlider";
import ReactPlayer from "react-player";

const projects = [
  {
    num: "01",
    title: "Mini Twitter",
    description:
      "Full-stack social platform with real-time feed, auth, rich media, follow system, and tweet interactions.",
    tech: ["React", "Redux", "TailwindCSS", "Node.js", "Express", "MongoDB", "Cloudinary"],
    liveUrl: "https://mini-twitter-app.vercel.app/",
    githubUrl: "https://github.com/vhack01/Mini-Twitter",
    images: [
      { url: "/assets/twitter_1.png" },
      { url: "/assets/twitter_2.png" },
      { url: "/assets/twitter_3.png" },
      { url: "/assets/twitter_4.png" },
      { url: "/assets/twitter_5.png" },
    ],
    videoUrl:
      "https://res.cloudinary.com/dryvdqck7/video/upload/v1719984453/videos/Mini_Twitter_dgzbnf.mp4",
    color: "cyber-green",
  },
  {
    num: "02",
    title: "Proshop E-Commerce",
    description:
      "Feature-rich e-commerce with product catalog, reviews, cart, payment integration, and admin dashboard.",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://vhack-ecom.onrender.com/",
    githubUrl: "https://github.com/vhack01/e-com",
    images: [
      { url: "/assets/e-com/ecom_1.png" },
      { url: "/assets/e-com/ecom_2.png" },
      { url: "/assets/e-com/ecom_3.png" },
      { url: "/assets/e-com/ecom_4.png" },
      { url: "/assets/e-com/ecom_5.png" },
    ],
    videoUrl:
      "https://res.cloudinary.com/dryvdqck7/video/upload/v1719984507/videos/Proshop_agcsdg.mp4",
    color: "cyber-cyan",
  },
  {
    num: "03",
    title: "Netflix Clone",
    description:
      "Netflix-inspired streaming UI with Firebase auth, TMDB movie catalog, and responsive design.",
    tech: ["React", "Firebase", "TMDB API", "CSS"],
    liveUrl: null,
    githubUrl: "https://github.com/vhack01/NetflixGPT",
    images: [
      { url: "/assets/netflix/netflix_1.png" },
      { url: "/assets/netflix/netflix_2.png" },
      { url: "/assets/netflix/netflix_3.png" },
      { url: "/assets/netflix/netflix_4.png" },
    ],
    videoUrl: null,
    color: "cyber-pink",
  },
];

const colorMap = {
  "cyber-green": {
    text: "text-cyber-green",
    border: "rgba(0, 255, 136, 0.15)",
    glow: "rgba(0, 255, 136, 0.1)",
    tagClass: "tag-green",
  },
  "cyber-cyan": {
    text: "text-cyber-cyan",
    border: "rgba(0, 212, 255, 0.15)",
    glow: "rgba(0, 212, 255, 0.1)",
    tagClass: "tag-cyan",
  },
  "cyber-pink": {
    text: "text-cyber-pink",
    border: "rgba(255, 0, 128, 0.15)",
    glow: "rgba(255, 0, 128, 0.1)",
    tagClass: "tag-pink",
  },
};

const Project = () => {
  const [ref, isVisible] = useScrollReveal(0.05);

  return (
    <section className="relative py-24" id="projects">
      <div className="section-sep" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-cyber-green tracking-widest uppercase">
            {"// 05"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-sora mt-2 text-white">
            Featured Projects
          </h2>
        </div>

        <div
          ref={ref}
          className={`flex flex-col gap-16 reveal ${isVisible ? "visible" : ""}`}
        >
          {projects.map((project, idx) => {
            const colors = colorMap[project.color];
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={idx}
                className="project-card"
              >
                <div
                  className={`flex flex-col ${
                    isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-0`}
                >
                  {/* Media side */}
                  <div className="lg:w-[55%] relative bg-white/[0.01]">
                    {/* Large project number */}
                    <div className="project-number" style={{ color: 'transparent' }}>
                      {project.num}
                    </div>

                    {project.videoUrl ? (
                      <div className="aspect-video">
                        <ReactPlayer
                          url={project.videoUrl}
                          controls={true}
                          width="100%"
                          height="100%"
                        />
                      </div>
                    ) : (
                      <div className="p-6">
                        <ImageSlider images={project.images} />
                      </div>
                    )}
                  </div>

                  {/* Info side */}
                  <div className="lg:w-[45%] p-8 lg:p-10 flex flex-col justify-between gap-6">
                    <div className="flex flex-col gap-5">
                      {/* Number and title */}
                      <div>
                        <span
                          className={`font-mono text-xs ${colors.text} opacity-60`}
                        >
                          project_{project.num}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white font-sora mt-1">
                          {project.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-white/40 text-sm leading-relaxed">
                        {project.description}
                      </p>

                      {/* Image slider (when video is present, show smaller slider) */}
                      {project.videoUrl && (
                        <div className="rounded-xl overflow-hidden border border-white/5">
                          <ImageSlider images={project.images} />
                        </div>
                      )}

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, tIdx) => (
                          <span key={tIdx} className={`tag ${colors.tagClass}`}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-white/5">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-cyber text-xs py-2 px-4"
                        >
                          <FaExternalLinkAlt size={10} />
                          live_demo
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline text-xs py-2 px-4"
                      >
                        <FaGithub size={14} />
                        source_code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
