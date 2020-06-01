
import { renderHook, act } from '@testing-library/react-hooks';
import { useHotelCollection } from './hotel-collection.hook';
import * as HotelCollectionAPI from './hotel-collection.api';
import * as Mappers from 'common/mappers';
import { HotelEntityVm } from './hotel-collection.vm';
import * as Mapper from './hotel-collection.mapper';

describe('hotel-collection hook tests', () => {

    it('Initial value empty array', () => {
        // Arrange

        // Act
        const { result } = renderHook(() => useHotelCollection());

        // Assert
        expect(result.current.hotelCollection).toEqual([]);
    });

    it('Load hotels return hotels and render hotels', async () => {
        // Arrange
        const hotelMapped: HotelEntityVm[] = [
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

        const getStubApi = jest.spyOn(HotelCollectionAPI, 'getHotelCollection').mockResolvedValue([{}] as HotelCollectionAPI.HotelEntityApi[]);
        const getStubMapper = jest.spyOn(Mappers, 'mapToCollection').mockReturnValue(hotelMapped);
        const getStubMapFromApi = jest.spyOn(Mapper, 'mapFromApiToVm').mockReturnValue({} as HotelEntityVm);

        // Act        
        const { result } = renderHook(() => useHotelCollection());

        await act(async () => {
            result.current.loadHotelCollection();
        });
      
        // Assert
        expect(getStubApi).toBeCalled();
        expect(getStubMapper).toHaveBeenCalled();
        expect(result.current.hotelCollection).toEqual(hotelMapped);

    });

});
