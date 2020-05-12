import React, { PureComponent } from 'react';
import { mount, ReactWrapper, render } from 'enzyme';
import YearPicker from '..';

import moment from 'moment';

class YearPickerDemo extends React.Component {
  state = {
    cleared: false,
    value: moment().format('YYYY'),
  };

  render() {
    return (
      <YearPicker
        showTime
        format="YYYY"
        onChange={this.onChange}
        defaultValue={moment('2015/01/01', 'YYYY')}
      />
    );
  }
}

describe('DatePicker', () => {
  it('default value', () => {
    const wrapper = mount(<YearPickerDemo/>);
    expect(wrapper.find('.ant-calendar-picker-input').getDOMNode().value).toBe('2015');
  });

  it('clear value', () => {
    const wrapper = mount(<YearPickerDemo/>);
    wrapper.find('.ant-calendar-picker-clear').hostNodes().simulate('click');
    expect(wrapper.find('.ant-calendar-picker-input').getDOMNode().value).toBe('');
  });

  it('set value in calendar', () => {
    const wrapper = mount(<YearPickerDemo/>);
    wrapper.find('.ant-calendar-picker-input').simulate('click');
    const triggerWrapper = mount(wrapper.find('Trigger').instance().getComponent());
    triggerWrapper.find('[title="2018"]').simulate('click');
    expect(wrapper.find('.ant-calendar-picker-input').getDOMNode().value).toBe('2018');
  });
});
