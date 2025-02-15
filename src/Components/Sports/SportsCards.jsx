import React, { useState } from 'react';
import SportsData from "../../constants/SportsData.json";
import { FaCartPlus, FaRegHeart, FaHeart } from 'react-icons/fa';
import useCart from '../../AddToCart';
import useLikes from '../Liked/Liked';

const SportsCards = () => {
    const { addToCart } = useCart();
    const { likedItems, toggleLike } = useLikes();
    const [addedItems, setAddedItems] = useState([]);
    const [showThumbsUp, setShowThumbsUp] = useState([]);

    const handleAddToCart = (item) => {
        if (addedItems[item.id]) {
            setAddedItems((prevState) => ({
                ...prevState,
                [item.id]: false,
            }));
            setShowThumbsUp((prevState) => ({
                ...prevState,
                [item.id]: false,
            }));
        } else {
            addToCart(item);
            setAddedItems((prevState) => ({
                ...prevState,
                [item.id]: true,
            }));

            setShowThumbsUp((prevState) => ({
                ...prevState,
                [item.id]: true,
            }));

            setTimeout(() => {
                setShowThumbsUp((prevState) => ({
                    ...prevState,
                    [item.id]: false,
                }));
                setAddedItems((prevState) => ({
                    ...prevState,
                    [item.id]: false,
                }));
            }, 3000);
        }
    };

    return (
        <div>
            <div className='ml-12 h-40 flex-col flex justify-center'>
                <p className='mt-10 text-4xl font-bold hover:bg-gradient-to-r hover:from-green-500 hover:to-pink-800 hover:text-transparent hover:bg-clip-text'>
                    SPORTS
                </p>
                <p className='font-bold text-xl mt-10 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-blue-500 hover:text-transparent hover:bg-clip-text'>
                    1259 Products
                </p>
            </div>
            <div className='flex'>
                <div className="flex-wrap gap-4 p-4 flex items-center justify-center">
                    {SportsData.map((item) => (
                        <div
                            className="w-[250px] bg-white shadow-md rounded-lg p-4 flex flex-col transform transition-transform duration-300 hover:scale-110"
                            key={item.id}
                        >
                            <div className="text-center">
                                <img
                                    src={item.img}
                                    className="w-full h-48 object-cover rounded-md mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-gray-800 font-semibold">{item.price}</p>
                                    <div className="flex gap-3">
                                        <FaCartPlus
                                            className='hover:text-red-500 cursor-pointer'
                                            onClick={() => handleAddToCart(item)}
                                        />
                                        {likedItems[item.id] ? (
                                            <FaHeart
                                                className="text-red-500 cursor-pointer"
                                                onClick={() => toggleLike(item)}
                                            />
                                        ) : (
                                            <FaRegHeart
                                                className="text-gray-500 cursor-pointer"
                                                onClick={() => toggleLike(item)}
                                            />
                                        )}
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

export default SportsCards;
