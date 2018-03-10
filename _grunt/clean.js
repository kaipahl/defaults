module.exports = function (grunt) {
    grunt.config('clean', {

        cleanAll: {
            src: ['dist/']
        },

        css: {
            src: 'dist/_css'
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};
