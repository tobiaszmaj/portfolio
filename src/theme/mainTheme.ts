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
    mainFont: `'Montserrat', sans-serif`,
  },
  white: 'hsl(0, 0%, 100%)',
  gray: 'hsl(0, 0%, 52%)',
  gray100: 'hsl(0, 0%, 98%)',
  dark: 'hsl(200, 15%, 8%)',
  dark100: 'hsl(230, 17%, 14%)',
  dark200: 'hsl(228, 28%, 20%)',
  blue: 'hsl(201, 100%, 81%)',
  light: 300,
  semiBold: 500,
  bold: 700,
  fontSize: {
    xs: '1.2rem',
    s: '1.4rem',
    m: '1.6rem',
    lg: '2rem',
    xl: '2.4rem',
  },
  mq: Object.keys(breakpoints).reduce<Record<string, string>>(
    (acc, breakpoint) => {
      acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
      return acc;
    },
    {}
  ),
};
