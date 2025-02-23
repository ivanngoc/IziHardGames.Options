import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs",
      format: "cjs", // CommonJS for Node.js
      sourcemap: true
    },
    {
      file: "dist/index.mjs",
      format: "esm", // ESM for modern bundlers
      sourcemap: true
    }
  ],
  plugins: [
    resolve(),   // Resolve Node.js dependencies
    commonjs(),  // Convert CommonJS to ESM
    typescript() // Compile TypeScript
  ]
};
