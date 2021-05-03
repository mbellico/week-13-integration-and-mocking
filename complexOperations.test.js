import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('not providing a string for email', () => {
      expect(complexOperations.checkEmail(6,8,'F')).toStrictEqual('The email should be a string');
      expect(complexOperations.checkEmail()).toStrictEqual('The email should be a string');
    });
    it('providing a string and not a valid email', () => {
      expect(complexOperations.checkEmail('melisabellico')).toBe('The email is invalid');
      expect(complexOperations.checkEmail('undefined')).toEqual('The email is invalid');
      expect(complexOperations.checkEmail('@')).toBe('The email is invalid');
    });
    it('Providing a valid input', () => {
      expect(complexOperations.checkEmail('melisabellico@gmail.com')).toBe('The email is valid');
    });
  });
    describe('calculateArea', () => {
    it('testing a non-supported figure', () => {
      expect(complexOperations.calculateArea('prism', 3,5)).toBe('${figure} is not supported')
      expect(complexOperations.calculateArea('prism')).toBe('${figure} is not supported')
      expect(complexOperations.calculateArea('',3,2)).toBe('${figure} is not supported')
      expect(complexOperations.calculateArea('undefined')).toBe('${figure} is not supported')
      expect(complexOperations.calculateArea('${figure}', 2, 3)).toBe('${figure} is not supported')
    });
    it('providing invalid imputs for number1 and number2', () => {
      expect(complexOperations.calculateArea('square', 'circle', 3,2)).toBe('number1 and number2 should be numbers')
      expect(complexOperations.calculateArea('rectangle', '', 'undefined')).toBe('number1 and number2 should be numbers')
      expect(complexOperations.calculateArea('rectangle', 'nine', 'nine')).toBe('number1 and number2 should be numbers')
      expect(complexOperations.calculateArea('rectangle', '', '9')).toBe('number1 and number2 should be numbers')
    });
    it('providing valid imputs for number1 and number2', () => {
      expect(complexOperations.calculateArea('square', 9, 9)).toEqual(81)
      expect(complexOperations.calculateArea('square', 0,0)).toEqual(0)
      expect(complexOperations.calculateArea('rectangle', 9)).toBe(0)
      expect(complexOperations.calculateArea('rectangle', 7,5)).toEqual(35)
      expect(complexOperations.calculateArea('triangle', 7,3)).toBeCloseTo(10.5)
      expect(complexOperations.calculateArea('circle', 9)).toBeCloseTo(254.47)
    });
  });
  describe('sumGratherThan', () => {
    it('Not providing numbers for params', () => {
      expect(complexOperations.sumGratherThan('k,m,j')).toBe('The params should be numbers')
      expect(complexOperations.sumGratherThan('1,3,5')).toBe('The params should be numbers')
      expect(complexOperations.sumGratherThan('undefined',2,3)).toBe('The params should be numbers')
      expect(complexOperations.sumGratherThan(123)).toBe('The params should be numbers')
    });
    it('number1 plus number2 should be equal to 70, and greater than number3 ', () => {
      expect(complexOperations.sumGratherThan(50,20, 10)).toBe('70 is grather than 10')
      expect(complexOperations.sumGratherThan(50,20, 100)).not.toBe('70 is grather than 100')
    });
    it('number1 plus number2 should be equal to 70, and lower than number3 ', () => {
      expect(complexOperations.sumGratherThan(50,20, 100)).toBe('70 is less than 100')
      expect(complexOperations.sumGratherThan(50,100, 100)).not.toBe('150 is less than 100')
    });
  });
  describe('intersectionBetweenArrays', () => {
    it('first test for intersectionBetweenArraysNot providing a valid param as array ', () => {
      expect(complexOperations.intersectionBetweenArrays('15, Radium')).toBe('The params should be arrays')
    });
    it('Providing an invalid intersection array', () => {
      expect(complexOperations.intersectionBetweenArrays([], [])).toBe('There are not matching elements')
      expect(complexOperations.intersectionBetweenArrays([undefined], ['Radium'])).toBe('There are not matching elements')
    });
    it('Providing  a valid instersection array', () => {
      expect(complexOperations.intersectionBetweenArrays([1,2,3], [3,4,5,6])).toEqual([3])
      expect(complexOperations.intersectionBetweenArrays(['short', 'skirt', 'jean'], ['trousers', 'jean', 'dress'])).toEqual(['jean'])
      expect(complexOperations.intersectionBetweenArrays(['Sophie', 'Grace', 'Anne', 'John', 'Pierre'], ['Juliet', 'Sophie', 'Marc', 'Pierre'])).toEqual(['Sophie', 'Pierre'])
    });
  });
  describe('sortArrayOfObjectsByKey', () => {
    it('First param should be an array', () => {
      expect(complexOperations.sortArrayOfObjectsByKey('1','RadiumRocket')).toBe('The first param should be an array')
    });
    it('Second param is not a string', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([1,3,5,7],(222))).toBe('The second param should be an string')
    });
    it('elements with no key property', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{nationality: 'Spanish'}, {nationality:'Argentinian'}, {nationality: ''}], 'Age')).toBe('Some elements in the array does not have the ${key} property')
    });
      it('sorting by age and city', () => {
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Rose', age: '25'}, {name:'Peter', age: '50'}], 'age')).toEqual([{name: 'Rose', age: '25'}, {name:'Peter', age: '50'}])
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Peter', age: '42'}, {name:'Lenna', age: '30'}], 'age')).toEqual([{age: '30', name: 'Lenna'}, {age:'42', name: 'Peter'}])
      expect(complexOperations.sortArrayOfObjectsByKey([{country: 'Argentina', city: 'Rosario'}, {country:'Argentina', city: 'Rosario'}], 'city')).toEqual([{country: 'Argentina', city: 'Rosario'}, {country:'Argentina', city: 'Rosario'}])
    });
  });
  describe('numberOfOddAndEvenNumbers', () => {
    it('Not a array', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('8765')).toBe('The param should be an array')
    });
    it('The array should only contain numbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers(['a,b,c,d,e'])).toBe('The array should have only numbers')
    });
    it('Odd numbers array', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([15,13,7,5])).toEqual({even: 0 , odd: 4});
    });
    it('Odd and Even numbers array', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([2,8,4,5])).toEqual({even: 3 , odd: 1});
    });
  });
  });