import * as React from 'react';
import { render } from '@testing-library/react';
import { HotelCollectionContainer } from './hotel-collection.container';
import { HotelEntityVm } from './hotel-collection.vm';
import * as hotelCollectionHook from './hotel-collection.hook';

describe('HotelCollection component specs', () => {
    it('should display No hotels before to be mounted', () => {
        // Arrange
        
        // Act
        const { queryAllByTestId } = render(<HotelCollectionContainer />);
        const hotelElements = queryAllByTestId('cardHotelDetail');

        // Assert        
        expect(hotelElements).toHaveLength(0);

    });    

    xit('should display No hotels when hotelCollection is undefined', () => {
        // Arrange
        const hotelCollection: HotelEntityVm[] = undefined;
        const loadHotelsHook = jest.fn();
        
        const getStubHook = jest.spyOn(hotelCollectionHook, 'useHotelCollection')
            .mockReturnValue({
                hotelCollection,
                loadHotelCollection: loadHotelsHook
            });

        // Act
        const { queryAllByTestId } = render(<HotelCollectionContainer />);
        const hotelElements = queryAllByTestId('cardHotelDetail');

        // Assert
        expect(getStubHook).toHaveBeenCalled();
        expect(loadHotelsHook).toHaveBeenCalled();

        expect(hotelElements).toHaveLength(0);

    });
    
    xit('should display No hotels when hotelCollection is null', () => {
        // Arrange
        const hotelCollection: HotelEntityVm[] = null;
        const loadHotelsHook = jest.fn();
        
        const getStubHook = jest.spyOn(hotelCollectionHook, 'useHotelCollection')
            .mockReturnValue({
                hotelCollection,
                loadHotelCollection: loadHotelsHook
            });

        // Act
        const { queryAllByTestId } = render(<HotelCollectionContainer />);
        const hotelElements = queryAllByTestId('cardHotelDetail');

        // Assert
        expect(loadHotelsHook).toHaveBeenCalled();
        expect(getStubHook).toHaveBeenCalled();

        expect(hotelElements).toHaveLength(0);

    });
    
    it('should display No hotels when hotelCollection is empty', () => {
        // Arrange
        const hotelCollection: HotelEntityVm[] = [];
        const loadHotelsHook = jest.fn();
        
        const getStubHook = jest.spyOn(hotelCollectionHook, 'useHotelCollection')
            .mockReturnValue({
                hotelCollection,
                loadHotelCollection: loadHotelsHook
            });

        // Act
        const { queryAllByTestId } = render(<HotelCollectionContainer />);
        const hotelElements = queryAllByTestId('cardHotelDetail');

        // Assert
        expect(loadHotelsHook).toHaveBeenCalled();
        expect(getStubHook).toHaveBeenCalled();

        expect(hotelElements).toHaveLength(hotelCollection.length);

    });


    it('should display the hotels in hotel collection', () => {
        // Arrange
        const hotelCollection: HotelEntityVm[] = [
            {
                id: '1',
                name: 'name1',
                picture: 'http://localhost:3000/thumbnails/picture_1.jpg',
                description: 'description 1',
                rating: 1,
                address: 'address 1'
            },
            {
                id: '2',
                name: 'name2',
                picture: 'http://localhost:3000/thumbnails/picture_2.jpg',
                description: 'description 2',
                rating: 2,
                address: 'address 2'
            }
        ] as HotelEntityVm[];
        const loadHotelsHook = jest.fn();

        const getStubHook = jest.spyOn(hotelCollectionHook, 'useHotelCollection')
            .mockReturnValue({
                hotelCollection,
                loadHotelCollection: loadHotelsHook
            });

        // Act
        const { queryAllByTestId, getByText } = render(<HotelCollectionContainer />);
        const hotelElements = queryAllByTestId('cardHotelDetail');
        const hotelElement0 = getByText(hotelCollection[0].name);
        const hotelElement1 = getByText(hotelCollection[1].name);

        // Assert
        expect(getStubHook).toHaveBeenCalled();
        expect(loadHotelsHook).toHaveBeenCalled();

        expect(hotelElements).toHaveLength(hotelCollection.length);

        expect(hotelElement0).not.toBeNull();
        expect(hotelElement0).toBeInTheDocument();
        expect(hotelElement1).not.toBeNull();
        expect(hotelElement1).toBeInTheDocument();

    });


});