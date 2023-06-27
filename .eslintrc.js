module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:i18next/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google',
  ],
  overrides: [

  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      'jsx': true,
    },
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
  ],
  rules: {
    'import/no-unresolved': 'off',
    'react/require-default-props': 'off',
    'require-jsdoc': 'warn',
    'valid-jsdoc': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-inferrable-types': 'off',
    'max-len': 'warn',
    'new-cap': 'warn',
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'warn',
    'i18next/no-literal-string': ['error', {markupOnly: true}],
  },
  globals: {
    __IS_DEV__: true,
  },
};