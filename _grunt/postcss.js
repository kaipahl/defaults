/*  ====== POSTCSS ======
 *  - Automatisches Ergänzen von browserspezifische CSS-Prefixes
 *
 */
module.exports = function (grunt) {
	'use strict';

	grunt.config('postcss', {
		options: {
			processors: [
				require('autoprefixer')
			]
		},

		dev: {
			options: {
				map: true
			},
			files: [{
				src: 'dist/_css/foo.css',
				dest: 'dist/_css/foo.css'
			}]
		},

		dist: {
			options: {
				map: false
			},
			files: [{
				src: 'dist/_css/foo.css',
				dest: 'dist/_css/foo.css'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-postcss');
};
