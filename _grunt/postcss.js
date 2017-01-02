'use strict';

/*  ====== POSTCSS ======
 *  - Automatisches Ergänzen von browserspezifische CSS-Prefixes
 *
 */
module.exports = function (grunt) {

	grunt.config('postcss', {
		options: {
			map: {
				inline: false, // save all sourcemaps as separate files...
				annotation: 'dist/_css' // ...to the specified directory
			},
			processors: [
				require('autoprefixer')({
					browsers: [ 'last 3 version', 'ie 9' ]
				})
			]
		},

		dev: {
			files: [{
				src: 'dist/_css/foo.css',
				dest: 'dist/_css/foo.css'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-postcss');
};
