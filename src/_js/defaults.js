// Import all needed JS modules
import { HELPERS } from './helpers';
import { STATE } from './state';
import { FOO } from './foo';

/**
 * Using 'load' instead of 'DOMContentLoaded'
 * - DOMContentLoaded --> fires when DOM is ready, but resources still gets loaded
 * - load --> fires when DOM is ready AND all resources are loaded
 */
window.addEventListener('load', function() {
	console.info('defaults: DOM ready, assets loaded');

	onload();
});



/**
 * @description Initialize all our JS modules
 *
 * @returns {void}
 */
function onload() {
	console.info('defaults.onload()');

	HELPERS.init();
	STATE.init();
	FOO.init();
}
