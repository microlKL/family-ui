import TableFlt from '@family-ui/table-flt/src'

export default function TableFltApi() {
    const propParams = {
        // rowNormalBgColor 行背景色
        rowNormalBgColor: 'rgba(223, 230, 233,0.2)',
        // rowHoverColor 鼠标悬浮时的行背景色
        rowHoverColor: 'rgba(116, 185, 255,0.2)',
        // rowFocusedColor 行被选中(获取焦点)时的行背景色
        rowFocusedColor: 'rgba(253, 167, 223,0.2)',
      }

    return(
        <TableFlt {...propParams}/>
        // <div>xxx</div>
    )
}