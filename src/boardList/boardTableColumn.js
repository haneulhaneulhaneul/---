import React from 'react';

const BoardTableColumn = ({ children }) => {
  return (
    <td className="board-table-column">
      {
        children
      }
    </td>
  )
}

export default BoardTableColumn;