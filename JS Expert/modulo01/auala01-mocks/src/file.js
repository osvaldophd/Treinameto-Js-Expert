const {readFile} = require('fs/promises')
const ErrorContant = require('./constants');

const DEFAULT_OPTIONS = {
  maxLLines: 3,
  fields: ['id', 'name', 'profession', 'age']
}

class File {
  static async csvToJson(filePath) {
    const content = await readFile(filePath, 'utf8')
    const validation = this.isValid(content)

    if (!validation.valid) throw new Error(validation.error);

    const result = this.csvToJson(content);

    return result
  }

  static isValid(csvString, options = DEFAULT_OPTIONS) {
    const [headers, ...fileWithoutHeaders] = csvString.split(/\r?\n/).filter(item => item !== '');
    const isHadersValid = headers === DEFAULT_OPTIONS.fields.join(',')


    if (!isHadersValid) {
      return {
        error: ErrorContant.FILE_FIELDS_ERROR_MENSAGE,
        valid: false
      }
    }

    if (!fileWithoutHeaders.length || fileWithoutHeaders.length > DEFAULT_OPTIONS.maxLLines) {
      return {
        error: ErrorContant.FILE_LENGTH_ERROR_MENSAGE,
        valid: false
      }
    }

    return {valid: true}

  }

  static perseCSVToJson(csvString) {
    const lines = csvString.split(/\r?\n/).filter(item => item !== '');
    const fistLine = lines.shift();
    const header = fistLine.split(',');

    const users = lines.map(line => {
      const columns = line.split(',')
      const user = {}

      for (const index in columns) {
        user[header[index]] = columns[index].trim()
      }

      return user;
    })

    console.log(users)
    console.log(header)
    return users

  }
}

module.exports = File
