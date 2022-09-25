/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html" /* ... */],
  theme: {
    extend: {
      colors: {
        "pc-1": "hsl(1, 90%, 64%)",
        "pc-2": "hsl(219, 85%, 26%)",
        "nc-1": "hsl(0, 0%, 100%)",
        "nc-2": "hsl(210, 60%, 98%)",
        "nc-3": "hsl(211, 68%, 94%)",
        "nc-4": "hsl(205, 33%, 90%)",
        "nc-5": "hsl(219, 14%, 63%)",
        "nc-6": "hsl(219, 12%, 42%)",
        "nc-7": "hsl(224, 21%, 14%)",
      },

      padding: {
        "6x": "0.375rem",
        "10x": "0.625rem",
      },

      maxWidth: {
        sm: "23em",
        md: "42em",
        img: "2.5rem",
        img2: "3rem",
      },

      minWidth: {
        sm: "23em",
        md: "42em",
      },
    },
  },
  plugins: [],
};
