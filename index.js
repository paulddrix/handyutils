const fs = require('fs');
class HandyUtils {
  constructor(logDirPath) {
    this.logsDir = logDirPath;
  }
  /**
   * @function debug
   * @param {string} title
   * Title to display on the debug output
   * @param {anydatatype} anydatatype
   * anydatatype will be displayed in the debug output
   * @example
   * handyutils.debug('The title of what is being tested', { objectToBeTested: true });
   */
  static debug(title, anydatatype=''){
    if (process.env.DEBUG) {
      console.log('\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n',
        title,
        '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n',
        anydatatype,
        '\n===========================================\n\n');
    }
  }
  /**
   * @function isEmpty
   * @param {anydatatype} variable
   * Any data type
   * @example
   * handyutils.isEmpty({ objectToBeTested: true });
   */
  static isEmpty(variable){
    if (process.env.DEBUG) {
      switch (variable) {
        case typeof variable === string:
        // if the string is empty or underfined
        if (variable === '' || variable === undefined){
          console.log('String is empty');
          return true;
          break;
        } else {
          console.log('String is not empty');
          return false;
          break;
        }
        case typeof variable === object:
        // if the object is empty or underfined
          for(var key in variable) {
            if(variable.hasOwnProperty(key))
                return false;
                break;
            }
          return true;
          break;
          case typeof variable === array:
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
   static debugNLog(title, anydatatype='', logType){
     let output = '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';
     output += title;
     output += '\n=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n';
     output += anydatatype;
     output += '\n===========================================\n\n';
     if (process.env.DEBUG) {
       console.log(output);
     } else if(process.env.LOG_MODE) {
       fs.writeFile(`${logType}.txt`, output, 'utf8', (err)=>{
         if (err) throw err;
       });
     }
   }
}
module.exports = HandyUtils;
