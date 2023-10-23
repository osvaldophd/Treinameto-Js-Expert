const Error = require('./src/constants')
const File = require('./src/file')
const assert = require('assert:node')
//IFEE
;(async () => {
  //variavel criada neste bloco só são valido neste bloco
  {
    const filePath = './mocks/emptyFile-invalid'
    const expected = new Error(error.FILE_LENGTH_ERROR_MENSAGE)
    const result = File.csvToJson(filePath)

   // await assert.rejects(result, expected);

  }

});
