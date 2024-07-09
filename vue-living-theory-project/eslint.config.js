import path from "node:path";
import { fileURLToPath } from "node:url";
import { includeIgnoreFile } from "@eslint/compat";
import js from "@eslint/js";
import pluginVue from 'eslint-plugin-vue'
import eslintConfigPrettier from "eslint-config-prettier";

const gitignorePath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), ".gitignore");

export default [
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  eslintConfigPrettier,
  { files: ["**/*.vue", "**/*.js", "**/*.jsx", "**/*.mjs"] },
  includeIgnoreFile(gitignorePath),
  {
    rules: {

    }
  }
]
