interface MediaQueryProps {
  [breakpoint: string]: number;
}

const breakpoints: MediaQueryProps = {
  xs: 420,
  s: 576,
  md: 800,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const theme = {
  fonts: {
    mainFont: `'Poppins', sans-serif`,
    subFont: `'Kalam', cursive`,
  },
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 7%)',
  gray: 'hsl(0, 0%, 72%)',
  gray50: 'hsl(0, 0%, 89%)',
  gray100: 'hsl(0, 0%, 96%)',
  dark: 'hsl(200, 15%, 8%)',
  dark50: 'hsl(252, 8%, 13%)',
  dark100: 'hsl(251, 12%, 19%)',
  dark150: 'hsl(251, 12%, 30%)',
  dark200: 'hsl(246, 15%, 25%)',
  darkGradient: 'linear-gradient(45deg, #171717 0%, #171717 100%)',
  green: 'hsl(150, 100%, 50%)',
  red: 'hsla(348, 100%, 63%)',
  red100: 'hsla(348, 100%, 63%, 0.8)',
  blue: 'hsl(208, 63%, 57%)',
  blue50: 'hsl(208, 73%, 63%)',
  blue100: 'hsl(208, 100%, 74%)',
  blueGradient: 'linear-gradient(45deg, #00ff08 0%, #00fff7 100%)',
  blueGradient2: 'linear-gradient(#00ff08 0%, #00fff7 100%)',
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  fontSize: {
    xs: '1.4rem',
    s: '1.6rem',
    m: '1.8rem',
    lg: '2rem',
    xlg: '2.3rem',
    xl: '2.8rem',
    xxlm: '3.6rem',
    xxl: '4.8rem',
    xxxl: '8.6rem',
  },
  mq: Object.keys(breakpoints).reduce<Record<string, string>>(
    (acc, breakpoint) => {
      acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
      return acc;
    },
    {}
  ),
};
