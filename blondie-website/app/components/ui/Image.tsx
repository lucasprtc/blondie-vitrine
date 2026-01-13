import React from "react";

type Position = "TL" | "TR" | "BL" | "BR";
type Topping = "basil" | "mushroom" | "origano" | "pepper" | "pepperoni";

interface ImageWithOverlayProps {
  src: string;
  position?: Position;
  topping?: Topping;
  alt?: string;
  className?: string;
}

const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({
  src,
  position = "TL",
  topping = "basil",
  alt = "Image",
  className = "",
}) => {
  const toppingImages: Record<Topping, string> = {
    basil: "/food/basil.png",
    mushroom: "/food/mushroom.png",
    origano: "/food/origano.png",
    pepper: "/food/pepper.png",
    pepperoni: "/food/pepperoni.png",
  };

  const positionClasses: Record<Position, string> = {
    TL: "top-2 left-2",
    TR: "top-2 right-2",
    BL: "bottom-2 left-2",
    BR: "bottom-2 right-2",
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover "
      />
      <img src={toppingImages[topping]} alt={topping} className={`absolute max-w-[50px] ${positionClasses[position]}`} />

      {/* <div
        className={`absolute ${positionClasses[position]} bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg`}
      >
        <span className="text-4xl">{toppingImages[topping]}</span>
      </div> */}
    </div>
  );
};

export default ImageWithOverlay;
