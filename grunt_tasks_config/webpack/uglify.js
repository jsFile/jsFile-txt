module.exports = function () {
    return {
        options: {
            compress: true,
            report: false
        },
        main: {
            'src': 'dist/jsfile-txt.js',
            'dest': 'dist/jsfile-txt.min.js'
        }
    };
};