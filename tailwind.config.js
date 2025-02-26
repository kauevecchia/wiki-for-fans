/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
                baskerville: ['Libre Baskerville', 'serif'],
            },
            boxShadow: {
                'darkish-red': '6px 6px 10px rgba(239, 68, 68, 0.25)',
            }
        },
    },
    plugins: [],
}

