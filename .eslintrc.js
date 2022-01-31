const path = require('path')

module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/extensions': [
      '*.js',
      '*.jsx',
      '*.ts',
      '*.tsx',
    ],
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')]
      }
    }
  },
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-closing-bracket-location': [1, { selfClosing: 'tag-aligned', nonEmpty: 'after-props' }],
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'object-curly-newline': ['error', { consistent: true }],
    'react/require-default-props': 'off',
    'react/no-children-prop': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight'],
      aspects: ['invalidHref', 'preferButton']
    }],
  }
}
