import { configure } from '@storybook/react';

// 批量导入以.stories.js为后缀的文件
const req = require.context('../stories', true, /\.stories\.js$/)
 
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);