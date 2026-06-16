/** @type {import('prettier').Config} */
export default {
  useTabs: true,
  tabWidth: 4,
  semi: true,
  singleQuote: true,
  trailingComma: 'none',
  endOfLine: 'lf',
  overrides: [
    {
      files: ['*.config.mjs', '*.yml', '*.yaml', 'package.json'],
      options: {
        useTabs: false,
        tabWidth: 2
      }
    }
  ]
};
