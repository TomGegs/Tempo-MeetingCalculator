/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'var(--border)',
                input: 'var(--input)',
                ring: 'var(--ring)',
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--secondary-foreground)',
                },
                destructive: {
                    DEFAULT: 'var(--destructive)',
                    foreground: 'var(--destructive-foreground)',
                },
                muted: {
                    DEFAULT: 'var(--muted)',
                    foreground: 'var(--muted-foreground)',
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    foreground: 'var(--accent-foreground)',
                },
                popover: {
                    DEFAULT: 'var(--popover)',
                    foreground: 'var(--popover-foreground)',
                },
                card: {
                    DEFAULT: 'var(--card)',
                    foreground: 'var(--card-foreground)',
                },
            },
            screens: {
                tall: {
                    raw: `only screen and (max-height: 960px) and (max-width: 480px)`,
                },
                wide: {
                    raw: `only screen and (max-height: 480px) and (max-width: 960px)`,
                },
                portrait: {
                    raw: '(orientation: portrait)',
                },
                landscape: {
                    raw: '(orientation: landscape)',
                },
            },
            width: ['peer-checked'],
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0, opacity: 0 },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                        opacity: 1,
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                        opacity: 1,
                    },
                    to: { height: 0, opacity: 0 },
                },
                gradient: {
                    '0%, 25%': { backgroundPosition: '-10% 50%' },
                    '60%': { backgroundPosition: '115% 50%' },
                    '60.1%, 100%': { backgroundPosition: '115% 50%' },
                },
                'scroll-left': {
                    '0%': { transform: 'translateX(0%)' },
                    '50%': { transform: 'translateX(-5%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                'scroll-right': {
                    '0%': { transform: 'translateX(0%)' },
                    '50%': { transform: 'translateX(5%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                'line-to-box': {
                    '0%': {
                        height: '1px',
                        width: '100%',
                        backgroundColor: 'black',
                    },
                    '50%': {
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'black',
                    },
                    '100%': {
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'transparent',
                    },
                },
                'fade-in': {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                'fill-estimation-box': {
                    '0%': {
                        height: '0%',
                        border: 'none',
                        backgroundColor: '#5d9ada',
                    },
                    '100%': {
                        height: '100%',
                        border: 'white 1px solid',
                        backgroundColor: '#5d9ada',
                    },
                },
                'text-estimation-box': {
                    '0%, 75%': {
                        color: 'white',
                    },
                    '98%': { color: '#191919' },
                    '100%': { color: '#191919' },
                },
            },
            animation: {
                'scroll-left': 'scroll-left 50s ease-in-out infinite',
                'scroll-right': 'scroll-right 50s ease-in-out infinite',
                'accordion-down': 'accordion-down 0.4s ease-in-out',
                'accordion-up': 'accordion-up 0.4s ease-in-out',
                flip: 'flip 2s linear infinite',
                gradient: 'gradient 2s ease-in-out infinite',
                'line-to-box': 'line-to-box 2s linear forwards',
                'fade-in': 'fade-in 2s linear 2s forwards',
                'fill-estimation-box': 'fill-estimation-box 1s linear',
                'text-estimation-box': 'text-estimation-box 1s linear',
            },
            animationDelay: {
                '4s': '4000ms',
                '2s': '2s',
                '1.5s': '1500ms',
            },
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [require('tailwindcss-animate'), 'prettier-plugin-tailwindcss'],
};
