const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

//
// Data Display Components
//

function headingComponents({ addComponents, theme }) {
  const heading = [
    {
      '.heading-xs': {
        fontSize: theme('fontSize.sm'), // 14px
        lineHeight: '1.2em',
        fontWeight: '600',
        wordSpacing: '0.05em',
      },
    },
    {
      '.heading-sm': {
        fontSize: theme('fontSize.md'), // 16px
        lineHeight: '1.2em',
        fontWeight: '600',
        wordSpacing: '0.05em',
      },
    },
    {
      '.heading-md': {
        fontSize: theme('fontSize.xl'), // 20px
        lineHeight: '1.2em',
        fontWeight: '600',
        wordSpacing: '0.05em',
      },
    },
    {
      '.heading-lg': {
        fontSize: theme('fontSize.2xl'), // 24px
        lineHeight: '1.33em',
        fontWeight: '600',
        wordSpacing: '0.05em',
      },
    },
    {
      '.heading-xl': {
        fontSize: theme('fontSize.3xl'), // 30px
        lineHeight: '1.33em',
        fontWeight: '600',
        wordSpacing: '0.05em',
      },
    },
    {
      '.heading-2xl': {
        fontSize: theme('fontSize.4xl'), // 36px
        lineHeight: '1.2em',
        fontWeight: '600',
        wordSpacing: '0.05em',
      },
    },
    {
      '.heading-3xl': {
        fontSize: theme('fontSize.5xl'), // 48px
        lineHeight: '1em',
        fontWeight: '600',
        wordSpacing: '0.05em',
      },
    },
    {
      '.heading-4xl': {
        fontSize: theme('fontSize.6xl'), // 60px
        lineHeight: '1em',
        fontWeight: '600',
        wordSpacing: '0.05em',
      },
    },
    {
      '@media (min-width: 62rem)': {
        '.heading-xs': {
          fontWeight: '700',
        },
        '.heading-sm': {
          fontWeight: '700',
        },
        '.heading-md': {
          fontWeight: '700',
        },
        '.heading-lg': {
          fontWeight: '700',
          fontSize: theme('fontSize.3xl'), // 30px
          lineHeight: '120%',
        },
        '.heading-xl': {
          fontWeight: '700',
          fontSize: theme('fontSize.4xl'), // 36px
          lineHeight: '120%',
        },
        '.heading-2xl': {
          fontWeight: '700',
          fontSize: theme('fontSize.5xl'), // 48px
          lineHeight: '100%',
        },
        '.heading-3xl': {
          fontWeight: '700',
          fontSize: theme('fontSize.6xl'), // 60px
        },
        '.heading-4xl': {
          fontWeight: '700',
          fontSize: theme('fontSize.7xl'), // 72px
        },
      },
    },
  ]
  addComponents(heading)
}

function cardComponents({ addComponents, theme }) {
  const cards = [
    {
      '.card-elevated': {
        background: '#fff',
        borderRadius: theme('borderRadius.lg'),
        boxShadow: theme('boxShadow.DEFAULT'),
      },
      '.card-filled': {
        background: '#edf2f7',
        border: '1px solid #edf2f7',
        borderRadius: theme('borderRadius.lg'),
        boxShadow: theme('boxShadow.DEFAULT'),
      },
      '.card-outline': {
        border: '1px solid #E2E8F0',
        borderRadius: theme('borderRadius.lg'),
      }
    }
  ]
  const colors = theme('colors', {})
  for (let color in colors) {
    cards.push({
      [`.card-${color}`]: {
        borderColor: colors[color]['100'],
      }
    })
  }
  addComponents(cards)
}

function tagComponents({ addComponents, theme }) {
  const colors = theme('colors', {})
  let tags = [
    {
      '.tag': {
        fontSize: theme('fontSize.sm'), // 14px
        fontWeight: '500',
        lineHeight: '1.25rem',
        padding: '0.125rem 0.5rem',
        borderRadius: theme('borderRadius.md'),
        margin: '0.25rem',
      },
      '.tag-sm': {
        fontSize: theme('fontSize.xs'), // 12px
        fontWeight: '500',
        lineHeight: '1rem',
        padding: '0.125rem 0.5rem',
        borderRadius: theme('borderRadius.md'),
        margin: '0.25rem',
      },
      '.tag-lg': {
        fontSize: theme('fontSize.md'), // 16px
        fontWeight: '500',
        lineHeight: '2rem',
        padding: '0.25rem 0.75rem',
        borderRadius: theme('borderRadius.md'),
        margin: '0.25rem',
      }
    },
  ]
  for (let color in colors) {
    tags.push({
      [`.tag-${color}`]: {
        border: `1px solid ${colors[color]['100']}`,
        backgroundColor: colors[color]['100'],
        color: colors[color]['800'],
      },
      [`.tag-subtle.tag-${color}`]: {
        border: `1px solid ${colors[color]['100']}`,
        backgroundColor: colors[color]['100'],
        color: colors[color]['800'],
      },
      [`.tag-solid.tag-${color}`]: {
        border: `1px solid ${colors[color]['500']}`,
        backgroundColor: colors[color]['500'],
        color: '#fff',
      },
      [`.tag-outline.tag-${color}`]: {
        border: `1px solid ${colors[color]['500']}`,
        color: colors[color]['600'],
      }
    })
  }
  addComponents(tags)
}

//
// Form Components
//

function buttonComponents({ addComponents, theme }) {
  const colors = theme('colors', {})
  let buttons = [
    {
      '.btn': {
        borderRadius: theme('borderRadius.md'),
        // fontWeight: '600',
        fontSize: theme('fontSize.md'), // 16px
        lineHeight: '1.5rem',
        padding: '0.5rem 1rem',
        'transitionProperty': 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
        'willChange': 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
        'transitionTimingFunction': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'transitionDuration': '150ms',
        display: 'inline-flex',
        flexDirection: 'row',
        rowGap: '0.25rem',
        textRendering: 'optimizelegibility',
      },
    },
    {
      '.btn-sm': {
        fontSize: theme('fontSize.sm'), // 14px
        lineHeight: '1.25rem',
        padding: '0.375rem 0.75rem',
      },
    },
    {
      '.btn-xs': {
        fontSize: theme('fontSize.xs'), // 12px
        lineHeight: '1rem',
        padding: '0.25rem 0.5rem',
      },
    },
    {
      '.btn-lg': {
        fontSize: theme('fontSize.lg'), // 18px
        lineHeight: '1.75rem',
        padding: '0.625rem 1.5rem',
      },
    },
    {
      '.btn-xl': {
        fontSize: theme('fontSize.lg'),
        lineHeight: '1.75rem',
        padding: '1rem 3.875rem',
      },
    },
    {
      [`.btn-white.btn-outline`]: {
        backgroundColor: 'transparent',
        border: `1px solid #fff`,
        color: '#fff',
        '&:hover': {
          backgroundColor: '#fff',
          color: colors['brand']['400'],
        },
        '&[disabled], &[disabled]:hover': {
          background: 'transparent',
          border: `1px solid ${colors['gray']['300']}`,
          color: colors['whiteAlpha']['500'],
          cursor: 'not-allowed',
        },
      },
    },
    {
      ['.btn-animated']: {
        transitionProperty: 'background-color,color,transform',
        transitionTimingFunction: 'linear',
        transitionDuration: '0.25s',
        willChange: 'background-color,color,transform',
        '&:hover': {
          transform: 'scale(0.95)',
          transitionDuration: '0.25s',
          transitionTimingFunction: 'ease-in-out',
        },
      },
      [`.btn-primary`]: {
        borderRadius: theme('borderRadius.xl'),
        backgroundColor: '#CDFA50',
        color: '#000',
        transitionProperty: 'background-color,transform',
        transitionTimingFunction: 'linear',
        transitionDuration: '0.3s',
        willChange: 'background-color,transform',
        '&:hover': {
          backgroundColor: '#E0FF8A',
          transform: 'scale(0.95)',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in-out',
        },
        '&:active': {
          backgroundColor: '#9ECB22',
        },
      },

      [`.btn-secondary`]: {
        borderRadius: theme('borderRadius.xl'),
        backgroundColor: '#fff',
        color: '#000',
        transitionProperty: 'background-color,transform,color',
        transitionTimingFunction: 'linear',
        transitionDuration: '0.3s',
        willChange: 'background-color,transform',
        '&:hover': {
          backgroundColor: '#DFDFDF',
          transform: 'scale(0.95)',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in-out',
        },
        '&:active': {
          backgroundColor: '#4B4B4B',
          color: '#fff',
        },
      },

      [`.btn-third`]: {
        borderRadius: theme('borderRadius.xl'),
        backgroundColor: '#8544F6',
        color: '#fff',
        transitionProperty: 'background-color,transform,color',
        transitionTimingFunction: 'linear',
        transitionDuration: '0.3s',
        willChange: 'background-color,transform',
        '&:hover': {
          backgroundColor: '#A774FF',
          transform: 'scale(0.95)',
          transitionDuration: '0.3s',
          transitionTimingFunction: 'ease-in-out',
        },
        '&:active': {
          backgroundColor: '#5E34A8',
          color: '#fff',
        },
      },

      [`.btn-primary.btn-reverse`]: {
        borderRadius: theme('borderRadius.md'),
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#CDFA50',
      },

      [`.btn-aside-icon`]: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& .icon': {
          'transitionProperty': 'transform',
          'transitionTimingFunction': 'cubic-bezier(.52,.47,.92,.25)',
          'transitionDuration': '250ms',
          'willChange': 'transform',
          transform: 'scale(1)',
        },
        '&:hover .icon': {
          transform: 'scale(1.20)',
        },
      },

      [`.btn-center-icon`]: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        '& .icon': {
          marginLeft: '1.25rem',
        },
      },
    },
  ]
  for (let color in colors) {
    if (color === 'primary' || color === 'secondary') {
      continue
    }
    buttons.push({
      [`.btn-${color}`]: {
        backgroundColor: colors[color]['400'],
        border: `1px solid ${colors[color]['400']}`,
        color: '#fff',
        '&:hover': {
          backgroundColor: colors[color]['200'],
          border: `1px solid ${colors[color]['200']}`,
        },
        '&[disabled], &[disabled]:hover': {
          backgroundColor: colors['gray']['400'],
          border: `1px solid ${colors['gray']['400']}`,
          color: colors['whiteAlpha']['500'],
          cursor: 'not-allowed',
        },
        '&:focus-visible': {
          outline: `2px solid ${colors[color]['400']}`,
        }
      },
      [`.btn-${color}.btn-solid`]: {
        backgroundColor: colors[color]['400'],
        border: `1px solid ${colors[color]['400']}`,
        color: '#fff',
        '&:hover': {
          backgroundColor: colors[color]['200'],
          border: `1px solid ${colors[color]['200']}`,
        },
        '&[disabled], &[disabled]:hover': {
          backgroundColor: colors['gray']['400'],
          border: `1px solid ${colors['gray']['400']}`,
          color: colors['whiteAlpha']['500'],
          cursor: 'not-allowed',
        },
      },
      [`.btn-${color}.btn-outline`]: {
        backgroundColor: 'transparent',
        border: `1px solid ${colors[color]['400']}`,
        color: colors[color]['400'],
        '&:hover': {
          backgroundColor: colors[color]['100'],
        },
        '&[disabled], &[disabled]:hover': {
          background: 'transparent',
          border: `1px solid ${colors['gray']['300']}`,
          color: colors['whiteAlpha']['500'],
          cursor: 'not-allowed',
        },
      },
    })
  }
  addComponents(buttons)
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  variants: {
    transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
  },
  theme: {
    screens: {
      sm: '30rem',      // 30rem = 480px
      md: '48rem',      // 48rem = 768px
      lg: '62rem',      // 62rem = 992px
      xl: '80rem',      // 80rem = 1280px
      '2xl': '96rem',   // 96rem = 1536px
      '3xl': '120rem',  // 120em = 1920px
      '4xl': '160rem',  // 160em = 2560px
    }, // END: screens

    spacing: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',  // 0.125rem = 2px
      1: '0.25rem',     // 0.25rem = 4px
      1.5: '0.375rem',  // 0.375rem = 6px
      2: '0.5rem',      // 0.5rem = 8px
      2.5: '0.625rem',  // 0.625rem = 10px
      3: '0.75rem',     // 0.75rem = 12px
      3.5: '0.875rem',  // 0.875rem = 14px
      4: '1rem',        // 1rem = 16px
      5: '1.25rem',     // 1.25rem = 20px
      6: '1.5rem',      // 1.5rem = 24px
      7: '1.75rem',     // 1.75rem = 28px
      8: '2rem',        // 2rem = 32px
      9: '2.25rem',     // 2.25rem = 36px
      10: '2.5rem',     // 2.5rem = 40px
      12: '3rem',       // 3rem = 48px
      14: '3.5rem',     // 3.5rem = 56px
      16: '4rem',       // 4rem = 64px
      20: '5rem',       // 5rem = 80px
      24: '6rem',       // 6rem = 96px
      28: '7rem',       // 7rem = 112px
      32: '8rem',       // 8rem = 128px
      36: '9rem',       // 9rem = 144px
      40: '10rem',      // 10rem = 160px
      44: '11rem',      // 11rem = 176px
      48: '12rem',      // 12rem = 192px
      52: '13rem',      // 13rem = 208px
      56: '14rem',      // 14rem = 224px
      60: '15rem',      // 15rem = 240px
      64: '16rem',      // 16rem = 256px
      72: '18rem',      // 18rem = 288px
      80: '20rem',      // 20rem = 320px
      96: '24rem',      // 24rem = 384px
    }, // END: spacing

    borderRadius: {
      none: '0',
      sm: '0.125rem',   // 0.125rem = 2px
      DEFAULT: '0.25rem', // 0.25rem = 4px
      md: '0.375rem',   // 0.375rem = 6px
      lg: '0.5rem',     // 0.5rem = 8px
      xl: '0.75rem',    // 0.75rem = 12px
      '2xl': '1rem',    // 1rem = 16px
      '3xl': '1.5rem',  // 1.5rem = 24px
      '4xl': '2rem',    // 2rem = 32px
      '5xl': '2.25rem',    // 2rem = 32px
      'full': '9999px',
    }, // END: borderRadius

    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      outline: '0 0 0 3px rgba(63, 153, 225, 0.6)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      'dark-lg': '0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4)',
      none: 'none',
    }, // END: boxShadow

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //
    // Extending
    //
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    extend: {
      colors: {
        phat: {
          DEFAULT: '#59A138',
          50: '#F5FFF0',
          100: '#D5F6C6',
          200: '#B2E69A',
          300: '#8AD368',
          400: '#6FB74E',
          500: '#59A138',
          600: '#438525',
          700: '#3B6727',
          800: '#325422',
          900: '#29451C',
        },
        // alias to phat
        brand: {
          DEFAULT: '#59A138',
          50: '#F5FFF0',
          100: '#D5F6C6',
          200: '#B2E69A',
          300: '#8AD368',
          400: '#6FB74E',
          500: '#59A138',
          600: '#438525',
          700: '#3B6727',
          800: '#325422',
          900: '#29451C',
        },
        // website specified colors
        primary: {
          DEFAULT: '#CDFA50',
        },
        secondary: {
          DEFAULT: '#8544F6',
        },
        // general
        gray: {
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
        whiteAlpha: {
          50: 'rgba(255, 255, 255, 0.04)',
          100: 'rgba(255, 255, 255, 0.06)',
          200: 'rgba(255, 255, 255, 0.08)',
          300: 'rgba(255, 255, 255, 0.16)',
          400: 'rgba(255, 255, 255, 0.24)',
          500: 'rgba(255, 255, 255, 0.36)',
          600: 'rgba(255, 255, 255, 0.48)',
          700: 'rgba(255, 255, 255, 0.64)',
          800: 'rgba(255, 255, 255, 0.80)',
          900: 'rgba(255, 255, 255, 0.92)',
        },
        blackAlpha: {
          50: 'rgba(0, 0, 0, 0.04)',
          100: 'rgba(0, 0, 0, 0.06)',
          200: 'rgba(0, 0, 0, 0.08)',
          300: 'rgba(0, 0, 0, 0.16)',
          400: 'rgba(0, 0, 0, 0.24)',
          500: 'rgba(0, 0, 0, 0.36)',
          600: 'rgba(0, 0, 0, 0.48)',
          700: 'rgba(0, 0, 0, 0.64)',
          800: 'rgba(0, 0, 0, 0.80)',
          900: 'rgba(0, 0, 0, 0.92)',
        },
        red: {
          50: '#fff5f5',
          100: '#fed7d7',
          200: '#feb2b2',
          300: '#fc8181',
          400: '#f56565',
          500: '#e53e3e',
          600: '#c53030',
          700: '#9b2c2c',
          800: '#822727',
          900: '#63171b',
        },
        orange: {
          50: '#fffaf0',
          100: '#feebcb',
          200: '#fbd38d',
          300: '#f6ad55',
          400: '#ed8936',
          500: '#dd6b20',
          600: '#c05621',
          700: '#9c4221',
          800: '#7b341e',
          900: '#652b19',
        },
        yellow: {
          50: '#fffff0',
          100: '#fefcbf',
          200: '#faf089',
          300: '#f6e05e',
          400: '#ecc94b',
          500: '#d69e2e',
          600: '#b7791f',
          700: '#975a16',
          800: '#744210',
          900: '#5f370e',
        },
        green: {
          50: '#f0fff4',
          100: '#c6f6d5',
          200: '#9ae6b4',
          300: '#68d391',
          400: '#48bb78',
          500: '#38a169',
          600: '#2f855a',
          700: '#276749',
          800: '#22543d',
          900: '#1c4532',
        },
        teal: {
          50: '#e6fffa',
          100: '#b2f5ea',
          200: '#81e6d9',
          300: '#4fd1c5',
          400: '#38b2ac',
          500: '#319795',
          600: '#2c7a7b',
          700: '#285e61',
          800: '#234e52',
          900: '#1d4044',
        },
        blue: {
          50: '#ebf8ff',
          100: '#bee3f8',
          200: '#90cdf4',
          300: '#63b3ed',
          400: '#4299e1',
          500: '#3182ce',
          600: '#2b6cb0',
          700: '#2c5282',
          800: '#2a4365',
          900: '#1a365d',
        },
        cyan: {
          50: '#edfdfd',
          100: '#c4f1f9',
          200: '#9decf9',
          300: '#76e4f7',
          400: '#0bc5ea',
          500: '#00b5d8',
          600: '#00a3c4',
          700: '#0987a0',
          800: '#086f83',
          900: '#065666',
        },
        purple: {
          50: '#faf5ff',
          100: '#e9d8fd',
          200: '#d6bcfa',
          300: '#b794f4',
          400: '#9f7aea',
          500: '#805ad5',
          600: '#6b46c1',
          700: '#553c9a',
          800: '#44337a',
          900: '#322659',
        },
        pink: {
          50: '#fff5f7',
          100: '#fed7e2',
          200: '#fbb6ce',
          300: '#f687b3',
          400: '#ed64a6',
          500: '#d53f8c',
          600: '#b83280',
          700: '#97266d',
          800: '#702459',
          900: '#521b41',
        },
      }, // END: colors

      fontFamily: {
        sans: ['Montserrat', ...fontFamily.sans],
        // primary: 'var(--font-montserrat)',
        // heading: 'Montserrat',
        //
        // We don't override the default font stack here, because we want keep compatbile with legacy code.
        //
      }, // END: fontFamily

      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5rem' }], // 0.75rem = 12px
        sm: ['0.875rem', { lineHeight: '1.5rem' }], // 0.875rem = 14px
        md: ['1rem', { lineHeight: '1.5rem' }], // 1rem = 16px
        lg: ['1.125rem', { lineHeight: '1.5rem' }], // 1.125rem = 18px
        xl: ['1.25rem', { lineHeight: '1.5rem' }], // 1.25rem = 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }], // 1.5rem = 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 1.875rem = 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 2.25rem = 36px
        '5xl': ['3rem', { lineHeight: '1' }], // 3rem = 48px
        '6xl': ['3.75rem', { lineHeight: '1' }], // 3.75rem = 60px
        '7xl': ['4.5rem', { lineHeight: '1' }], // 4.5rem = 72px
      }, // END: fontSize

      //
      // @TODO: container
      //
        
      gridTemplateColumns: {
        '20': 'repeat(20, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
      },

      gridTemplateRows: {
        '20': 'repeat(20, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
      },

      gridRow: {
        'span-1': 'span 1 / span 1',
        'span-2': 'span 2 / span 2',
        'span-3': 'span 3 / span 3',
        'span-4': 'span 4 / span 4',
        'span-5': 'span 5 / span 5',
        'span-6': 'span 6 / span 6',
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
        'span-25': 'span 25 / span 25',
      },

      gridColumn: {
        'span-1': 'span 1 / span 1',
        'span-2': 'span 2 / span 2',
        'span-3': 'span 3 / span 3',
        'span-4': 'span 4 / span 4',
        'span-5': 'span 5 / span 5',
        'span-6': 'span 6 / span 6',
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
        'span-17': 'span 17 / span 17',
        'span-18': 'span 18 / span 18',
        'span-19': 'span 19 / span 19',
        'span-20': 'span 20 / span 20',
        'span-21': 'span 21 / span 21',
        'span-22': 'span 22 / span 22',
        'span-23': 'span 23 / span 23',
        'span-24': 'span 24 / span 24',
        'span-25': 'span 25 / span 25',
      },

      gridColumnStart: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        '25': '25',
      },

      gridColumnEnd: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        '25': '25',
      },

    }, // END: extend
  },
  plugins: [
    // require(),
    require('@tailwindcss/typography'),
    plugin(headingComponents),
    plugin(cardComponents),
    plugin(tagComponents),
    plugin(buttonComponents),
  ]
}
