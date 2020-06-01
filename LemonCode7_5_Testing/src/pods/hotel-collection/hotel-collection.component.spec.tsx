import * as React from 'react';
import { render } from '@testing-library/react';
import { HotelCollectionComponent } from './hotel-collection.component';
import { HotelEntityVm } from './hotel-collection.vm';

describe('HotelCollection component specs', () => {
    xit('should display No hotels when hotelCollection is undefined', () => {
        // Arrange
        const hotelCollection: HotelEntityVm[] = undefined;

        // Act
        const { queryAllByTestId } = render(<HotelCollectionComponent hotelCollection={hotelCollection} />);
        const hotelElements = queryAllByTestId('cardHotelDetail');
        
        // Assert
        expect(hotelElements).toHaveLength(0);
    });
    
    xit('should display No hotels when hotelCollection is null', () => {
        // Arrange
        const hotelCollection: HotelEntityVm[] = null;

        // Act
        const { queryAllByTestId } = render(<HotelCollectionComponent hotelCollection={hotelCollection} />);
        const hotelElements = queryAllByTestId('cardHotelDetail');
        
        // Assert
        expect(hotelElements).toHaveLength(0);
    });
    
    it('should display No hotels when hotelCollection is empty', () => {
        // Arrange
        const hotelCollection: HotelEntityVm[] = [] as HotelEntityVm[];

        // Act
        const { queryAllByTestId } = render(<HotelCollectionComponent hotelCollection={hotelCollection} />);
        const hotelElements = queryAllByTestId('cardHotelDetail');
        
        // Assert
        expect(hotelElements).toHaveLength(0);
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

        // Act
        const { queryAllByTestId, getByText } = render(<HotelCollectionComponent hotelCollection={hotelCollection} />);
        const hotelElements = queryAllByTestId('cardHotelDetail');
        const hotel1Element = getByText(hotelCollection[0].name);
        const hotel2Element = getByText(hotelCollection[1].name);

        // Assert
        expect(hotelElements).toHaveLength(hotelCollection.length);

        expect(hotel1Element).not.toBeNull();
        expect(hotel1Element).toBeInTheDocument();

        expect(hotel2Element).not.toBeNull();
        expect(hotel2Element).toBeInTheDocument();
    });
});