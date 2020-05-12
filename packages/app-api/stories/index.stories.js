import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import PivotFlt from '@family-ui/pivot-flt/src'
import PivotFltMd from './doc/PivotFlt.md'
storiesOf('PivotFlt', module)
  .add('PivotFlt',
    withInfo(
      {
        inline: true,
        text: PivotFltMd
      }
    )(
      () => (  // 这里是另一个 story
        <PivotFlt />
      )
    )
  )