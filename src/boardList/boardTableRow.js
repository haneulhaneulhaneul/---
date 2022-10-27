import React from 'react';

const BoardTableRow = ({ children }) => {
  return (
    <tr className="board-table-row">
      {
        children
      }
    </tr>
  )
}

export default BoardTableRow;