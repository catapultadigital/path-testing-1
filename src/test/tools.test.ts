const {
  to_upper_case,
  get_string_info,
  StringTools,
  calc_complexity,
  to_upper_case_with_cb
} = require('../app/tools');

// AAA - Arrange, Act, Assert

describe('Tools test suit', () => {
  test('Should return uppercase', () => {
    const result = to_upper_case('hello world!');
    
    expect(result).toBe('HELLO WORLD!');
  });

  describe('uppercase examples', () => {
    test.each([
      { input: 'abc', expected: 'ABC' },
      { input: 'hOla', expected: 'HOLA' },
    ])('$input to_upper_case should be $expected', ({ input, expected }) => {
      const actual = to_upper_case(input);
      expect(actual).toBe(expected);
    });
  });

  describe('get_string_info for arg My String should', () => {
    const actual = get_string_info('My String');

    test('work the lowercase', () => {
      expect(actual.lower_case).toBe('my string');
    });
    test('work the uppercase', () => {
      expect(actual.upper_case).toBe('MY STRING');
    });
    test('have a correct length', () => {
      expect(actual.length).toBe(9);
      expect(actual.characters).toHaveLength(9);
    });
    test('return info for valid string', () => {
      expect(actual.characters).toEqual(['M', 'y', ' ', 'S', 't', 'r', 'i', 'n', 'g']);
      expect(actual.characters).toContain<string>('M');
    });
    test('have a defined extra info', () => {
      expect(actual.extra_info).toEqual({});
      expect(actual.extra_info).not.toBeUndefined();
    });
  });

  describe('StringTools test', () => {
    let string_tool;

    beforeEach(() => {
      string_tool = new StringTools();
    });

    afterEach(() => {
      // clear mocks
      console.log('Clearing');
    });

    test('Should return a correct uppercase', () => {
      const actual = string_tool.to_upper_case('abc');
      expect(actual).toBe('ABC');
    });
    test('Should throw error on invalid argument', () => {
      const expect_error = () => {
        string_tool.to_upper_case('');
      };
      expect(expect_error).toThrow();
      expect(expect_error).toThrowError('Invalid argument');
    });
    test('Should throw error on invalid argument - try catch block', () => {
      try {
        string_tool.to_upper_case('');
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid argument');
      }
    });
  });

  describe('Other tools', () => {
    test('Calculate complexity', () => {
      const info = {
        length: 5,
        extra_info: {
          field1: 'test1',
          field2: 'test2',
        }
      };
      const actual = calc_complexity(info as any);
      expect(actual).toBe(10)
    }) ;
    test('To uppercase - callback with invalid argument', () => {
      const actual = to_upper_case_with_cb('', () => {});
      expect(actual).toBeUndefined();
    });
    test('To uppercase - callback with valid argument', () => {
      const actual = to_upper_case_with_cb('abc', () => {});
      expect(actual).toBe('ABC');
    });
  });
});