// const { default: test } = require('test');
// const { describe, default: test } = require('test');
const {
  isStringRepresentNumber,
  validateAbbreviation,
  validateHour,
  validateDay,
  empty,
  fix12,
  openOrClosed,
  getOpeningHours,
} = require('../src/getOpeningHours');

const notNumberString = 'Abloogie-Woogie-Woo';
describe('Testes as funções auxiliares de openingHours', () => {
  test('isStringRepresentNumber deve retornar um error se o string não for um número', () => {
    expect(() => {
      isStringRepresentNumber(notNumberString, 'minutes');
    }).toThrow();
  });

  test('validateAbbreviation retorna um erro se a abreviação não for AM ou PM', () => {
    expect(() => {
      validateAbbreviation(notNumberString);
    }).toThrow();
  });

  test('validateHour deve validar a hora corretamente', () => {
    expect(() => {
      validateHour('13:00');
    }).toThrow();
    expect(() => {
      validateHour('12:66');
    }).toThrow();
  });

  test('validateHour deve retornar erro se os valores não estiverem no intervalo aceitável', () => {
    expect(() => {
      validateHour('13:00-AM');
    }).toThrow();
    expect(() => {
      validateHour('11:60-PM');
    }).toThrow();
  });
  test('validateDay deve lançar um erro se o dia não for válido', () => {
    expect(() => {
      validateDay(notNumberString);
    }).toThrow();
  });
  test('empty returns true if empty', () => {
    expect(empty()).toBeTruthy();
  });
  test('fix12 returns all zeroes if the parameters are strictly equal to 12', () => {
    expect(fix12(12, 12, 12)).toEqual({ h: 0, o: 0, c: 0 });
  });
  test('openOrClosed return true if the period equal AM or PM and the hour is above/equal to opening time and less than closing time', () => {
    expect(openOrClosed('AM', 8, 6, 10)).toBeTruthy();
    expect(openOrClosed('PM', 6, 8, 10)).toBeTruthy();
    expect(openOrClosed('DM', 6, 8, 10)).toBeFalsy();
    expect(openOrClosed('AM', 6, 8, 10)).toBeFalsy();
    expect(openOrClosed('PM', 11, 8, 10)).toBeFalsy();
  });
});

describe('Testes da função openingHours principal', () => {
  test('Sem parâmetros, retorna todas as horas', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  test('Retorna erro se o dia ou a hora não forem válidos', () => {
    expect(() => {
      getOpeningHours(notNumberString, '10:00-AM');
    }).toThrow();
    expect(() => {
      getOpeningHours('Tuesday', '17:00-PM');
    }).toThrow();
    expect(() => {
      getOpeningHours('Tuesday', '10:69-PM');
    }).toThrow();
  });

  test('Retorna "The zoo is closed" se for uma segunda ou domingo', () => {
    expect(getOpeningHours('Monday', '10:00-AM')).toBe('The zoo is closed');
  });

  test('Retorna a mensagem correta de acordo com o dia e o horário', () => {
    expect(getOpeningHours('Tuesday', '5:00-AM')).toBe('The zoo is closed');
    expect(getOpeningHours('Tuesday', '9:00-AM')).toBe('The zoo is open');
  });
});
