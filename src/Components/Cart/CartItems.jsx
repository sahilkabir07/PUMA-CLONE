import React, { useState, useEffect } from "react";

const CartItems = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(savedCart);
    }, []);

    return (
        <div className="min-h-screen pt-24 pb-24 bg-gray-100">
            <div className="max-w-screen-lg mx-auto">
                <h1 className="text-3xl font-semibold text-center mb-6 mt-10 ">Your Cart </h1>
                {cartItems.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col transform transition duration-300 hover:scale-105">
                                <img src={item.img} alt={item.name} className="h-32 w-full object-cover rounded-md" />
                                <h3 className="text-lg font-medium mt-2">{item.name}</h3>
                                <p className="text-gray-600">Price: {item.price}</p>
                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 text-center">Your cart is empty</p>
                )}
            </div>
        </div>
    );
};

export default CartItems;
