'use strict';

/*  ====== POSTCSS ======
 *  - Automatisches Ergänzen von browserspezifische CSS-Prefixes
 *
 */
module.exports = function (grunt) {

	grunt.config('postcss', {
		options: {
			processors: [
				require('autoprefixer')({
					browsers: [ 'last 3 version', 'ie 9' ]
				})
			]
		},

		dev: {
			options: {
				map: {
					inline: false, // save all sourcemaps as separate files...
					annotation: 'dist/_css' // ...to the specified directory
				}
			},
			files: [{
				src: 'dist/_css/foo.css',
				dest: 'dist/_css/foo.css'
			}]
		},

		dev: {
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
