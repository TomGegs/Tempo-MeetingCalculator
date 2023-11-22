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
            },
            animation: {
                'accordion-down': 'accordion-down 0.4s ease-in-out',
                'accordion-up': 'accordion-up 0.4s ease-in-out',
                flip: 'flip 2s linear infinite',
            },
            animationDelay: {
                '2s': '2s',
                '1.5s': '1500ms',
            },
        },
    },
    // eslint-disable-next-line no-undef
    plugins: [require('tailwindcss-animate'), 'prettier-plugin-tailwindcss'],
};
