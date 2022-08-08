const handlerElephants = require('../src/handlerElephants');

describe('Testa a função handlerElephants principal', () => {
  test('Sem handlerElephants não tiver um parâmetro, retorna undefined', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  test('Retorna mensagem de erro quando o parâmetro não é uma string', () => {
    const noString = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(1224345)).toBe(noString);
    expect(handlerElephants(['abloogie', 'woogie', 'woo'])).toBe(noString);
    expect(handlerElephants({ abloogie: 'woogie' })).toBe(noString);
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

  test('handlerElephants retorna a quantidade correta dos elefantes no zoológico', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  test('handlerElephants retorna um array com o nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual([
      'Ilana',
      'Orval',
      'Bea',
      'Jefferson',
    ]);
  });

  test('handlerElephants retorna a média correta das idades dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });

  test('handlerElephants retorna nulo quando não há parâmetros corretos', () => {
    expect(handlerElephants('bullshit')).toBeNull();
  });
});
