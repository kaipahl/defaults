/** ====== SCSS ======
 *  - libsass/nodesass
 */

module.exports = function (grunt) {
	grunt.config('sass', {

		dev: {
			options: {
				outputStyle: 'expanded',
				debugInfo: false,
				sourceMap: true
			},
			files: [{
				src: 'source/_scss/foo.scss',
				dest: 'dist/_css/foo.css'
			}]
		},
        dist: {
            options: {
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
