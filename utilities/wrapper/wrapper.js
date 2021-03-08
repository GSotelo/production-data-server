/**
 * Wrap function: Catches rejected promises and 
 * calls next() with the error as the first argument
 */
const wrapper = fn => (...args) => fn(...args).cath(args[2]);

module.exports = wrapper;