import { useState, useEffect } from "react";

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    const updateLocalStorage = (updatedCart) => {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const addToCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);
        let updatedCart;
        if (existingItem) {
            updatedCart = cart.map((cartItem) =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
        } else {
            updatedCart = [...cart, { ...item, quantity: 1 }];
        }

        setCart(updatedCart);
        updateLocalStorage(updatedCart);
    };

    return { cart, addToCart };
};

export default useCart;
