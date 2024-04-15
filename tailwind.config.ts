const { fontFamily } = require('tailwindcss/defaultTheme')
import { PluginAPI } from 'tailwindcss/types/config'
import plugin from 'tailwindcss/plugin'

//
// Data Display Components
//

function headingComponents({ addComponents, theme }: PluginAPI) {
  const heading: Record<string, any>[] = [
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

function cardComponents({ addComponents, theme }: PluginAPI) {
  const cards: Record<string, any>[] = [
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
  const colors = theme('colors', {}) as Record<string, any>
  for (let color in colors) {
    cards.push({
      [`.card-${color}`]: {
        borderColor: colors[color]['100'],
      }
    })
  }
  addComponents(cards)
}

function tagComponents({ addComponents, theme }: PluginAPI) {
  const colors = theme('colors', {}) as Record<string, any>
  let tags: Record<string, any>[] = [
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

function buttonComponents({ addComponents, theme }: PluginAPI) {
  // const colors = theme('colors', {})
  let buttons: Record<string, any>[] = [
    // Size
    {
      '.btn': {
        fontSize: theme('fontSize.md'), // 16px
        fontWeight: '700',
        borderRadius: '8px',
        padding: '0.75rem 1.25rem calc(0.75rem - 2px)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'transparent',
        color: theme('colors.black.800'),
        lineHeight: '150%',
        //
        'transitionProperty': 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
        'willChange': 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
        'transitionTimingFunction': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'transitionDuration': '150ms',
        display: 'inline-flex',
        flexDirection: 'row',
        justifyContent: 'center',
        rowGap: '0.25rem',
        textRendering: 'optimizelegibility',
        //
        '&:active': {
          color: theme('colors.black.400'),
        },
        '&:focus-visible': {
          outline: `4px solid #90CDF4`,
        },
        '&[disabled], &[disabled]:hover, &.disabled': {
          color: theme('colors.black.400'),
          backgroundColor: theme('colors.blackAlpha.100'),
        },
      },
      '.btn-xs': {
        fontSize: theme('fontSize.xs'), // 12px
        lineHeight: '150%',
        fontWeight: '700',
        borderRadius: '4px',
        padding: '0.4375rem 0.75rem calc(0.4375rem - 1px)',
      },
      '.btn-sm': {
        fontSize: theme('fontSize.sm'), // 14px
        lineHeight: '150%',
        fontWeight: '700',
        borderRadius: '4px',
        padding: '0.59375rem 1rem calc(0.59375rem - 2px)',
      },
      '.btn-lg': {
        fontSize: theme('fontSize.lg'), // 18px
        lineHeight: '150%',
        fontWeight: '700',
        borderRadius: '6px',
        padding: '1.125rem 1.5rem calc(1.125rem - 2px)',
      },
      '.btn-xl': {
        fontSize: theme('fontSize.lg'),
        lineHeight: '1em',
        padding: '1rem 3.875rem',
      },
    },

    // Type
    {
      '.btn-circle': {
        borderRadius: theme('borderRadius.full'),
      },
      '.btn-rounded': {
        borderRadius: theme('borderRadius.full'),
      },
    },

    // Pre-defined style
    {
      ['.btn-primary']: {
        '&:hover': {
          opacity: '0.75',
        },
      },
      '.btn-secondary': {
        '&:hover': {
          opacity: '0.7',
        },
      },
      '.btn-outline': {
      },
      '.btn-outlineFill': {
      },
      '.btn-text': {
        background: 'none',
        borderColor: 'transparent',
        '&:hover': {
          color: theme('colors.phalaGreenLight'),
        },
      },
    },

    // Colors
    {
      '.btn-phala': {
        backgroundColor: theme('colors.phalaGreen.500'),
        color: theme('colors.black.800'),
      },
      '.btn-purple': {
        backgroundColor: theme('colors.phalaPurple.500'),
        color: '#fff',
      },
      '.btn-blk': {
        backgroundColor: theme('colors.black.800'),
        color: '#fff',
      },
      '.btn-wht': {
        backgroundColor: theme('colors.white'),
        color: theme('colors.black.800'),
        '&:hover': {
          backgroundColor: 'oklch(0.278078 0.029596 256.848 / 0.1)',
        },
      },
      '.btn-phat': {
        backgroundColor: theme('colors.phatGreen.400'),
        color: '#fff',
      },
      '.btn-phalaworld': {
        backgroundColor: theme('colors.phalaWorldTeal.400'),
        color: theme('colors.black.800'),
      },
    },
  ]
  addComponents(buttons)
}

function presetGradient({ addComponents, theme }: PluginAPI) {
  const gradients = []
  const colors = theme('colors', {}) as Record<string, any>
  for (let color in colors) {
    gradients.push({
      [`.bg-gradient-${color}`]: {
        background: `linear-gradient(147deg, ${colors[color]['900']} 0%, ${colors[color]['700']} 100%)`,
      },
    })
  }
  gradients.push({
    ['.bg-gradient-phatGreen']: {
      background: 'linear-gradient(147deg, #6FB74E 0%, #2A421F 100%)',
    },
    ['.bg-gradient-gray']: {
      background: `linear-gradient(147deg, ${colors['gray']['600']} 0%, ${colors['gray']['800']} 100%)`,
    },
  })
  addComponents(gradients)
}

//
// AI-Agents
//
function themeAIAgent({ addComponents }: PluginAPI) {
  const settings = []
  settings.push({
    '.btn-ai-agent': {
      background: 'linear-gradient(90deg, #CDFA50 0%, #29BDB4 50.55%, #7F52FA 100%)',
      color: '#fff',
      '&:hover': {
        opacity: '0.75',
      },
    },
    ['.bg-ai-agent']: {
      background: 'linear-gradient(90deg, #CDFA50 0%, #29BDB4 50.55%, #7F52FA 100%)',
    },
    '.text-ai-agent': {
      background: 'linear-gradient(90deg, #CDFA50 0%, #29BDB4 50.55%, #7F52FA 100%)',
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
  })
  addComponents(settings)
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
      '025': '0.125rem',  // 0.125rem = 2px
      '050': '0.25rem',     // 0.25rem = 4px
      '075': '0.375rem',  // 0.375rem = 6px
      100: '0.5rem',      // 0.5rem = 8px
      150: '0.75rem',     // 0.75rem = 12px
      200: '1rem',        // 1rem = 16px
      250: '1.25rem',     // 1.25rem = 20px
      300: '1.5rem',      // 1.5rem = 24px
      400: '2rem',        // 2rem = 32px
      500: '2.5rem',     // 2.5rem = 40px
      600: '3rem',       // 3rem = 48px
      750: '3.5rem',       // 3.5rem = 56px
      800: '4rem',       // 4rem = 64px
      850: '4.5rem',       // 4rem = 72px
      1000: '5rem',       // 5rem = 80px
      //
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
      xs: '0.375rem',   // 0.375rem = 6px
      sm: '0.75rem',    // 0.75rem = 12px
      DEFAULT: '1rem', // 0.25rem = 16px
      md: '1.5rem',   // 1.5rem = 24px
      lg: '1.75rem',     // 1.75rem = 28px
      xl: '2rem',    // 2rem = 32x
      '2xl': '2.25rem',    // 2.25rem = 36px
      '3xl': '3rem',  // 3rem = 48x
      '4xl': '4rem',  // 4rem = 64px
      'full': '9999px',
      // @deprecated
      '5xl': '2rem',    // 2rem = 32px
      '6xl': '2.25rem',    // 2rem = 32px
    }, // END: borderRadius

    boxShadow: {
      sm: '0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)',
      base: '0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)',
      lg: '0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
      xl: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
      'dark-sm': '0px 2px 4px -11px rgba(0, 0, 0, 0.40), 0px 4px 6px -1px rgba(0, 0, 0, 0.20), 0px 0px 0px 1px rgba(0, 0, 0, 0.10)',
      'dark-base': '0px 4px 10px -2px rgba(0, 0, 0, 0.40), 0px 10px 15px -3px rgba(0, 0, 0, 0.20), 0px 0px 0px 1px rgba(0, 0, 0, 0.10)',
      'dark-lg': '0px 15px 20px 0px rgba(0, 0, 0, 0.30), 0px 5px 10px 0px rgba(0, 0, 0, 0.20), 0px 0px 0px 1px rgba(0, 0, 0, 0.10)',
      'dark-xl': '0px 15px 40px 0px rgba(0, 0, 0, 0.40), 0px 5px 10px 0px rgba(0, 0, 0, 0.20), 0px 0px 0px 1px rgba(0, 0, 0, 0.10)',
      'inner-sm': '0px 2px 4px 0px rgba(0, 0, 0, 0.06) inset',
      'inner-base': '0px 2px 8px 0px rgba(0, 0, 0, 0.10) inset',
      'inner-lg': '0px 2px 12px 0px rgba(0, 0, 0, 0.14) inset',
      'inner-xl': '0px 2px 16px 0px rgba(0, 0, 0, 0.18) inset',
      none: 'none',
    }, // END: boxShadow

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //
    // Extending
    //
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    extend: {
      colors: {
        // @deprecated use phatGreen
        phat: {
          DEFAULT: '#59A138',
          50: '#F5FFF0',
          100: '#D5F6C6',
          200: '#B2E69A',
          300: '#8AD368',
          400: '#6FB74E',
          500: '#59A138',
          600: '#A4C840',
          700: '#3B6727',
          800: '#325422',
          900: '#29451C',
        },
        // @deprecated alias to phat, use phatGreen
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
        //
        phalaGreenLight: '#C4F142',
        phalaGreen: {
          DEFAULT: '#CDFA50',
          50: '#FAFEED',
          100: '#F5FEDC',
          200: '#EBFDB9',
          300: '#E1FC96',
          400: '#D7FB73',
          500: '#CDFA50',
          600: '#A4C840',
          700: '#7B9630',
          800: '#526420',
          900: '#293210',
        },
        phalaPurple: {
          DEFAULT: '#7F52FA',
          50: '#F2EDFE',
          100: '#E5DCFE',
          200: '#CCBAFD',
          300: '#B297FC',
          400: '#9975FB',
          500: '#7F52FA',
          600: '#6642C8',
          700: '#4C3196',
          800: '#332164',
          900: '#191032',
        },
        phatGreen: {
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
        phalaWorldTeal: {
          DEFAULT: '#2DD2B5',
          50: '#D7FEF7',
          100: '#AFFDEF',
          200: '#86FCE7',
          300: '#5EFBDF',
          400: '#36FAD7',
          500: '#2DD2B5',
          600: '#25AA92',
          700: '#1C8270',
          800: '#135A4D',
          900: '#0B322B',
        },
        // website specified colors
        // @deprecated
        // primary: {
        //   DEFAULT: '#CDFA50',
        // },
        // @deprecated
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
        black: {
          DEFAULT: '#000',
          50: '#F2F2F2',
          100: '#E5E5E5',
          150: '#D9D9D9',
          200: '#CCC',
          250: '#BFBFBF',
          300: '#B2B2B2',
          350: '#A6A6A6',
          400: '#999',
          450: '#8C8C8C',
          500: '#808080',
          550: '#737373',
          600: '#666',
          650: '#595959',
          700: '#4D4D4D',
          750: '#404040',
          800: '#333',
          850: '#262626',
          900: '#1A1A1A',
          950: '#0D0D0D',
        },
        //
        positive: {
          DEFAULT: '#38A169',
          50: '#F0FFF4',
          100: '#C6F6D5',
          200: '#9AE6B4',
          300: '#68D391',
          400: '#48BB78',
          500: '#38A169',
          600: '#25855A',
          700: '#276749',
          800: '#22543S',
          900: '#1C4532',
        },
        critical: {
          DEFAULT: '#E53E3E',
          50: '#FFF5F5',
          100: '#FED7D7',
          200: '#FEB2B2',
          300: '#FC8181',
          400: '#F56565',
          500: '#E53E3E',
          600: '#C53030',
          700: '#9B2C2C',
          800: '#822727',
          900: '#63171B',
        },
        warning: {
          DEFAULT: '#DD6B20',
          50: '#FFFAF0',
          100: '#FEEBCB',
          200: '#FBD38D',
          300: '#F6AD55',
          400: '#ED8936',
          500: '#DD6B20',
          600: '#C05621',
          700: '#9C4221',
          800: '#7B341E',
          900: '#652B19',
        },
        wait: {
          DEFAULT: '#d69e2e',
          50: '#FFFFF0',
          100: '#FEFCBF',
          200: '#FAF089',
          300: '#f6e05e',
          400: '#ecc94b',
          500: '#d69e2e',
          600: '#b7791f',
          700: '#975a16',
          800: '#744210',
          900: '#5f370e',
        },
        primary: {
          DEFAULT: '#3182ce',
          50: '#e8f8ff',
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
        // END
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
          50: '#FAFEED',
          100: '#c6f6d5',
          200: '#EBFDB9',
          300: '#68d391',
          400: '#48bb78',
          500: '#CDFA50',
          600: '#A4C840',
          700: '#7B9630',
          800: '#526420',
          900: '#1c4532',
        },
        teal: {
          50: '#e6fffa',
          100: '#b2f5ea',
          200: '#81e6d9',
          300: '#4fd1c5',
          400: '#38b2ac',
          500: '#CDFA50',
          600: '#2c7a7b',
          700: '#7B9630',
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
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // primary: {
        //   DEFAULT: 'hsl(var(--primary))',
        //   foreground: 'hsl(var(--primary-foreground))',
        // },
        // secondary: {
        //   DEFAULT: 'hsl(var(--secondary))',
        //   foreground: 'hsl(var(--secondary-foreground))',
        // },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      }, // END: colors
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },

      fontFamily: {
        sans: ['Montserrat', ...fontFamily.sans],
        // primary: 'var(--font-montserrat)',
        // heading: 'Montserrat',
        //
        // We don't override the default font stack here, because we want keep compatbile with legacy code.
        //
      }, // END: fontFamily

      fontSize: {
        // 0.75rem = 12px, 1.5em = 18px, 0
        '12': ['0.75rem', { lineHeight: '1.5em', letterSpacing: '0' }],
        'xs': ['0.75rem', { lineHeight: '1.5em', letterSpacing: '0' }],
        // 0.875rem = 14px, 1.5em = 21px, -0.6% = -0.084px
        '14': ['0.875rem', { lineHeight: '1.5em', letterSpacing: '-0.084px' }],
        'sm': ['0.875rem', { lineHeight: '1.5em', letterSpacing: '-0.084px' }],
        // 1rem = 16px, 1.5em = 24px, -1.1% = -0.176px
        '16': ['1rem', { lineHeight: '1.5em', letterSpacing: '-0.176px' }],
        'md': ['1rem', { lineHeight: '1.5em', letterSpacing: '-0.176px' }],
        // 1.125rem = 18px, 1.5em = 27px, -1.1% = -0.198px
        '18': ['1.125rem', { lineHeight: '1.5em', letterSpacing: '-0.198px' }],
        'lg': ['1.125rem', { lineHeight: '1.5em', letterSpacing: '-0.198px' }],
        // 1.25rem = 20px, 1.4em = 28px, -1.7% = -0.34px
        '20': ['1.25rem', { lineHeight: '1.4em', letterSpacing: '-0.34px', }],
        'xl': ['1.25rem', { lineHeight: '1.4em', letterSpacing: '-0.34px', }],
        // 1.5rem = 24px, 1.375em = 33px, -1.9% = -0.456px
        '24': ['1.5rem', { lineHeight: '1.375em', letterSpacing: '-0.456px', }],
        '2xl': ['1.5rem', { lineHeight: '1.375em', letterSpacing: '-0.456px', }],
        // 2rem = 32px, 1.375em = 44px, -2.2% = -0.704px
        '32': ['2rem', { lineHeight: '1.375em', letterSpacing: '-0.704px', }],
        '3xl': ['2rem', { lineHeight: '1.375em', letterSpacing: '-0.704px', }],
        // 2.5rem = 40px, 1.3em = 52px, -2.2% = -0.88px
        '40': ['2.5rem', { lineHeight: '1.3em', letterSpacing: '-0.88px', }],
        '4xl': ['2.5rem', { lineHeight: '1.3em', letterSpacing: '-0.88px', }],
        // 3rem = 48px, 1.25em = 60px, -2.2% = -1.056px
        '48': ['3rem', { lineHeight: '1.25em', letterSpacing: '-1.056px', }],
        '5xl': ['3rem', { lineHeight: '1.25em', letterSpacing: '-1.056px', }],
        // 3.5rem = 56px, 1.25em = 70px, -2.2% = -1.232px
        '56': ['3.5rem', { lineHeight: '1.25em', letterSpacing: '-1.232px', }],
        '6xl': ['3.5rem', { lineHeight: '1.25em', letterSpacing: '-1.232px', }],
        // @FIXME 4.5rem = 72px
        '7xl': ['4.5rem', { lineHeight: '1' }],
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
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
    require("daisyui"),
    plugin(presetGradient),
    plugin(headingComponents),
    plugin(cardComponents),
    plugin(tagComponents),
    plugin(buttonComponents),
    plugin(themeAIAgent),
  ],
  daisyui: {
    darkTheme: false,
    based: false,
    styled: true,
    prefix: "d-",
  //   themes: [
  //     {
  //       "primary": "#CDFA50",
  //       "secondary": "#7F52FA",
  //       "accent": "#45A138",
  //       "neutral": "#3d4451",
  //       "base-100": "#ffffff",
  //     },
  //   ],
  },
}
