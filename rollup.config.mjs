import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import babel from "@rollup/plugin-babel";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import tailwindcss from "@tailwindcss/postcss";

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: "dist/index.js",
                format: "cjs",
                sourcemap: true,
                plugins: [terser()],
            },
            {
                file: "dist/index.esm.js",
                format: "esm",
                sourcemap: true,
                plugins: [terser()],
            },
        ],
        plugins: [
            resolve({
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            }),
            commonjs(),
            postcss({
                plugins: [tailwindcss()],
                inject: true,
                minimize: true,
            }),
            typescript({ tsconfig: "./tsconfig.json" }),
            babel({
                exclude: "node_modules/**",
                babelHelpers: "bundled",
            }),
        ],
        external: ["react", "react-dom", "lucide-react"],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.css$/],
    },
];
