module.exports = Foo;

/**
 * @param {HTMLElement} $root
 * @constructor
 */
function Foo( $root ) {
	console.info('Foo.constructor(%o)', $root);

	this.$root = $root;
	this.cssClass = {
	};
	this.cssStr = {
	};

	this.bindEvents( $root );

}


/**
 *
 * @param {HTMLElement} $root
 * @returns {void}
 */
Foo.prototype.bindEvents = function( $root ) {
	console.info('Foo.bindEvents(%o)', $root);
};

