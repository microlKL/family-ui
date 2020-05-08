import React from 'react'
import { Label } from 'office-ui-fabric-react/lib/Label'
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot'
import { initializeIcons } from '@uifabric/icons'
initializeIcons()

const labelStyles = {
    root: { marginTop: 10 },
}

export default function PivotFlt() {
    const pages = [{
        name: 'FluentUI官方API模仿页',
        icon: 'Favicon',
        content: 'FluentUI官方API模仿页'
    }, {
        name: 'CKEditor AI富文本案例',
        icon: 'Favicon',
        content: 'CKEditor AI富文本案例'
    }, {
        name: 'class组件',
        icon: 'Emoji2',
        content: 'CKEditor AI富文本案例'
    }, {
        name: 'hooks组件',
        icon: 'WebAppBuilderFragmentCreate',
        content: 'hooks组件'
    }]

    return (
        <Pivot aria-label="Count and Icon Pivot Example">
            {pages.map(item =>
                <PivotItem key={item.name} headerText={item.name} itemCount={42} itemIcon={item.icon}>
                    {/* <Label styles={labelStyles}>{item.content}</Label> */}
                    {item.content}
                </PivotItem>
            )}
        </Pivot>
    )
}