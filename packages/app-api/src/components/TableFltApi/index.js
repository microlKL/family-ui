// import TableFlt from '@family-ui/table-flt/src'

// export default function TableFltApi() {
//     const propParams = {
//         // rowNormalBgColor 行背景色
//         rowNormalBgColor: 'rgba(223, 230, 233,0.2)',
//         // rowHoverColor 鼠标悬浮时的行背景色
//         rowHoverColor: 'rgba(116, 185, 255,0.2)',
//         // rowFocusedColor 行被选中(获取焦点)时的行背景色
//         rowFocusedColor: 'rgba(253, 167, 223,0.2)',
//       }

//     return(
//         <TableFlt {...propParams}/>
//         // <div>xxx</div>
//     )
// }

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Links extends Component {

  render() {
    return (
      <div>
        <aside>
          <h4>Categories</h4>
          <ul>
            <li><Link to="/start">Start</Link></li>
            <li><Link to="/how">How</Link></li>
            <li><Link to="/guide">Guide</Link></li>
          </ul>
        </aside>
      </div>
    );
  }
}


export default Links