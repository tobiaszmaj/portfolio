interface MediaQueryProps {
  [breakpoint: string]: number;
}

const breakpoints: MediaQueryProps = {
  xs: 420,
  s: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const theme = {
  fonts: {
    mainFont: `'Poppins', sans-serif`,
    subFont: `'Kalam', cursive`,
  },
  white: 'hsl(0, 0%, 100%)',
  gray: 'hsl(0, 0%, 52%)',
  gray100: 'hsl(0, 0%, 98%)',
  dark: 'hsl(200, 15%, 8%)',
  dark100: 'hsl(251, 12%, 19%)',
  darkGradient: 'linear-gradient(45deg, #25232a 0%, #3c3a4e 100%)',
  green: 'hsl(128, 50%, 47%)',
  blue: 'hsl(208, 63%, 57%)',
  blue100: 'hsl(208, 100%, 74%)',
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  fontSize: {
    xs: '1.2rem',
    s: '1.6rem',
    m: '1.8rem',
    lg: '2rem',
    xlg: '2.3rem',
    xl: '2.8rem',
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
