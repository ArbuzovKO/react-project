import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  const svgLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
  }

  const fileLoader = {
      test: /\.(png|jpe?g|gif|woff2|woff)$/i,
      use: [
        {
            loader: 'file-loader',
        },
      ],
  }
    
  const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes('.module.')),
              localIdentName: isDev 
              ? '[path][name]__[local]' 
              : '[hash:base64:8]'
          },
        }
        },
        // Compiles Sass to CSS
        "sass-loader",
      ],
    }
  
  //Если не используем TS - нужен babel-loader
  
  const typescriptLoader =                         // одно из самых важных полей в вебпаке, фигурируем лоудеры
          {                               // которые выходят за рамки js
            test: /\.tsx?$/,              // регулярное выражение для ts и tsx файлов
            use: 'ts-loader',
            exclude: /node_modules/,      // исключение нодмодули их обрабатывать не нужно
          }
    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader
    ]
}