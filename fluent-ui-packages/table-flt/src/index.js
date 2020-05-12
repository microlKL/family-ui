import React from "react"
import { initializeIcons } from '@uifabric/icons'
import { createListItems } from "@uifabric/example-data"
import { Link } from "office-ui-fabric-react/lib/Link"
import { Image, ImageFit } from "office-ui-fabric-react/lib/Image"
import {
  DetailsList,
  buildColumns,
  DetailsRow,
} from "office-ui-fabric-react/lib/DetailsList"
import { mergeStyles } from "office-ui-fabric-react/lib/Styling"
import CheckRow from "./CheckRow"

initializeIcons()

import styled from 'styled-components'

const DetailsListWrapper = styled.div`
  width: 100%;
  height: 50vh;
  overflow: auto;
`

const FocusedRow = styled.div`
    > .focused-row{
        background: ${props => (props.rowNormalBgColor || 'rgba(223, 230, 233,0.2)')};
    }
    > .focused-row:hover{
        background: ${props => (props.rowHoverColor || 'rgba(116, 185, 255,0.2)')};
    }
    > .focused-row:focus{
        background: ${props => (props.rowFocusedColor || 'rgba(253, 167, 223,0.2)')};
    }
`

export default class TableFlt extends React.Component {
  // #region ====== props ========

  // rowNormalBgColor 行背景色
  // rowHoverColor 鼠标悬浮时的行背景色
  // rowFocusedColor 行被选中(获取焦点)时的行背景色

  // #endregion
  constructor(props) {
    super(props);

    const items = createListItems(500);
    this.state = {
      sortedItems: items,
      columns: _buildColumns(items),
    };
  }

  render() {
    const { sortedItems, columns } = this.state;
    return (
      <DetailsListWrapper>
        <DetailsList
          items={sortedItems}
          setKey="set"
          columns={columns}
          onRenderItemColumn={_renderItemColumn}
          onColumnHeaderClick={this._onColumnClick}
          onItemInvoked={_onItemInvoked}
          onColumnHeaderContextMenu={_onColumnHeaderContextMenu}
          onRenderRow={this._onRenderRow}
          ariaLabelForSelectionColumn="Toggle selection"
          ariaLabelForSelectAllCheckbox="Toggle selection for all items"
          checkButtonAriaLabel="Row checkbox"
        // styles={{
        //     subComponentStyles: {
        //       menuItem: {
        //         root: { check: { '&:hover': { backgroundColor: '#98dad2' } } }
        //       }
        //     }
        //   }}
        ></DetailsList>
      </DetailsListWrapper>
    );
  }

  _onRenderRow = (rowProps) => {
    const rowPropParams = {
      // rowNormalBgColor 行背景色
      rowNormalBgColor: this.props.rowNormalBgColor,
      // rowHoverColor 鼠标悬浮时的行背景色
      rowHoverColor: this.props.rowHoverColor,
      // rowFocusedColor 行被选中(获取焦点)时的行背景色
      rowFocusedColor: this.props.rowFocusedColor,
    }

    const _onRenderCheck = (rowProps) => {
      return <CheckRow selected={rowProps.selected}></CheckRow>;
    }

    console.log('this.props.rowNormalBgColor = ', this.props.rowNormalBgColor)

    return (
      <FocusedRow {...rowPropParams}>
        <DetailsRow
          className="focused-row"
          {...rowProps}
          onRenderCheck={_onRenderCheck}
        // styles={{
        //   root: {
        //     backgroundColor: "rgba(253, 167, 223,0.2)"
        //   }
        // }}
        />
      </FocusedRow>
    )
  }

  _onColumnClick = (event, column) => {
    const { columns } = this.state;
    let { sortedItems } = this.state;
    let isSortedDescending = column.isSortedDescending;

    // If we've sorted this column, flip it.
    if (column.isSorted) {
      isSortedDescending = !isSortedDescending;
    }

    // Sort the items.
    sortedItems = _copyAndSort(sortedItems, column.fieldName, isSortedDescending);

    // Reset the items and columns to match the state.
    this.setState({
      sortedItems: sortedItems,
      columns: columns.map((col) => {
        col.isSorted = col.key === column.key;

        if (col.isSorted) {
          col.isSortedDescending = isSortedDescending;
        }

        return col;
      }),
    });
  };
}

function _onColumnHeaderContextMenu(column, ev) {
  //   console.log(`column ${column.key} contextmenu opened.`);
}

function _onItemInvoked(item, index) {
  alert(`Item ${item.name} at index ${index} has been invoked.`);
}

function _buildColumns(items) {
  const columns = buildColumns(items);

  const thumbnailColumn = columns.filter(
    (column) => column.name === "thumbnail"
  )[0];

  // Special case one column's definition.
  thumbnailColumn.name = "image";
  thumbnailColumn.maxWidth = 50;
  thumbnailColumn.ariaLabel = "Thumbnail";

  return columns;
}

function _renderItemColumn(item, index, column) {
  const fieldContent = item[column.fieldName];

  switch (column.key) {
    case "thumbnail":
      return (
        <Image
          src={fieldContent}
          width={50}
          height={50}
          imageFit={ImageFit.cover}
        />
      );

    case "name":
      return <Link href="#">{fieldContent}</Link>;

    case "color":
      return (
        <span
          data-selection-disabled={true}
          className={mergeStyles({
            color: fieldContent,
            height: "100%",
            display: "block",
          })}
        >
          {fieldContent}
        </span>
      );

    default:
      return <span>{fieldContent}</span>;
  }
}

function _copyAndSort(items, columnKey, isSortedDescending) {
  const key = columnKey;
  return items
    .slice(0)
    .sort((a, b) =>
      (isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1
    );
}
