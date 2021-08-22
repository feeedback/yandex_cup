module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-await-in-loop': 'off',
    'dot-notation': ['off'],
    'no-console': 'off',
    'no-continue': 'off',
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     endOfLine: 'auto',
    //     trailingComma: 'es5',
    //   },
    // ],
    'linebreak-style': 'off',
    'max-len': [
      1,
      {
        code: 110,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-bitwise': ['error', { int32Hint: true }],
    'operator-assignment': ['error', 'always'],
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': ['off', 'ForOfStatement'],
    'arrow-parens': ['error', 'always'],
    'no-global-assign': ['error', { exceptions: ['Object'] }],
    'no-extend-native': ['error', { exceptions: ['Object'] }],
    'no-redeclare': ['error', { builtinGlobals: true }],
    'block-scoped-var': ['error'],
    // 'dot-notation': ['error', { allowPattern: '^.*[^a-zA-Z0-9]+.*$' }],
    'no-underscore-dangle': ['off'],
    'class-methods-use-this': 'warn',
    'no-unused-vars': ['error', { args: 'none' }],
    'no-use-before-define': ['error', { classes: false }],
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
  },
};
