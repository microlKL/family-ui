import React from 'react';
import {Button} from 'antd';
import PivotEx from '@family-ui/ui-pivot';

export default function ButtonEx(){
    return (
        <div>
            <PivotEx />
            <Button type='danger'>ant button</Button>
        </div>
    )
}