
import { mapToCollection } from './collection.mapper';

describe('collection.mapper specs', () => {

    it('should return empty array when it feeds undefined', () => {
        //Arrange
        const array = undefined;

        //Act
        const result = mapToCollection(array, (a: number): number => a);
        
        //Assert
        expect(result).toEqual([]);
    })


    it('should return empty array when it feeds null', () => {
        //Arrange
        const array = null;

        //Act
        const result = mapToCollection(array, (a: number): number => a);
        
        //Assert
        expect(result).toEqual([]);
    })

    it('should return empty array when it feed an empty array', () => {
        //Arrange
        const array = [];

        //Act
        const result = mapToCollection(array, (a: number): number => a);
        
        //Assert
        expect(result).toEqual([]);
    })
    
    it('should return mapped array when it feed an array', () => {
        //Arrange
        const array: number[] = [2, 3, 4];

        //Act
        const result = mapToCollection(array, (a: number): string => a.toString());
        
        //Assert
        expect(result.length).toEqual(array.length);
        expect(result).toEqual(['2', '3', '4']);
    })

})