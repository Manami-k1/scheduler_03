import { defineConfig } from "babel";

export default defineConfig({
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: ["babel-plugin-styled-components"],
});
