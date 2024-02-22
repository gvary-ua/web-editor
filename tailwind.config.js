/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        robotoFlex: 'Roboto Flex, sans-serif',
      },
      borderRadius: {
        10: '2.5rem',
      },
    },
    colors: {
      logo: '#332827',

      // Headers, buttons
      primary: {
        1: '#231F20', // black
        2: '#463D3F', // lighter black
      },
      secondary: {
        1: '#EADFFF', // lavander
        2: '#C2BEC9', // dust lavander
        3: '#F5EFFF', // light lavander
      },

      // Screen, popup, card backgrounds
      background: '#FFFFFF', // white
      surface: {
        1: '#F0ECE8', // light gray
        2: '#F6F6F6', // almost white
        3: '#FAFAFA', // almost almost white

        // Alerts, tags, icons
        error: '#FFC3BE', // salmon
        success: '', // we don't have this yet
        warning: '', // we don't have this yet
        info: '#D6F2FA', // blue
      },

      // Alerts, tags, icons
      error: '#D02E0B', // red
      success: '#22894B', // green
      warning: '#D99C4C', // caramel
      info: '', // we don't have this yet

      // Text, borders, icons
      'on-primary': {
        1: '#FFFFFF', // white
        2: '#FFFFFF', // white
      },
      'on-secondary': {
        1: '#231F20', // black
        2: '#FFFFFF', // white
        3: '#231F20', // black
      },
      'on-background': {
        1: '#231F20', // black
        2: '#574E4D', // gray
      },
      'on-surface': {
        1: '#231F20', // black
        2: '#231F20', // black
        3: '#231F20', // black

        error: '#231F20', // black
        warning: '#231F20', // black
        info: '#231F20', // black
        success: '#231F20', // black
      },
    },
  },
  plugins: [],
};
