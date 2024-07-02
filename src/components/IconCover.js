const IconCover = ({ icon, link, modifiedStyle = "" }) => {
  const handleSocialIcon = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      className={`rounded-full border border-green-500 p-2 cursor-pointer hover:bg-green-500 text-green-500  hover:text-dark ${modifiedStyle}`}
      onClick={() => handleSocialIcon(link)}
    >
      {icon}
    </div>
  );
};

export default IconCover;
