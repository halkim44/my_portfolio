export const BreakPoints = {
  xsMobile: {
    query: '(max-width: 600px)'
  },
  mobile: {
    min: { query: '(min-width: 601px)' },
    max: { query: '(max-width: 768px)' },
  },
  tablet: {
    min: { query: '(min-width: 769px)' },
    max: { query: '(max-width: 992px)' },
  },
  desktop: {
      min: { query: '(min-width: 993px)' },
      max: { query: '(max-width: 1200px)' },
  },
  xlDesktop: {
    query: '(min-width: 1200px)'
  }
}