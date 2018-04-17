import { shallow } from 'enzyme';
import React from 'react';
import GetDays from './component';

let wrapper;
let days;
const onInputChange = jest.fn();
const onFormSubmit = jest.fn();

beforeAll(() => {
  wrapper = shallow(<GetDays
    onInputChange={onInputChange}
    onFormSubmit={onFormSubmit}
    days={days}
  />);
});

test('GetDays > has form wrapper', () => {
  const expected = 1;
  const actual = wrapper.find('[data-qa="submit-action"]').length;

  expect(actual).toBe(expected);
});

test('GetDays > has form input', () => {
  const expected = 1;
  const actual = wrapper.find('[data-qa="input-days-submit"]').length;

  expect(actual).toBe(expected);
});
