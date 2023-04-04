import { PassChecker, PassErrors } from "../app/pass_checker";

describe('PassChecker', () => {
  let pass_checker: PassChecker;

  beforeEach(() => {
    pass_checker = new PassChecker();
  });

  test('Should verify pass less than 8 characters to be invalid', () => {
    const actual = pass_checker.verify('1234567');
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PassErrors.SHORT);
  });
  test('Should verify pass more than 8 characters to be valid', () => {
    const actual = pass_checker.verify('Holamundo');
    expect(actual.valid).toBe(true);
  });
  test('Should verify pass not to have an uppercase is invalid', () => {
    const actual = pass_checker.verify('holamundo');
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PassErrors.NO_UPPER_CASE);
  });
  test('Should verify pass to have an uppercase is valid', () => {
    const actual = pass_checker.verify('Holamundo');
    expect(actual.valid).toBe(true);
  });
  test('Should verify pass not to have a lowercase is invalid', () => {
    const actual = pass_checker.verify('HOLAMUNDO');
    console.log(actual)
    expect(actual.valid).toBe(false);
    expect(actual.reasons).toContain(PassErrors.NO_LOWER_CASE);
  });
  test('Should verify pass to have an lowercase is valid', () => {
    const actual = pass_checker.verify('Holamundo');
    expect(actual.valid).toBe(true);
  });
  test('Should verify complex pass to be valid', () => {
    const actual = pass_checker.verify('Holamundo');
    expect(actual.valid).toBe(true);
  });
});