import React, { useState } from "react";
import womenData from "../../constants/WomenCardsData.json";
import { FaCartPlus, FaRegHeart, FaHeart, FaThumbsUp } from "react-icons/fa";
import useCart from "../../AddToCart";
import useLikes from "../Liked/Liked";

const WomenCards = () => {
    const { addToCart } = useCart();
    const { likedItems, toggleLike } = useLikes();

    const [addedToCart, setAddedToCart] = useState({});

    const handleAddToCart = (item) => {
        addToCart(item);
        setAddedToCart((prev) => ({ ...prev, [item.id]: true }));

        setTimeout(() => {
            setAddedToCart((prev) => ({ ...prev, [item.id]: false }));
        }, 3000);
    };

    return (
        <div>
            <div className="ml-12 h-40 flex-col flex justify-center">
                <p className="mt-10 text-4xl font-bold hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-800 hover:text-transparent hover:bg-clip-text">
                    FOR WOMEN
                </p>
                <p className="font-bold text-xl mt-10 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text">
                    2600 Products
                </p>
            </div>
            <div className="flex">
                <div className="flex flex-wrap gap-4 p-4 items-center justify-center">
                    {womenData.map((item) => (
                        <div
                            className="w-[250px] bg-white shadow-md rounded-lg p-4 flex flex-col transform transition-transform duration-300 hover:scale-110"
                            key={item.id}
                        >
                            <div className="text-center">
                                <img
                                    src={item.img}
                                    className="w-full h-48 object-cover rounded-md mt-2"
                                    alt={item.name}
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-gray-800 font-semibold">{item.price}</p>
                                    <div className="flex gap-3 items-center">
                                        <button
                                            className={`p-2 rounded-md flex items-center justify-center transition-all ${addedToCart[item.id]
                                                ? "bg-green-500 text-white"
                                                : "hover:text-red-500"
                                                }`}
                                            onClick={() => handleAddToCart(item)}
                                        >
                                            {addedToCart[item.id] ? <FaThumbsUp /> : <FaCartPlus />}
                                        </button>
                                        <button
                                            className="p-2 rounded-md flex items-center justify-center"
                                            onClick={() => toggleLike(item)}
                                        >
                                            {likedItems[item.id] ? (
                                                <FaHeart className="text-red-500" />
                                            ) : (
                                                <FaRegHeart className="text-gray-500" />
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WomenCards;
