import React from 'react';

const PizzaCard = ({ 
  image = "/api/placeholder/300/300",
  title = "HOUSE PIE",
  ingredients = "Tomato, mozzarella, basil, parmesan.",
  smallPrice = 5,
  largePrice = 37,
  variant = "left",
  noBorder = false
}) => {
  return (  
    <div className={`grid grid-cols-6 gap-4 items-center py-8 ${noBorder ? '' : 'border-b border-black'}`}>
      {variant === "left" && (
        <div className="col-span-3">
          <img src={image} alt={title} className="w-full object-cover max-w-[280px]" />
        </div>
      )}
      <div className="flex flex-col col-span-3 gap-4 lg:gap-5">
        <h3 className="font-secondary font-medium text-2xl lg:text-3xl tracking-[-0.03em] uppercase leading-6 lg:leading-10">
          {title}
        </h3>
        <p className="text-black text-xs lg:text-lg tracking-[-0.03em] font-medium font-primary leading-4 lg:leading-7">
          {ingredients}
        </p>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <img src="/icons/slice-pizza.png" alt="icon slice pizza" className="w-6 h-6 " />
            <span className="text-md font-semibold">{largePrice}€</span>
          </div>
          <div className="flex items-center gap-1">
            <img src="/icons/entire-pizza.png" alt="icon entire pizza" className="w-6 h-6 " />
            <span className="text-md font-semibold">{smallPrice}€</span>
          </div>
        </div>
      </div>
      {variant === "right" && (
        <div className="col-span-3">
          <img src={image} alt={title} className="w-full object-cover max-w-[280px]" />
        </div>
      )}
    </div>
  );
};


export default PizzaCard;