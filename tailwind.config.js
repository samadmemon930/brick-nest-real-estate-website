/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                // agar root me index.html hai
    "./src/**/*.{js,ts,jsx,tsx}"  // src ke andar sab files scan hongi
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
