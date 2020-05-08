import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button } from '@storybook/react/demo'; // 这里引入你想展示的组件
import button from './doc/button.md'
import PivotFlt from '@family-ui/pivot-flt/src';
import PivotFltMd from './doc/PivotFlt.md'

// storiesOf('Button', module)
//   .add('基本用法',
//     withInfo(`
//       description or documentation about my component, supports markdown

//       ~~~js
//       <Button>测试按钮</Button>
//       ~~~

//     `)(() =>
//       <Button>测试按钮</Button>
//     )
//   )

storiesOf('PivotFlt', module)
  .add('with PivotFlt',
    withInfo(
      {
        inline: true,
        text: PivotFltMd
      }
    )(
      () => (  // 一个 add 表示添加一个 story
        <PivotFlt />
      )
    )
  ); 