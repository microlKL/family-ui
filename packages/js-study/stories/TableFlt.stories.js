import React from 'react'
import { storiesOf } from '@storybook/react'
import {withKnobs, object, array, text} from '@storybook/addon-knobs';
// import { withSmartKnobs } from 'storybook-addon-smart-knobs'
import { withInfo } from '@storybook/addon-info'
// import { action } from '@storybook/addon-actions'
import TableFltApi from '../src/components/TableFltApi'
import TableFltMd from './doc/TableFltMd.md'

// export const actions = {
//   onPinTask: action('onPinTask'),
//   onArchiveTask: action('onArchiveTask'),
// };

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
        return <TableFltApi />
      }
    )
  )