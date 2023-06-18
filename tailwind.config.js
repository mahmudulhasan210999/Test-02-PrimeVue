module.exports = {
    mode: 'jit',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors:{
            'primary': '#494B50',
            'secondary': '#BBBBBB',

            'white':'#ffffff',

            'gray-200':'#e5e7eb',
            'gray-300':'#d1d5db',
            'gray-400':'#9ca3af',
            'gray-500': '#6b7280',
            'gray-600': '#4b5563',
            'gray-700':'#374151',
        }
    },
    plugins: [],
}
