module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },

  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],

  plugins: ['react', '@typescript-eslint', 'react-hooks', 'simple-import-sort'],

  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    'comma-dangle': ['error', 'never'],
    'no-shadow': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    camelcase: 'off',
    'linebreak-style': 'off',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-control-regex': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/no-array-index-key': 'off',
    'arrow-parens': ['error', 'always'],
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-curly-spacing': [
      'error',
      { when: 'always', attributes: true, children: true },
    ],
    'react/jsx-filename-extension': 'off',
    '@typescript-eslint/indent': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    indent: ['error', 2, { SwitchCase: 1 }],
    'react/jsx-indent-props': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    '@typescript-eslint/explicit-function-return-type': 'error',
    'max-len': [
      'error',
      {
        code: 150,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
      },
    ],
    'array-element-newline': ['error', 'consistent'],
    'array-bracket-newline': ['error', { multiline: true }],
    'multiline-ternary': ['error', 'always-multiline'],
    'object-curly-newline': ['error', { multiline: true, consistent: true }],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: true },
    ],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'react/jsx-fragments': 'off',
    'react/jsx-sort-props': ['error'],
    'jsx-a11y/alt-text': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/type-annotation-spacing': [
      'error',
      { before: false, after: true },
    ],
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['.storybook/**', '**/*.stories.*'],
      },
    ],
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};
