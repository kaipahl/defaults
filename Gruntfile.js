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
        '- Konvertiert SCSS in CSS im dist-Verzeichnis\n- Läst Autoprefixer drüber laufen\n',
        function( target ) {
            if ( target === 'dev') {
                grunt.task.run('sass:dev');
                grunt.task.run('postcss:dev');
            } else {
                grunt.task.run('clean:css');
                grunt.task.run('sass:dist');
                grunt.task.run('postcss:dist');
            }
        }
    );


	grunt.registerTask('buildAll',
		'Baut/Kopiert das Projekt einmal durch\n', [
			'buildCss'
		]
	);

};

