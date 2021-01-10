import Foo from './foo';

export const FOO = {
	/** {HTMLElement[]} */
	foos: []
};



/**
 * @returns {void}
 */
FOO.init = function() {
	const that = this,
		/** {NodeList} */
		$foos = document.querySelectorAll('.js-foo-init');

	if ( $foos.length ) {
		$foos.forEach( function( $foo ) {
			that.foos.push( new Foo($foo) );
		});
	}

};
