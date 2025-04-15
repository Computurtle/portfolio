// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint"; // For TypeScript support
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js"; // Core React rules
import pluginReactHooks from "eslint-plugin-react-hooks"; // Existing Hooks plugin
import pluginReactRefresh from "eslint-plugin-react-refresh"; // Existing Refresh plugin
import eslintConfigPrettier from "eslint-config-prettier"; // The Prettier override config

export default [
  // 1. Global Ignore
  { ignores: ["dist/", "node_modules/", ".vscode/"] }, // Added node_modules and vscode

  // 2. Core ESLint Recommended Rules (applies broadly)
  pluginJs.configs.recommended,

  // 3. TypeScript Specific Configuration + Rules
  // Use tseslint.configs.recommended for type-aware rules if needed, or .strict
  ...tseslint.configs.recommended, // Apply recommended TS rules

  // 4. React Recommended Rules (eslint-plugin-react)
  // We merge this separately to apply React settings
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"], // Target React component files
    ...pluginReactConfig, // Apply React recommended rules
    languageOptions: {
      // Ensure JSX is enabled here too
      ...pluginReactConfig.languageOptions, // Keep JSX settings from React config
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        // Add browser globals
        ...globals.browser,
      },
    },
    settings: { react: { version: "detect" } }, // Auto-detect React version
    rules: {
      ...pluginReactConfig.rules, // Include base rules
      "react/react-in-jsx-scope": "off", // Turn off rule no longer needed with new JSX transform
      "react/prop-types": "off", // Often turned off when using TypeScript
    },
  },

  // 5. React Hooks Rules (eslint-plugin-react-hooks)
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"], // Apply hooks rules to relevant files
    plugins: { "react-hooks": pluginReactHooks },
    rules: pluginReactHooks.configs.recommended.rules,
  },

  // 6. React Refresh Rules (eslint-plugin-react-refresh)
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"], // Apply refresh rules to relevant files
    plugins: { "react-refresh": pluginReactRefresh },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },

  // 7. Prettier Override Configuration - MUST BE THE ABSOLUTE LAST ENTRY
  eslintConfigPrettier,
];
