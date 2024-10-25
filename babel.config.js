module.exports = {
    presets: [
        '@babel/preset-env', // Для поддержки современных функций JavaScript
        '@babel/preset-react', // Для поддержки JSX
        '@babel/preset-typescript', // Для поддержки TypeScript
    ],
    plugins: [
        // Плагины, которые вам могут понадобиться
        '@babel/plugin-proposal-class-properties', // Для поддержки свойств классов
        '@babel/plugin-transform-runtime', // Для уменьшения размера бандла
    ],
};
