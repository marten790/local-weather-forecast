// import { shallow } from 'enzyme';
// import React from 'react';
//
// import GoogleMaps from './index';
//
// let mapDiv;
// let wrapper;
//
// // beforeAll(() => {
// //
// // });
//
// test('GoogleMaps > Renders the correct coords', async () => {
//   mapDiv = {
//     lat: -33.935235899999995,
//     lng: 18.4654275,
//   };
//   const { maps } = window.google;
//   wrapper = shallow(<GoogleMaps lon={mapDiv.lon} lat={mapDiv.lat} maps={maps} />);
//   await wrapper.instance().componentDidMount().debug();
//
//   const expected = 1;
//
//   const actual = wrapper.find('[data-qa="google-map-table-styling"]').length;
//
//   expect(actual).toBe(expected);
// });
//
// // test('GoogleMaps > Passes through the correct props', () => {
// //   const expected = 1 + unescape('%u2103'); // ℃
// //
// //   const actual = wrapper.find('[data-qa="single-day-weather-data-day"]').at(0).text();
// //
// //   expect(actual).toBe(expected);
// // });
