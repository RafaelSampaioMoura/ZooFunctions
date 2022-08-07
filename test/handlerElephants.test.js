// const { default: test } = require('test');
// const { default: test } = require('test');
// const { default: test } = require('test');
const {
  handlerElephants,
  getElephants,
  averageAge,
  computeData,
} = require('../src/handlerElephants');

const elephantsId = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';

const theElephants = {
  id: elephantsId,
  name: 'elephants',
  popularity: 5,
  location: 'NW',
  availability: ['Friday', 'Saturday', 'Sunday', 'Tuesday'],
  residents: [
    {
      name: 'Ilana',
      sex: 'female',
      age: 11,
    },
    {
      name: 'Orval',
      sex: 'male',
      age: 15,
    },
    {
      name: 'Bea',
      sex: 'female',
      age: 12,
    },
    {
      name: 'Jefferson',
      sex: 'male',
      age: 4,
    },
  ],
};
describe('Testes das funções auxiliares de HandlerElephants', () => {
  test('"getElephants retorna a espécie "elephants', () => {
    expect(getElephants()).toEqual(theElephants);
  });

  test('"averageAge" retorna a média correta das idades dos elefantes', () => {
    expect(averageAge({ residents: theElephants.residents })).toBe(10.5);
  });

  test('"computeData" retorna a quantidade correta dos elefantes no zoológico', () => {
    expect(computeData('count', theElephants)).toBe(4);
  });

  test('"computeData" retorna um array com o nomes dos elefantes', () => {
    expect(computeData('names', theElephants)).toEqual([
      'Ilana',
      'Orval',
      'Bea',
      'Jefferson',
    ]);
  });

  test('"computeData" retorna a média correta das idades dos elefantes', () => {
    expect(computeData('averageAge', theElephants)).toBe(10.5);
  });

  test('"computeData" retorna nulo quando não há parâmetros corretos', () => {
    expect(computeData('bullshit', theElephants)).toBeNull();
  });
});

describe('Testa a função handlerElephants principal', () => {
  test('Sem handlerElephants não tiver um parâmetro, retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  test('Retorna mensagem de erro quando o parâmetro não é uma string', () => {
    const noString = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(1224345)).toBe(
      noString,
    );
    expect(handlerElephants(['abloogie', 'woogie', 'woo'])).toBe(
      noString,
    );
    expect(handlerElephants({ abloogie: 'woogie' })).toBe(
      noString,
    );
  });

  test('Retorna a informação correta', () => {
    expect(handlerElephants('id')).toBe('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
    expect(handlerElephants('name')).toBe('elephants');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('availability')).toEqual([
      'Friday',
      'Saturday',
      'Sunday',
      'Tuesday',
    ]);
    expect(handlerElephants('residents')).toEqual([
      {
        name: 'Ilana',
        sex: 'female',
        age: 11,
      },
      {
        name: 'Orval',
        sex: 'male',
        age: 15,
      },
      {
        name: 'Bea',
        sex: 'female',
        age: 12,
      },
      {
        name: 'Jefferson',
        sex: 'male',
        age: 4,
      },
    ]);
  });

  test('"handlerElephants" retorna a quantidade correta dos elefantes no zoológico', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  test('"handlerElephants" retorna um array com o nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual([
      'Ilana',
      'Orval',
      'Bea',
      'Jefferson',
    ]);
  });

  test('"handlerElephants" retorna a média correta das idades dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  test('"handlerElephants" retorna nulo quando não há parâmetros corretos', () => {
    expect(handlerElephants('bullshit')).toBeNull();
  });
});
