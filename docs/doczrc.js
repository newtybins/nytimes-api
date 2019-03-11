import merge from "webpack-merge"
import { css } from "docz-plugin-css"

export default {
  title: "Documentation",
  description: 'The documentation for the nytimes-api package.',
  plugins: [css()],
  wrapper: "docz/wrapper.js",
  files: "**/*.{md,markdown,mdx}",
  base: "/nytimes-api/",
  dest: 'public/docs'

  modifyBundlerConfig: config => {
    const gatsbyNecessaryConfig = {
      module: {
        rules: [
          {
            exclude: [/node_modules\/(?!(gatsby)\/)/, /\.json$/],
            use: [
              {
                loader: "babel-loader",
                options: {
                  presets: ["@babel/preset-react", "@babel/preset-env"],
                  plugins: [
                    "@babel/plugin-proposal-class-properties",
                    "@babel/plugin-syntax-dynamic-import",
                  ],
                },
              },
            ],
          },
        ],
      },
    }

    return merge(gatsbyNecessaryConfig, config)
  },
}
