/** ====== SCSS ======
 *  - libsass/nodesass
 */

/* Not ready for production */

module.exports = function (grunt) {
	grunt.config('sass', {

		test: {
			options: {
				style: 'expanded',
				debugInfo: false,
				sourceMap: true
			},
			files: [{
				src: 'source/_scss/foo.scss',
				dest: 'public/_css/foo.css'
			}]
		}

	});

	grunt.loadNpmTasks('grunt-sass');
};
