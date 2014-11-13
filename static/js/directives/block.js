(function () {

    'use strict';
    
    /**
     * Block directives
     *
     * Blocks ar used in home, folder and dates view
     * to display folder name, dates and file name
     */

    window.app.directive('block', [function () {

        return {
            scope : {

                /**
                 * type
                 *
                 * @type {String}   'dates' or anything else
                 */
                type          : "=",

                /**
                 * message
                 *
                 * Main message. If top and bottom messages,
                 * main message goes in middle
                 *
                 * @type {String}
                 */
                message       : "=",

                /**
                 * messageTop
                 *
                 * @type {String}
                 */
                messageTop    : "=",

                /**
                 * messageBottom
                 *
                 * @type {String}
                 */
                messageBottom : "=",

                /**
                 * forceFile
                 *
                 * If true, the block won't be a square
                 * but with be full-wifth in order to contain a file name
                 *
                 * @type {Boolean}
                 */
                forceFile     : "="

            },
            restrict    : "E",
            templateUrl : 'partials/elements/blocks.html',
            replace     : true
        };

    }]);

}());
