import SM2Algorithm from './SM2Algorithm'; // ajuste o caminho conforme sua estrutura

describe('SM2Algorithm', () => {
  let sm2;

  beforeEach(() => {
    sm2 = new SM2Algorithm();
  });

  test('should increase repetitions and calculate correct interval and easeFactor for quality >= 3 and repetitions 0', () => {
    const result = sm2.calc(3, 0, 0, 2.5);
    expect(result).toEqual({
      interval: 1,
      repetitions: 1,
      easeFactor: 2.5 + (0.1 - (5 - 3) * (0.08 + (5 - 3) * 0.02)),
    });
  });

  test('should set repetitions to 0, interval to 1 and maintain easeFactor when quality < 3', () => {
    const result = sm2.calc(2, 3, 6, 2.5);
    expect(result).toEqual({
      interval: 1,
      repetitions: 0,
      easeFactor: 2.5,
    });
  });

  test('should calculate correct interval for quality >= 3 and repetitions > 1', () => {
    const result = sm2.calc(4, 2, 6, 2.5);
    expect(result).toEqual({
      interval: Math.round(6 * 2.5),
      repetitions: 3,
      easeFactor: 2.5 + (0.1 - (5 - 4) * (0.08 + (5 - 4) * 0.02)),
    });
  });

  test('should limit easeFactor to 1.3 if calculated easeFactor is lower', () => {
    const result = sm2.calc(1, 5, 10, 1.0);
    expect(result).toEqual({
      interval: 1,
      repetitions: 0,
      easeFactor: 1.3, // limited to 1.3
    });
  });
});
