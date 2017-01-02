'use strict';

module.exports = function (grunt) {
	grunt.config('sass', {

		dev: {
			options: {
				style: 'expanded',
				debugInfo: false
			},
			files: [{
				src: 'src/_scss/foo.scss',
				dest: 'dist/_css/foo.css'
			}]
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
};
