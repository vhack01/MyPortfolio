import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = ({ images }) => {
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
