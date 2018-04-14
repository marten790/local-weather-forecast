import { shallow } from 'enzyme';
import React from 'react';

import DayInfo from './index';

let weatherDataArray;
let wrapper;

beforeAll(() => {
  weatherDataArray = [{
    dt: 1,
    temp: { day: 1, max: 9, min: 8 },
  }, {
    dt: 2,
    temp: { day: 2, max: 10, min: 8 },
  }];

  wrapper = shallow(<DayInfo weatherDataArray={weatherDataArray} />);
});

test('DayInfo > Renders the correct amount of days info', () => {
  const expected = 2;

  const actual = wrapper.find('[data-qa="single-day-weather-data"]').length;

  expect(actual).toBe(expected);
});

test('DayInfo > Passes through the correct props', () => {
  const expected = 1 + unescape('%u2103'); // ℃

  const actual = wrapper.find('[data-qa="single-day-weather-data-day"]').at(0).text();

  expect(actual).toBe(expected);
});
