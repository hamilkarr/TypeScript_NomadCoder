"use strict";
// @ts-check
Object.defineProperty(exports, "__esModule", { value: true });
exports.exit = exports.init = void 0;
/**
 * Initializes the package with the given configuration.
 * @param {object} config - The configuration object.
 * @returns {boolean} - Returns true if the initialization is successful, otherwise false.
 */
function init(config) {
    return true;
}
exports.init = init;
/**
 * Exits the program with the specified code.
 * @param {number} code - The exit code.
 * @returns {number} - The exit code plus one.
 */
function exit(code) {
    return code + 1;
}
exports.exit = exit;
