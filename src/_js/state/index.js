const HELPERS = require('../helpers').HELPERS;

export const STATE = {
	viewport: ''
};


/**
 * @returns {void}
 */
STATE.init = function() {
	const that = this;

	that.viewport = that.getViewport();

	// Generic throttled resize
	window.addEventListener('resize', HELPERS.throttle( function() {
		window.dispatchEvent( new CustomEvent('foo:resize'));
	}, 250 ).bind(that));

	// Generic throttled scroll
	window.addEventListener('scroll', HELPERS.throttle( function() {
		window.dispatchEvent( new CustomEvent('foo:scroll'));
	}, 250 ).bind(that));

	window.addEventListener('foo:resize', function() {
		if ( that.viewport !== that.getViewport() ) {
			that.viewport = that.getViewport();
			window.dispatchEvent( new CustomEvent('foo:viewportChanged', { detail: that.viewport }));
		}

	});

};



/**
 * @description Returns the keyword for the actual viewport size
 * Binding between browser width and viewport-keyword happens via CSS,
 * in the _base.elements.scss on the BODY::before selector.
 *
 * @returns {string} - 'mobile', 'tablet', 'desktop'
 */
STATE.getViewport = function() {
	let viewport = window.getComputedStyle( document.body, ':before' ).content;
	viewport = viewport.replace(/"/gi, '');
	return viewport;
};


/**
 * @description Touch device detection
 * Somewhat problematic topic with many edge cases. Many old methods try detection
 * via ontouchstart or ongesturestart. This doesnt work (true on desktop chrome).
 *
 * Important: going towards any-hover instead of hover. The later checks only
 * the capability of the *primary* pointer device!
 *
 * More infos:
 * - http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
 * - https://stackoverflow.com/questions/7838680/detecting-that-the-browser-has-no-mouse-and-is-touch-only/52854585#answer-52854585
 * - https://dev.opera.com/articles/media-features/
 * - Test example for matchMedia: https://patrickhlauke.github.io/touch/pointer-hover-any-pointer-any-hover/
 *
 * @returns {boolean}
 */
STATE.isTouchDevice = function() {
	return window.matchMedia('(any-pointer: coarse)').matches;
};


/**
 * @description IE11 detection
 *
 * There is an undocumented bug in the IE11 implementation of TreeWalker
 * when using for text nodes instead of element nodes. Infos can only be
 * found in a Github repo https://github.com/webcomponents/webcomponentsjs/issues/556
 *
 * That bugs stops the running of JS of modules initialized after NOBR.
 *
 * @returns {boolean}
 */
STATE.isIE11 = function() {
	return (!!window.MSInputMethodContext) && (!!document.documentMode);
};



/**
 * @description Returns language and region
 * If no arguments, get the <HTML>-lang attribute
 *
 * @param {string} [localeStr] - 'de', 'de-DE'
 * @returns {{{language: string, region: string}}}
 */
STATE.getLocale = function( localeStr ) {
	const locale = {
		language: 'en',
		region: 'DE'
	};
	let /** {Array} */
	localeArr;

	if ( typeof localeStr === 'undefined' ) {
		localeStr = document.documentElement.lang;
	}

	localeArr = localeStr.split('-');

	if( localeArr && localeArr.length === 2 ) {
		if ( localeArr[0] !== '' ) {
			locale.language = localeArr[0].toLowerCase();
		}
		if ( localeArr[1] !== '' ) {
			locale.region = localeArr[1].toUpperCase();
		}
	}

	return locale;
};



/**
 * @description Checks accessibility setting
 * MacOS: System prefs -> Accessibility -> Display -> "Reduce motion" for all
 * browsers.
 * Windows: Settings > Ease of Access > Display > Show animations in Windows
 *
 * @returns {boolean}
 */
STATE.hasUserDisabledMotion = function() {
	return window.matchMedia('(prefers-reduced-motion)').matches;
};



/**
 *
 * @param {string} cookieName
 * @returns {string|null}
 */
STATE.getCookie = function( cookieName ) {
	const /** {RegExpMatchArr} */
	matchedCookieStr = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');

	return (matchedCookieStr) ? matchedCookieStr[2].toString() : null;
};


/**
 *
 * @param {string} cookieName
 * @param {string} value
 */
STATE.setCookie = function( cookieName, value ) {
	console.log('setCookie', cookieName, value);
	const /** {string} */
		cookiePath = 'path=/',
		/** {Date} */
		date = new Date(),
		/** {number} */
		days = 365 * 24 * 60 * 60 * 1000;

	let /** {string} */ expiryStr;

	date.setTime(date.getTime() + days);
	expiryStr = 'expires=' + date;

	document.cookie = cookieName + '=' + value.toString() + ';' + expiryStr + ';' + cookiePath;
};
