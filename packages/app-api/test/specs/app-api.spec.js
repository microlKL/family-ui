import React from 'react';
import TableFltApi from '../../src/components/TableFltApi';
import { shallow } from '../enzyme';


describe('Links component test', () => {

  it('render links', () => {
    const wrapper = shallow(
      <TableFltApi />
    );
    expect(wrapper);
  });

})