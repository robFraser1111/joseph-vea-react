const tailwindcss = require('tailwindcss');

module.exports = {
    theme: {
        fontFamily: {
            'nav': ['"Amatic SC"', 'handwriting'],
            'body': ['Arial', 'Helvetica', 'Arial', 'Lucida', 'sans-serif'],
        }
    },
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
    ],
};
