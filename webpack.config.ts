import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin'; // Импортируй плагин

const config: {
    mode: string;
    output: { path: string; filename: string; clean: boolean };
    devServer: { static?: string; historyApiFallback: boolean; compress: boolean; port: number; open: boolean };
    entry: string;
    resolve: { extensions: string[] };
    plugins: (HtmlWebpackPlugin | MiniCssExtractPlugin | CopyWebpackPlugin)[];
    module: { rules: ({ test: RegExp; use: string; exclude: RegExp } | { test: RegExp; type: string })[] }
} = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: '[name].[contenthash].js',
        path: __dirname + '/dist',
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public/images', to: 'images' },
            ],
        }),
    ],
    devServer: {
        static: './public',
        compress: true,
        port: 3000,
        open: true,
        historyApiFallback: true,
    },
};

export default config;
