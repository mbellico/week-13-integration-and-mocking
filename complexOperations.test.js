import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('providing a string and not a valid email', () => {
      expect(complexOperations.checkEmail('melisabellico')).toBe('The email is invalid');
    });
    it('Providing a valid input', () => {
      expect(complexOperations.checkEmail('melisabellico@gmail.com')).toBe('The email is valid');
    });
  });
    describe('calculateArea', () => {
    it('first test for calculateArea', () => {
    });
  });
  describe('sumGratherThan', () => {
    it('first test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan('k,m,j')).toBe('The params should be numbers')
    });
  });
  describe('intersectionBetweenArrays', () => {
    it('first test for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays('15')).toBe('The params should be arrays')
    });
  });
  describe('sortArrayOfObjectsByKey', () => {
    it('First param is not an array', () => {
      expect(complexOperations.sortArrayOfObjectsByKey('1','RadiumRocket')).toBe('The first param should be an array')
    });
    it('First param is not an array', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([1,3,5,7], 222)).toBe('The second param should be an string')
    });
  });
  describe('numberOfOddAndEvenNumbers', () => {
    it('Not a array', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('8765')).toBe('The param should be an array')
    });
    it('Odd numbers array', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([15,13,7,5])).toEqual({even: 0 , odd: 4});
    });
    it('Odd and Even numbers array', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([2,8,4,5])).toEqual({even: 3 , odd: 1});
    });
  });
})