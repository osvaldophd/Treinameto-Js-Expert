const {readFile} = require('fs/promises')
const ErrorContant = require('./constants');

const DEFAULT_OPTIONS = {
  maxLLines: 3,
  fields: ['id', 'name', 'profession', 'age']
}

class File {
  static async csvToJson(filePath) {
    const content = await readFile(filePath, 'utf8')
   const validation =  this.isValid(content)

    if(!validation.valid) throw new Error(validation.error);
  }

  static isValid(csvString, options = DEFAULT_OPTIONS) {
    const [headers, ...fileWithoutHeaders] = csvString.split(/\r?\n/).filter(item => item !== '');

    console.log(headers)
    console.log(fileWithoutHeaders)

    if (!fileWithoutHeaders.length) {
      return {
        error: ErrorContant.FILE_LENGTH_ERROR_MENSAGE,
        valid: false
      }
    }
  }
}

module.exports = File
