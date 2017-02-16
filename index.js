const fs = require('fs');

/**
 * @function debug
 * @param {string} title
 * Title to display on the debug output
 * @param {anydatatype} anydatatype
 * anydatatype will be displayed in the debug output
 * @example
 * handyutils.debug('The title of what is being tested', { objectToBeTested: true });
 */
exports.debug = (title, anydatatype='') => {
  if (process.env.DEBUG) {
    let output = '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';
    output += title;
    output += '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';
    output += anydatatype;
    output += '\n===========================================\n\n';
    console.log(output);
  }
}
/**
 * @function isEmpty
 * @param {anydatatype} variable
 * Any data type
 * @example
 * handyutils.isEmpty({ objectToBeTested: true });
 */
exports.isEmpty = (variable) => {
  if (process.env.DEBUG) {
    console.log('DEBUG is set');
    console.log();
    switch (typeof variable) {
      case 'string':
      console.log('it is a string');
      // if the string is empty or underfined
      if (variable === '' || variable === undefined){
        return true;
        break;
      } else {
        return false;
        break;
      }
      case 'object':
      console.log('it is an object');
      // if the object is empty or underfined
        for(var key in variable) {
          if(variable.hasOwnProperty(key))
              return false;
              break;
          }
        return true;
        break;
        case 'array':
        console.log('it is an array');
        // if the array is empty or underfined
        if (variable.length ===0 || variable === undefined) {
          return true;
          break;
        } else {
          return false;
          break;
        }
    }
  }
}
/**
 * @function debugNLog
 * @param {anydatatype} variable
 * Any data type
 * @example
 * handyutils.debugNLog('debugging and logging to file',{ objectToBeTested: true });
 */
 exports.debugNLog = (title, anydatatype='', logType) => {
   let logPath = './logs'
   let output = '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';
   output += title;
   output += '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';
   output += anydatatype;
   output += '\n===========================================\n\n';
   if (process.env.DEBUG) {
     console.log(output);
   }
   if(process.env.LOG_MODE) {
     fs.writeFile(`${logPath}/${logType}.txt`, output, 'utf8', (err)=>{
       if (err) throw err;
     });
   }
 }
