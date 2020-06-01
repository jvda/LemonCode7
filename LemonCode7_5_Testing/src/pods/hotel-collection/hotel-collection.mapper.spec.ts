import { mapFromApiToVm } from './hotel-collection.mapper'
//import { basePicturesUrl } from 'core';
import * as apiModel from './hotel-collection.api';
import * as viewModel from './hotel-collection.vm';

const basePicturesPathTest = 'basePicturesPathTest';

jest.mock('core', () => {
  return {
    basePicturesUrl: 'basePicturesPathTest'
  }
});

describe('hotel-collection.mapper specs', () => {

  it('should return null when it feeds undefined', () => {
    // Arrange
    const hotel: apiModel.HotelEntityApi = undefined;

    // Act
    const result: viewModel.HotelEntityVm = mapFromApiToVm(hotel);

    // Assert
    expect(result).toEqual(null);
  });

  it('should return null when it feeds null', () => {
    // Arrange
    const hotel: apiModel.HotelEntityApi = null;

    // Act
    const result: viewModel.HotelEntityVm = mapFromApiToVm(hotel);

    // Assert
    expect(result).toEqual(null);
  });

  it('should return mapped item when it feed an item', () => {
    // Arrange    
    const hotel: apiModel.HotelEntityApi = {
      id: "0248058a-27e4-11e6-ace6-a9876eff01b3",
      name: "Motif Seattle",
      address1: "1415 5th Ave",
      hotelRating: 4,
      shortDescription: "With a stay at Motif Seattle, you will be centrally located in Seattle, steps from 5th Avenue Theater and minutes from Pike Place Market. This 4-star hotel is within",
      thumbNailUrl: "/thumbnails/50947_264_t.jpg"
    } as apiModel.HotelEntityApi;
    
    // Act
    const result: viewModel.HotelEntityVm = mapFromApiToVm(hotel);

    // Assert
    expect(result).toEqual({
      id: "0248058a-27e4-11e6-ace6-a9876eff01b3",
      picture: `${basePicturesPathTest}/thumbnails/50947_264_t.jpg`,
      name: 'Motif Seattle',
      description: "With a stay at Motif Seattle, you will be centrally located in Seattle, steps from 5th Avenue Theater and minutes from Pike Place Market. This 4-star hotel is within",
      rating: 4,
      address: "1415 5th Ave"
    });
  });
});
