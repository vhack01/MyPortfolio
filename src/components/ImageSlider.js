import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = () => {
  const images = [
    {
      url: "/assets/twitter_1.png",
    },
    {
      url: "/assets/twitter_2.png",
    },
    {
      url: "/assets/twitter_3.png",
    },
    {
      url: "/assets/twitter_4.png",
    },
    {
      url: "/assets/twitter_5.png",
    },
  ];
  return (
    <div className="rounded-lg overflow-hidden relative shadow-iconShadow">
      <SimpleImageSlider
        width={350}
        height={250}
        images={images}
        showBullets={false}
        showNavs={false}
        loop={true}
        autoPlay={true}
        style={{ backgroundSize: "contain !important" }}
      />
    </div>
  );
};

export default ImageSlider;
