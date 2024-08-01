import globals from 'globals';

import pluginJs from '@eslint/js';

import pluginReact from 'eslint-plugin-react';

import pluginQuery from '@tanstack/eslint-plugin-query';

export default [
    ...pluginQuery.configs['flat/recommended'],

    { files: ['**/*.{js,mjs,cjs,jsx}'] },

    { languageOptions: { globals: globals.browser } },

    pluginJs.configs.recommended,

    pluginReact.configs.flat.recommended,
];
