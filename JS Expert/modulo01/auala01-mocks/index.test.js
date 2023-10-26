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
  {
    const filePath = './mocks/invalid-header.csv'
    const expected = new Error(ErrorContant.FILE_FIELDS_ERROR_MENSAGE)
    const result = File.csvToJson(filePath)

    await assert.rejects(result, expected);
  }
  {
    const filePath = './mocks/fiveitems-invalid.csv'
    const expected = new Error(ErrorContant.FILE_LENGTH_ERROR_MENSAGE)
    const result = File.csvToJson(filePath)

    await assert.rejects(result, expected);
  }
  {
    const filePath = './mocks/treetems-valid.csv'
    const expected = [{
      id: 1,
      name: 'Osvaldo Avelino',
      profission: 'developer',
      age: 35
    },
      {
        id: 2,
        name: 'Aldair Avelino',
        profission: 'student',
        age: 19
      },
      {
        id: 3,
        name: 'Dominga Avelino',
        profission: 'norse',
        age: 31
      }
    ]

   const result = await File.csvToJson(filePath)

   //  assert.deepEqual(result, expected);
  }
})()
