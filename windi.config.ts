import plugin from 'windicss/plugin'
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        app: {
          blue: '#0500F9'
        },
        success: '#00F9CC',
        warning: {
          default: '#FF409C',
          hover: '#FE81BA',
          click: '#FF0084'
        },
        error: '#FF5B96',
        grey: {
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121'
        },
        primary: {
          50: '#eae6ff',
          100: '#b1a3ff',
          300: '#6052ff',
          400: '#3429FF',
          500: '#0500F9',
          600: '#0004d4'
        }
      },
      fontFamily: {
        inter: ['Inter', 'Arial', 'sans-serif'],
        cabin: ['Cabin', 'Arial', 'sans-serif'],
        zighead: ['Zighead', 'Arial', 'sans-serif'],
        spaceMono: [
          'Space Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ]
      },
      boxShadow: {
        dialog: '0px 4px 10px rgba(0, 0, 0, 0.05)',
        dropdown: '0px 4px 10px rgba(12, 17, 139, 0.05)',
        panel: '0px 4px 10px rgba(12, 17, 139, 0.1)',
        'edit-component': '0px 3.62502px 9.06256px rgba(0, 0, 0, 0.1)',
        'edit-switch': '0px 0.1px 0.3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.2)'
      },
      textShadow: {
        bold: '-0.25px -0.25px 0 #fff,0.25px -0.25px 0 #fff,-0.25px 0.25px 0 #fff,0.25px 0.25px 0 #fff'
      },
      backgroundSize: {
        full: '100% 100%'
      },
      backgroundImage: {
        fadeTab: 'linear-gradient(to right, #F5F5F5 4%, transparent 8%, transparent 92%, #F5F5F5 96%)',
        EarlyBirdTicket: 'url("~~/assets/images/activity/early-bird-ticket.png")',
        EarlyBirdDiscount: 'url("~~/assets/images/activity/early-bird-discount.png")'
      },
      dropShadow: {
        coupon: '0px 4px 10px rgba(12, 17, 139, 0.1)'
      },
      transitionTimingFunction: {
        bounce: 'cubic-bezier(0.23,1,0.76,1.45)'
      }
    }
  },
  variants: {
    scrollbar: ['rounded']
  },
  plugins: [
    require('windicss/plugin/line-clamp'),
    require('windicss/plugin/typography'),
    require('windicss/plugin/aspect-ratio'),
    require('windicss/plugin/scroll-snap'),
    require('@windicss/plugin-scrollbar'),
    plugin(({ addVariant }) => {
      addVariant('nuxt-active', ({ modifySelectors }) => {
        return modifySelectors(({ className }) => {
          return `.router-link-active.${className}`
        })
      })
    })
  ]
})
