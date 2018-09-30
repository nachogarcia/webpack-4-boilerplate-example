'use strict'

module.exports = {
  root: true,
  env: {
    browser: true,
    jquery: true,
  },
  extends: 'standard',
  rules: {
    'no-var': 'error',
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
