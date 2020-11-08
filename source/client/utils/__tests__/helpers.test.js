import { currentYear, isNameExists, removeDuplicateOfString, isFindEqualsObject } from '../helpers';

describe('client/utils:', () => {
    test('currentYear function should be a function', () => {
        expect(currentYear).toBeInstanceOf(Function);
    });

    test('should return current year', () => {
        expect(currentYear()).toBe(__.year);
    });

    test('removeDuplicateOfString function should be a function', () => {
        expect(removeDuplicateOfString).toBeInstanceOf(Function);
    });

    test('removeDuplicateOfString function should throw, when called with non-string type as arguments', () => {
        expect(() => removeDuplicateOfString(5)).toThrow();
    });

    test('isFindEqualsObject function should be a function', () => {
        expect(isFindEqualsObject).toBeInstanceOf(Function);
    });

    test('isFindEqualsObject function should throw, when called with non-array type as first arguments', () => {
        expect(() => isFindEqualsObject('movies', __.movie, 'format')).toThrow();
    });

    test('isFindEqualsObject function should throw, when called with non-object type as second arguments', () => {
        expect(() => isFindEqualsObject(__.movies, 'targetObject', 'format')).toThrow();
    });

    test('isFindEqualsObject function should throw, when called with non-string type as third arguments', () => {
        expect(() => isFindEqualsObject(__.movies, __.movie, ['format'])).toThrow();
    });

    test('isFindEqualsObject function should return boolean value', () => {
        expect(typeof isFindEqualsObject(__.movies, __.movie, 'format')).toBe('boolean');
    });

    test('isNameExists function should be a function', () => {
        expect(isNameExists).toBeInstanceOf(Function);
    });

    test('isNameExists function should throw, when called with non-string type as first arguments', () => {
        expect(() => isNameExists(5, 'targetObject')).toThrow();
    });

    test('isNameExists function should throw, when called with non-string type as second arguments', () => {
        expect(() => isNameExists('str', 5)).toThrow();
    });

    test('isNameExists function should return boolean value', () => {
        expect(typeof isNameExists('some string', 'some string')).toBe('boolean');
    });
})

