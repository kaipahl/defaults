'use strict';

module.exports = function (grunt) {
	grunt.config('watch', {

		css: {
			files: [ 'src/_scss/**/*.scss' ],
			tasks: [ 'buildCss' ],
			options: {
				livereload: true
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
