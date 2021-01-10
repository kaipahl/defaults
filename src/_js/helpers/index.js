export const HELPERS = {
};



/**
 * @returns {void}
 */
HELPERS.init = function() {
};


/**
 * @description Throttle function, taken from Nicholas C. Zakas
 * https://humanwhocodes.com/blog/2007/11/30/the-throttle-function/
 *
 * @example
 * window.onresize = function(){
 *   throttle(doSomething, window);
 * };
 *
 * window.onresize = function(){
 *   throttle(function(){
 *     doSomething();
 *   }, window);
 * };
 *
 * @param {Function} fn - The function to throttle.
 * @param {number} [delay]
 * @param {Object} [scope]
 */
HELPERS.throttle = function( fn, delay, scope ) {
	delay || (delay = 250);
	let last,
		deferTimer;

	return function () {
		let context = scope || this;

		let now = +new Date,
			args = arguments;
		if (last && now < last + delay) {
			// hold on to it
			clearTimeout(deferTimer);
			deferTimer = setTimeout(function () {
				last = now;
				fn.apply(context, args);
			}, delay);
		} else {
			last = now;
			fn.apply(context, args);
		}
	};

};




/**
 * @description This is a Polyfill for IE11 & Element.closest
 * Like jQuerys closest() it traverses the DOM beginning
 * **with the element himself** !
 *
 * @example $item.closest('.js-select-item');
 *
 */
(function() {
	const ElementPrototype = window.Element.prototype;

	if ( typeof ElementPrototype.closest !== 'function' ) {

		ElementPrototype.closest = function closest(selector) {
			let element = this;
			while (element && element.nodeType === 1) {
				if (element.matches(selector)) {
					return element;
				}
				element = element.parentNode;
			}
			return null;
		};

	}
})();



/**
 *
 * @param {Object.<string, string>} classTable
 * @returns {Object.<string, string>}
 */
HELPERS.classToString = function( classTable ) {
	const stringTable = {};

	// Avoids hasOwnProperty check that has to be used with for...in
	Object.getOwnPropertyNames( classTable ).forEach( function( key ) {
		stringTable[key] = '.' + classTable[key];
	});

	return stringTable;
};



/**
 *
 * @param {string} str
 * @returns {boolean}
 */
HELPERS.isLetterDigitUnderscoreDash = function( str ) {
	const strToTest = str.toString();
	return /^[\w\s-]+$/.test( strToTest );
};



/**
 *
 * @param {string} str
 * @returns {string}
 */
HELPERS.capitalize = function( str ) {
	let /** {string} */
	capitalizedStr = '';

	str = str.toString();

	if( str.length ) {
		capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
	}

	return capitalizedStr;
};
