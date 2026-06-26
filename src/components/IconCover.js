const IconCover = ({ icon, link, label = "" }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-accent-400 hover:border-accent-500/30 hover:bg-accent-500/10 transition-all duration-300 hover:scale-110"
    >
      {icon}
    </a>
  );
};

export default IconCover;
