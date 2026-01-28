import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    rules: {
      // TypeScript estricto
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      
      // React mejores prácticas
      "react/jsx-no-target-blank": "error",
      "react/jsx-key": "error",
      
      // No console en producción
      "no-console": ["warn", { allow: ["warn", "error"] }],
      
      // Código limpio
      "prefer-const": "error",
      "no-var": "error",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "node_modules/**",
    "*.config.js",
    "*.config.mjs",
    "*.config.ts",
  ]),
]);

export default eslintConfig;
