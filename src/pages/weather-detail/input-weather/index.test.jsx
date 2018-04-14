import { mount } from 'enzyme';
import React from 'react';

import GetDays from './index';
//
// test('GetDays > loads default classnames for wrapper', () => {
//   const wrapper = mount(<GetDays />);
//   const expected = wrapper.props().find('input-group');
//   // const actual = wrapper.props().className;
//   expect(expected).toHaveLength(1);
// });

const context = { days: undefined };
const wrapper = mount(<GetDays />, { context });
expect(wrapper.text()).to.equal(undefined);
wrapper.setContext({ days: 4 });
expect(wrapper.text()).to.equal(4);
wrapper.setContext({ days: 'baz' });
expect(wrapper.text()).to.equal('baz');
