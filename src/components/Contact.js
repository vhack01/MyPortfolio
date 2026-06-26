import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import useScrollReveal from "../hooks/useScrollReveal";
import Connect from "./Connect";

const Contact = () => {
  const [ref, isVisible] = useScrollReveal(0.1);

  const contactInfo = [
    {
      icon: <FiMail size={16} />,
      label: "email",
      value: "vishwas101kumar@gmail.com",
      href: "mailto:vishwas101kumar@gmail.com",
      color: "text-cyber-green",
    },
    {
      icon: <FiPhone size={16} />,
      label: "phone",
      value: "+91 956-928-8612",
      href: null,
      color: "text-cyber-cyan",
    },
    {
      icon: <FiMapPin size={16} />,
      label: "location",
      value: "Hyderabad, Telangana, India",
      href: null,
      color: "text-cyber-yellow",
    },
  ];

  return (
    <section className="relative py-24" id="contact">
      <div className="section-sep" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-cyber-green tracking-widest uppercase">
            {"// 06"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-sora mt-2 text-white">
            Let's Connect
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-5 gap-8 reveal ${
            isVisible ? "visible" : ""
          }`}
        >
          {/* Left - Contact info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <p className="text-white/40 leading-relaxed">
              Open to discussing new projects, creative ideas, or opportunities.
              Feel free to reach out — I don't bite!
            </p>

            {/* Contact cards */}
            <div className="flex flex-col gap-3">
              {contactInfo.map((item, idx) => {
                const Inner = (
                  <div className="bento-card p-4 flex items-center gap-4 group cursor-pointer">
                    <div className={`${item.color} opacity-60 group-hover:opacity-100 transition-opacity`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-mono text-xs text-white/20 uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-white/70 text-sm mt-0.5 group-hover:text-white transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={idx} href={item.href}>
                    {Inner}
                  </a>
                ) : (
                  <div key={idx}>{Inner}</div>
                );
              })}
            </div>

            {/* Social */}
            <div>
              <p className="font-mono text-xs text-white/20 uppercase tracking-wider mb-3">
                socials
              </p>
              <Connect />
            </div>
          </div>

          {/* Right - Form as terminal */}
          <div className="lg:col-span-3">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot red" />
                <div className="terminal-dot yellow" />
                <div className="terminal-dot green" />
                <span className="terminal-title">~/send-message</span>
              </div>
              <div className="terminal-body">
                <form className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs text-white/30">
                      <span className="text-cyber-green">const</span> name <span className="text-white/15">=</span>
                    </label>
                    <input
                      type="text"
                      id="contact_name"
                      placeholder='"Your Name"'
                      className="input-cyber"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs text-white/30">
                      <span className="text-cyber-green">const</span> email <span className="text-white/15">=</span>
                    </label>
                    <input
                      type="email"
                      id="contact_email"
                      placeholder='"your@email.com"'
                      required
                      className="input-cyber"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-xs text-white/30">
                      <span className="text-cyber-green">const</span> message <span className="text-white/15">=</span>
                    </label>
                    <textarea
                      id="contact_message"
                      placeholder='"Tell me about your project..."'
                      rows={5}
                      className="input-cyber resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-cyber justify-center w-full mt-2"
                  >
                    <FiSend size={14} />
                    send_message()
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
