module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        // [
        //     "@babel/preset-env", {modules: false}
        // ]
    ],
    "compact": true,
    plugins: [
        [
            'component',
            {
                libraryName: 'element-ui',
                styleLibraryName: '~theme',
            },
        ],
    ],

}
