const Service = require('./service');
const assert = require('assert');
const {createSandbox} = require('sinon');
const sinon = createSandbox();

const BASE_URL_1 = 'https://swapi.dev/api/planets/1';
const BASE_URL_2 = 'https://swapi.dev/api/planets/2';
const mocks = {
    alderaan: require('../mocks/alderaan.json'),
    tatooine: require('../mocks/tatooine.json'),
};

;(async () => {
    const stub = sinon.stub(
        Service,
        Service.makeRequest.name
    );
    /*  {
          //vai para internet⁄⁄⁄
       const service = new Service();
       const dados = await service.makeRequest(BASE_URL_2);

       console.log('dados',JSON.stringify(dados));
      }*/
    {
        stub
            .withargs(BASE_URL_1)
            .resolves(mocks.tatooine);
        stub
            .withargs(BASE_URL_2)
            .resolves(mocks.alderaan);

        const expected ={
            name: "Tatooine",
            surfaceWater: "1",
            appeardIn: 5
        }
    }
})();
