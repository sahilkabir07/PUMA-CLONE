import React, { useState } from "react";
import { motion } from "framer-motion";

const images = [
    "https://about.puma.com/sites/default/files/styles/dd_portrait_slider/public/media/portrait-slider/yaroslava-mahuchikh.png?itok=CuUgmX8T",
    "https://about.puma.com/sites/default/files/styles/dd_portrait_slider/public/media/portrait-slider/karsten-warholm.png?itok=bpC5rn0U",
    "https://about.puma.com/sites/default/files/styles/dd_portrait_slider/public/media/portrait-slider/24ss-br-yos-duplantis-cropped.jpg?itok=HGG1GVLo",
    "https://about.puma.com/sites/default/files/styles/dd_portrait_slider/public/media/portrait-slider/usain-bolt.png?itok=fgfgtkhq"
];
const imgInfo = [
    "i sometimes imagine that i am a bird.",
    "whatever i do , i do it with passion",
    "i believed , i just had to wake everybody else up",
    "my single goal is to become the greatest . if i get to be a legend, i've achieved my goal."
];
const headInfo = ["yaroslava mahuchikh", "karsten warholm", "armand mondo duplantis", "usain bolt"];

const AboutUsCarousel = () => {

    const [current, setCurrent] = useState(0);

    const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    return (
        <div className="relative w-full max-w-4xl mx-auto mt-10 flex gap-8">
            <motion.img
                src={images[current]}
                alt="Carousel Slide"
                className="w-[60%] h-[500px] object-cover rounded-lg shadow-lg"
                key={current}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            />
            <div className="flex flex-col justify-center w-[40%]">

                <motion.p
                    className="uppercase font-bold text-4xl text-gray-700 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                >
                    {headInfo[current]}
                </motion.p>


                <motion.p
                    className="mt-4 text-5xl uppercase  text-gray-800"
                    key={current}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                >
                    {imgInfo[current]}
                </motion.p>
            </div>
            <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
                onClick={prevSlide}
            >
                ❮
            </button>


            <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
                onClick={nextSlide}
            >
                ❯
            </button>
        </div>
    );
};

export default AboutUsCarousel;
