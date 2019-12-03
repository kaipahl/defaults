#!/usr/bin/env node

let fs = require('fs');
let sass = require('sass');

let outFile = 'dist/_css/foo.css';

let result = sass.renderSync({
	file: 'src/_scss/foo.scss',
	outFile: outFile,
	sourceMap: true, // or an absolute or relative (to outFile) path,
	sourceMapEmbed: true,
	outputStyle: 'compressed',
	indentType: 'tab'
});

fs.writeFile( outFile, result.css, function(err){
	if(!err){
		console.log('--> File written @', outFile);
	} else {
		console.log('scss ERROR:', err);
	}
});
