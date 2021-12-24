const size = {
  mobileSmall: '320px',
  mobile: '480px',
  tabletSmall: '768px',
  tablet: '960px',
  desktopSmall: '1024px',
  desktop: '1200px',
}

const breakpoints = {
  mobileSmall: `(min-width: ${size.mobileSmall})`,
  mobile: `(min-width: ${size.mobile})`,
  tabletSmall: `(min-width: ${size.tabletSmall})`,
  tablet: `(min-width: ${size.tablet})`,
  desktopSmall: `(min-width: ${size.desktopSmall})`,
  desktop: `(min-width: ${size.desktop})`,
}

export default breakpoints
