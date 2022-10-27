import React from 'react';
import './boardTable.css';

const BoardTable = props => {
  const { headersName, children } = props;

  return (
    <table className="board-table">
      <thead>
        <tr>
          {
            headersName.map((item, index) => {
              return (
                <td className="board-table-header-column" key={index}>{ item }</td>
              )
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          children
        }
      </tbody>
    </table>
  )
}

export default BoardTable;