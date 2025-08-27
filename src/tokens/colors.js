// Findem Color Tokens
export const colors = {
  // Primary Colors
  primary: {
    main: '#4599FA',
    dark: '#0F42BC',
    medium: '#167FF9',
    light: '#E1EFFF'
  },

  // Text Colors
  text: {
    title: '#101828',
    secondaryTitle: '#465366',
    tertiary: '#667085',
    muted: '#969dad'
  },

  // Background Colors
  background: {
    new: '#fcfcfd',
    secondary: '#f9fafb',
    tableHeader: '#f3f5f8',
    hover: '#f2f4f7'
  },

  // Border Colors
  border: {
    default: '#dcdfe',
    secondary: '#eaecf0'
  },

  // State Colors
  active: {
    darker: '#167ff9',
    lighter: '#92d8a5',
    lightest: '#e1efff'
  },

  success: {
    darker: '#54b06d',
    lightest: '#e0ffe9'
  },

  error: {
    darker: '#f17c4b',
    lighter: '#ffbfa3',
    lightest: '#ffede5'
  },

  warning: {
    darker: '#856a00',
    lighter: '#ffe066',
    lightest: '#fffae5'
  },

  special: {
    darker: '#9370bd',
    lighter: '#c9b3e5',
    lightest: '#f1e5ff'
  }
};

// CSS Custom Properties mapping
export const cssVariables = {
  // Primary Colors
  '--findem-color-primary': colors.primary.main,
  '--findem-color-primary-dark': colors.primary.dark,
  '--findem-color-primary-medium': colors.primary.medium,
  '--findem-color-primary-light': colors.primary.light,

  // Text Colors
  '--findem-color-text-title': colors.text.title,
  '--findem-color-text-secondary-title': colors.text.secondaryTitle,
  '--findem-color-text-tertiary': colors.text.tertiary,
  '--findem-color-text-muted': colors.text.muted,

  // Background Colors
  '--findem-color-bg-new': colors.background.new,
  '--findem-color-bg-secondary': colors.background.secondary,
  '--findem-color-bg-table-header': colors.background.tableHeader,
  '--findem-color-bg-hover': colors.background.hover,

  // Border Colors
  '--findem-color-border-default': colors.border.default,
  '--findem-color-border-secondary': colors.border.secondary,

  // State Colors
  '--findem-color-active-darker': colors.active.darker,
  '--findem-color-active-lighter': colors.active.lighter,
  '--findem-color-active-lightest': colors.active.lightest,
  '--findem-color-success-darker': colors.success.darker,
  '--findem-color-success-lightest': colors.success.lightest,
  '--findem-color-error-darker': colors.error.darker,
  '--findem-color-error-lighter': colors.error.lighter,
  '--findem-color-error-lightest': colors.error.lightest,
  '--findem-color-warning-darker': colors.warning.darker,
  '--findem-color-warning-lighter': colors.warning.lighter,
  '--findem-color-warning-lightest': colors.warning.lightest,
  '--findem-color-special-darker': colors.special.darker,
  '--findem-color-special-lighter': colors.special.lighter,
  '--findem-color-special-lightest': colors.special.lightest
};

export default colors;