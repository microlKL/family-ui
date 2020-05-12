import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button } from '@storybook/react/demo'; // 这里引入你想展示的组件
import button from './doc/button.md';

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

storiesOf('Button', module)
  .add('with some emoji',
    withInfo(
      {
        inline: true,
        text: button
      }
    )(
      () => (  // 这里是另一个 story
        <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
      )
    )
  ); 