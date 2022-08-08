const { getOpeningHours } = require('../src/getOpeningHours');

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
