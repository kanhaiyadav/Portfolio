/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'min-880px': '880px',
            },
            keyframes: {
                'typewriter': {
                    '0%': { width: '0' },
                    '100%': { width: '100%' }
                },
                bounce: {
                    '0%': {
                        transform: 'scale(1.5)',
                        visibility: 'hidden'
                    },
                    '100%': {
                        transform: 'scale(1)',
                        opacity: 'visible'
                    }
                },
                imgBounce: {
                    '0%': {
                        transform: 'scale(1.25)',
                    },
                    '100%': {
                        transform: 'scale(1)',
                    },
                },
                fade: {
                    '0%': {
                        opacity: '0',
                    },
                    '100%': {
                        opacity: '1',
                    },
                }

            },
            animation: {
                'imgBounce': 'imgBounce 1.6s ease-in-out 1, fade 0.8s ease-in-out 1',
                'bounce': 'bounce 0.5s ease-in-out 1',
                'typewriter1': 'typewriter 0.8s steps(23) 1',
                'typewriter2': 'typewriter 0.7s steps(19) 0.45s 1 forwards',
                'typewriter3': 'typewriter 0.6s steps(13) 0.45s 1 forwards',
                'typewriter4': 'typewriter 0.8s steps(23) 1',
                'typewriter5': 'typewriter 1s steps(176) 1 forwards',
            },
            fontFamily: {
                'sans': ['Poppins', 'sans-serif'],
                'serif': ['Merriweather', 'serif'],
                'Open-sans': ['Open Sans', 'sans-serif'],
                'Poppins': ['Poppins', 'sans-serif'],
                'Rowdies': ['Rowdies', 'cursive'],
                'Playwrite1': ['Playwrite PE', 'cursive'],
                'Karsten': ['Karsten ExtraBold Alt', 'cursive'],
                'Abril-Fatface': ['Abril Fatface', 'cursive'],
                'Great-Vibes': ['Great Vibes', 'cursive'],
            },
        },
        plugins: [],
    }
}

