/** ====== SCSS ======
 *  - libsass/nodesass
 */

module.exports = function (grunt) {
	'use strict';
	const sass = require('node-sass');
	grunt.config('sass', {

		dev: {
			options: {
				implementation: sass,
				outputStyle: 'expanded',
				sourceMap: true
			},
			files: [{
				src: 'source/_scss/foo.scss',
				dest: 'dist/_css/foo.css'
			}]
		},
        dist: {
            options: {
	            implementation: sass,
                outputStyle: 'compressed',
                debugInfo: false,
                sourceMap: false
            },
            files: [{
                src: 'src/_scss/foo.scss',
                dest: 'dist/_css/foo.css'
            }]
        }

	});

	grunt.loadNpmTasks('grunt-sass');
};
