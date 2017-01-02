'use strict';
/* global module: false */

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function (grunt) {

    require('time-grunt')(grunt);

    grunt.loadTasks('_grunt');




    /** =======================
     * 	Tasks
     */


	grunt.registerTask('buildCss',
		'- Konvertiert SCSS in CSS im dist-Verzeichnis\n- Läst Autoprefixer früber laufen\n', [
			'sass:dev',
			'postcss:dev'
		]
	);


	grunt.registerTask('buildAll',
		'Baut/Kopiert das Projekt einmal durch\n', [
			'buildCss'
		]
	);

};
