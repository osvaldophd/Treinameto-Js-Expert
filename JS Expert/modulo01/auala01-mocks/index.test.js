const ErrorContant = require('./src/constants');
const File = require('./src/file');
const assert = require('assert');

// IIFE
;(async () => {
  // Variáveis criadas neste bloco só são válidas neste bloco
  {
    const filePath = './mocks/emptyFile-invalid.csv'
   const expected = new Error(ErrorContant.FILE_LENGTH_ERROR_MENSAGE)
    const result = File.csvToJson(filePath)

    await assert.rejects(result, expected);
  }
})()
