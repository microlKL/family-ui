import React from 'react';
import {Button} from 'antd';
import NavFlt from '@family-ui/nav-flt/lib';
import PivotFlt from '@family-ui/pivot-flt/src';

export default function ButtonEx(){
    return (
        <div>
            <NavFlt />
            <PivotFlt />
            <Button type='danger'>ant button</Button>
        </div>
    )
}