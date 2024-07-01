import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      url: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      url: "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg?download=true",
    },
    {
      url: "https://4kwallpapers.com/images/walls/thumbs_2t/8324.png",
    },
    {
      url: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
      />
    </div>
  );
};

export default ImageSlider;
