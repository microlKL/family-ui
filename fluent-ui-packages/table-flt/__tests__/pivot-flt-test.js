
// import AppApi from '../src/index'
import React from 'react';
import renderer from 'react-test-renderer';

import TableFlt from '../src/index';

describe('@family-ui/app-api/Counter', () => {
    test('snapshot renders', () => {
        const component = renderer.create(<TableFlt />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});