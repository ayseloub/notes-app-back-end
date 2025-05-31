// eslint.config.mjs
import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

export default [
  daStyle,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.node,
    },
    rules: {
      'linebreak-style': ['error', 'unix'],
    },
  },
  pluginJs.configs.recommended,
];
