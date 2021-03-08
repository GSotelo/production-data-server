/**
 * Wrap function: Catches rejected promises and 
 * calls next() with the error as the first argument
 */
const wrapper = fn => (...args) => fn(...args).catch(args[2]);

module.exports = wrapper;