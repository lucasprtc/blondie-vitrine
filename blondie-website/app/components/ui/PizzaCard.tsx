import React from 'react';

const PizzaCard = ({ 
  image = "/api/placeholder/300/300",
  title = "HOUSE PIE",
  ingredients = "Tomato, mozzarella, basil, parmesan.",
  smallPrice = 5,
  largePrice = 37,
  variant = "left" // "default" ou "highlighted"
}) => {
  
  return (  
    <div className={`flex gap-4 items-center`}>
        <div className={`w-1/2 ${variant === "left" ? "order-1" : "order-2"}`}>
            <img 
            src={image}
            alt={title}
            className="w-full object-cover"
            />
        </div>
        <div className={`flex flex-col w-1/2 gap-4 ${variant === "left" ? "order-2" : "order-1"}`}>
            <h3 className="font-secondary font-medium text-2xl tracking-[-0.03em] uppercase">
                {title}
            </h3>
            <p className="text-black text-xs tracking-[-0.03em] font-medium font-primaryleading-5">
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
    </div>
  );
};

export default PizzaCard;