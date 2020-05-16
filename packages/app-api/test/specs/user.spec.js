/**
 * 前端自动化测试研究感叹
 * 【实在是实力不足，不研究了，以后再说吧，哎，智力有限啊，源码看不懂，官方文档又难看，网络资料又少，哎】
*/
import React from 'react';
import Form from '../../src/components/Form';
import { mount } from '../enzyme';
// import { shallow } from '../enzyme';

// describe('Form component test', () => {

//   it('render Form', () => {
//     const wrapper = shallow(
//       <Form />
//     );
//     expect(wrapper.find('h3').length).toBe(1);
//   });

// })


describe('user Links component test', () => {

  it('render links', () => {
    const wrapper = mount(
      <Form />
    );
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
  });

  it('# onChange ()', () => {
    const wrapper = mount(
      <Form />
    );
    wrapper.find('input').simulate('focus');
    wrapper.find('input').simulate('change', { target: { value: '13' } });
    wrapper.find('input').simulate('change', { target: { value: '1378' } });
    expect(wrapper.find('.js-error').length).toBe(1);
  });

  it('# reset prop', () => {
    const foo = {
      count: 0,
      setBar() {
        this.count ++;
      }
    };

    spyOn(foo, 'setBar');
    const wrapper = mount(
      <Form
        reset={foo.setBar}
      />
    );
    wrapper.find('button').simulate('click');
    // expect(foo.setBar).toHaveBeenCalled();
  });

})