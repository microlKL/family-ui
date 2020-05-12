import React from 'react'
import { storiesOf } from '@storybook/react'
import {withKnobs, object, array, text} from '@storybook/addon-knobs';
// import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'
import TableFlt from '@family-ui/table-flt/src'
import TableFltMd from './doc/TableFltMd.md'

const propParams = {
  // rowNormalBgColor 行背景色
  rowNormalBgColor: `${text('行背景色', 'rgba(223, 230, 233,0.2)', '行属性')}`,
  // rowHoverColor 鼠标悬浮时的行背景色
  rowHoverColor: `${text('鼠标悬浮时的行背景色', 'rgba(116, 185, 255,0.2)', '行属性')}`,
  // rowFocusedColor 行被选中(获取焦点)时的行背景色
  rowFocusedColor: `${text('行被选中(获取焦点)时的行背景色', 'rgba(253, 167, 223,0.2)', '行属性')}`,
}
export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

storiesOf('数据表格相关', module)
// .addDecorator(withSmartKnobs) // 在 withKnobs 前引用
.addDecorator(withKnobs)
  .add('TableFlt',
    withInfo(
      {
        inline: true,
        text: TableFltMd
      }
    )(
      () => {
        return <TableFlt {...propParams}/>
      }
    )
  )