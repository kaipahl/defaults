#!/usr/bin/env node


let cpy = require('cpy');

/**
 * For some file types it copies the comple folder structure
 * It uses the Glob syntax, known from Grunt.
 *
 * @example ./src/_fonts/foo.woff --> ./public/_fonts/foo.woff
 */
(async () => {
	await cpy(
		[
			'./**/*.{php,html}',
			'./**/*.{ttf,woff}',
			'./**/*.{gif,png,jpg,jpeg,pdf,ico}'
		],
		'../public',
		{
			cwd: './src', // set scope
			parents: true // conserve directory structure
		}
	);
	console.log('Files copied!');
})();
