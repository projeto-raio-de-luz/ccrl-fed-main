import globals from 'globals';
// import js from '@eslint/js';
// import tseslint from 'typescript-eslint';

export default [
  // js.configs.all,
  // js.configs.recommended,
  // ...tseslint.configs.recommended,
  {
    files: ['src/app/modules/**/*.ts'],
  },
  {
    languageOptions: { globals: globals.browser },
  },
];
