/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    keyframes: {
      colorChange: {
        "0%": { color: "#ff0000" }, // Red
        "50%": { color: "#00ff00" }, // Green
        "100%": { color: "#0000ff" }, // Blue
      },
    },
    animation: {
      colorChange: "colorChange 2s infinite", // Apply the keyframe to an animation
    },
  },
};
export const plugins = [];
