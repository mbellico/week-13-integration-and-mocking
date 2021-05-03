import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';

describe('Mocked complexOperation', () => {
  describe('checkEmail', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    })
    it('not providing a string for email', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
      expect(complexOperations.checkEmail(6,8,'F')).toStrictEqual('The email should be a string');
      expect(complexOperations.checkEmail()).toStrictEqual('The email should be a string');
      expect('isString').toBeCalled;
      expect('validateEmail').toBeCalled;
    });
    it('providing an empty string as input', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
      expect(complexOperations.checkEmail()).toStrictEqual('The email should be a string');
    });
    it('mocked to be true (valid), when providing a string and not a valid email', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
      expect(complexOperations.checkEmail('melisabellico')).toBe('The email is valid');
    });
    it('The email is invalid', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(false);
      expect(complexOperations.checkEmail('@')).toBe('The email is invalid');
      expect(complexOperations.checkEmail('melisabellico@gmail.com')).toBe('The email is invalid');
    });
    it('The email is valid', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(true);
      expect(complexOperations.checkEmail('melisabellico@gmail.com')).toBe('The email is valid');
      expect(complexOperations.checkEmail('undefined')).toBe('The email is valid');
    });
  });
    describe('calculateArea', () => {
      beforeEach(() => {
        jest.restoreAllMocks();
      })
    it('testing a non-supported figure', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(false);
      expect(complexOperations.calculateArea('prism')).toBe('${figure} is not supported')
      expect(complexOperations.calculateArea('prism', 3,5)).toBe('${figure} is not supported')
      expect(complexOperations.calculateArea('',3,2)).toBe('${figure} is not supported')
      expect(complexOperations.calculateArea('undefined')).toBe('${figure} is not supported')
      expect(complexOperations.calculateArea('${figure}', 2, 3)).toBe('${figure} is not supported')
    });
    it('providing invalid imputs for number1 and number2', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.calculateArea('rectangle', '', 'undefined')).toBe('number1 and number2 should be numbers')
      expect(complexOperations.calculateArea('rectangle', 'nine', 'nine')).toBe('number1 and number2 should be numbers')
    });
    it('providing valid imputs for number1 and number2, with mocked values', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'multip').mockReturnValue(50);
      jest.spyOn(basicOperations, 'division').mockReturnValue(4);
      jest.spyOn(basicOperations, 'exponent').mockReturnValue(2);
      expect(complexOperations.calculateArea('square', 9, 9)).toEqual(50)
      expect(complexOperations.calculateArea('rectangle', 7,5)).toEqual(50)
      expect(complexOperations.calculateArea('triangle', 7,3)).toBe(4)
      expect(complexOperations.calculateArea('circle', 9)).toBeCloseTo(6.2831)
      expect('isSupportedFigure').toBeCalled;
      expect('isNumber').toBeCalled;
    });
  });
  describe('sumGratherThan', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    })
    it('Letters for params', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan('k,m,j')).toBe('The params should be numbers')
      expect('isNumber').toBeCalled;
    });
    it('undefined value for number1, plus number2 and number3', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.sumGratherThan('undefined', 2,3)).toBe('The params should be numbers')
      expect('isNumber').toBeCalled;
    });
    it('number1 plus number2 should be equal to 70, and greater than number3, mocked to return 100 ', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sum').mockReturnValue(100);
      expect(complexOperations.sumGratherThan(50,20, 10)).toBe('100 is grather than 10')
      expect('isNumber').toBeCalled;
    });
    it('number1 plus number2 should be equal to 70, and lower than number3, mocked to return 100 ', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sum').mockReturnValue(100);
      expect(complexOperations.sumGratherThan(50,20, 150)).toBe('100 is less than 150')
      expect('isNumber').toBeCalled;
    });
  });
  describe('intersectionBetweenArrays', () => {
      beforeEach(() => {
      jest.restoreAllMocks();
    })
    it('first test for intersectionBetweenArraysNot providing a valid param as array ', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.intersectionBetweenArrays('15, Radium')).toBe('The params should be arrays')
      expect('isArray').toBeCalled;
    });
    it('Providing an empty intersection array', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue(false);
      expect(complexOperations.intersectionBetweenArrays([], [])).toStrictEqual(false)
      expect('isArray').toBeCalled;
    });
    it('Providing undefined values', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue('There are not matching elements');
      expect(complexOperations.intersectionBetweenArrays([undefined], ['Radium'])).toBe('There are not matching elements')
      expect('isArray').toBeCalled;
    });
    it('Providing  a valid instersection array, mocked to return 15', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue(15);
      expect(complexOperations.intersectionBetweenArrays([1,2,3], [3,4,5,6])).toEqual(15)
      expect('isArray').toBeCalled;
    });
  });
  describe('sortArrayOfObjectsByKey', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    })
    it('First param should be an array', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey('1','RadiumRocket')).toBe('The first param should be an array')
      expect('isArray').toBeCalled;
    });
    it('Second param is not a string', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey([1,3,5,7],(222))).toBe('The second param should be an string')
      expect('isArray').toBeCalled;
      expect('isString').toBeCalled;
    });
    it('sorting by name', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      let name = ['Peter', 'John', 'Rose'];
      let age = 'they are in their twenties';
      expect(complexOperations.sortArrayOfObjectsByKey([name], age)).toBe('The first param should be an array')
    });
    it('elements with no key property', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey([{nationality: 'Spanish'}, {nationality:'Argentinian'}, {nationality: ''}], 'Age')).toBe('Some elements in the array does not have the ${key} property')
    });
    it('sorting by age', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(true);
      jest.spyOn(basicOperations, 'arrayElementsAreObjectWithKey').mockReturnValue(true);
      jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue([{name: 'Peter', age: '40'}]);
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Rose', age: '25'}, {name:'Peter', age: '50'}], 'age')).toEqual([{name:'Peter', age: '40'}])
    });
    it('sorting by age mocked to return false, when is in fact true', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false);
      expect(complexOperations.sortArrayOfObjectsByKey([{name: 'Rose', age: '25'}], 'age')).toEqual('The first param should be an array')
    });
  });
  describe('numberOfOddAndEvenNumbers', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    })
    it('Not a array', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers('8765')).toBe('The param should be an array')
    });
    it('The array should only contain numbers', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers(['a,b,c,d,e'])).toBe('The array should have only numbers')
    });
    it('The array should only contain numbers', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers(['a,b,c,d,e'])).toStrictEqual('The array should have only numbers')
    });
    it('Odd numbers array', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      expect(complexOperations.numberOfOddAndEvenNumbers([15,13,7,5])).toEqual({even: 0 , odd: 4});
    });
    it('Odd numbers array mocked to return false', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false);
      expect(complexOperations.numberOfOddAndEvenNumbers([15,13,7,5])).toEqual('The param should be an array');
    });
    it('Odd numbers array mocked', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      jest.spyOn(basicOperations, 'getOddNumbersFromArray').mockReturnValue([1,3]);
      jest.spyOn(basicOperations, 'getEvenNumbersFromArray').mockReturnValue([2,4]);
      expect(complexOperations.numberOfOddAndEvenNumbers([15,13,7,5])).toEqual({even: 2 , odd: 2});
    });
    it('Odd and Even numbers array', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      expect(complexOperations.numberOfOddAndEvenNumbers([2,8,4,5])).toEqual({even: 3 , odd: 1});
    });
    it('Even numbers array', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(true);
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(true);
      expect(complexOperations.numberOfOddAndEvenNumbers([2,8,4,20])).toEqual({even: 4 , odd: 0});
    });
  });
});