// import { shallow } from 'enzyme';
// import React from 'react';
//
// import GoogleMaps from './index';
//
// let mapDiv;
// let wrapper;
// let map;
//
// test('GoogleMaps > Renders the correct coords', async () => {
//   mapDiv = {
//     lat: -33.935235899999995,
//     lng: 18.4654275,
//   };
//   wrapper = shallow(<GoogleMaps lon={mapDiv.lon} lat={mapDiv.lat} maps={maps} />);
//   // console.log(wrapper.debug());
//   wrapper.instance().componentDidMount();
//   const expected = 1;
//
//   const actual = wrapper.find('[data-qa="google-map-table-styling"]').length;
//
//   expect(actual).toBe(expected);
// });
