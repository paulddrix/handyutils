/**
 * @function debug
 * @param {string} title
 * Title to display on the debug output
 * @param {object} obj
 * Object will be displayed in the debug output
 * @example
 * handyutils.debug('The title of what is being tested', { objectToBeTested: true });
 */
exports.debug = (title, obj) => {
  if (process.env.DEBUG) {
    console.log('\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n',
      title,
      '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n',
      obj,
      '\n===========================================\n\n');
  }
};

/**
 * @function debug
 * @param {anydatatype} variable
 * Any data type
 * @example
 * handyutils.isEmpty({ objectToBeTested: true });
 */
exports.isEmpty = (variable) => {
  if (process.env.DEBUG) {
    // if the variable is a string
    if (typeof variable === string) {
      // if the string is empty of underfined
      if (variable === '' || variable === undefined){
        console.log('EMPTY');
        return true;
      } else {
        console.log('NOT EMPTY');
        return false;
      }
    }
  }
};
