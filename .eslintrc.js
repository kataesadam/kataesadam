module.exports = {
  root: true,
  ignorePatterns: ['projects/**/*'],
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: ['tsconfig.json'],
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@angular-eslint/recommended',
        'plugin:@angular-eslint/template/process-inline-templates',
        'plugin:prettier/recommended',
        'plugin:import/errors',
        'plugin:import/typescript',
      ],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
          node: {
            extensions: ['.ts', '.tsx', '.d.ts'],
            moduleDirectory: ['src', 'node_modules'],
          },
        },
      },
      plugins: ['unused-imports', 'prettier'],
      rules: {
        'prettier/prettier': ['error'],
        '@angular-eslint/component-selector': [
          'error',
          {
            type: 'element',
            prefix: 'app',
            style: 'kebab-case',
          },
        ],
        '@angular-eslint/directive-selector': [
          'error',
          {
            type: 'attribute',
            prefix: 'app',
            style: 'camelCase',
          },
        ],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
          'off',
          {
            accessibility: 'explicit',
          },
        ],
        'no-restricted-imports': ['error', { patterns: ['../../*'] }],
        'no-restricted-modules': ['error', { patterns: ['../../*'] }],
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'no-shadow': 'off',
        'comma-dangle': 'off',
        'import/no-deprecated': 'off',
        'arrow-parens': ['off', 'always'],
        'prefer-arrow/prefer-arrow-functions': 'off',
        'unused-imports/no-unused-imports': ['error'],
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
      },
    },
    {
      files: ['shared/scripts/*.js', '**/protractor.conf.js'],
      parserOptions: {
        ecmaVersion: 6,
      },
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        '@angular-eslint/template/no-negated-async': 'off',
      },
    },
  ],
};
