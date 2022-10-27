import React, { useEffect, useState } from 'react';
import axios from 'axios';

import BoardTable from './boardTable';
import BoardTableColumn from './boardTableColumn';
import BoardTableRow from './boardTableRow';

function GetData() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('').then((response)=> {
      setData(response.data);
    })
  }, []);

  const item = (Object.values(data)).map((item) => (
    <BoardTableRow key={item.id}>
      <BoardTableColumn>{item.id}</BoardTableColumn>
      <BoardTableColumn>{item.title}</BoardTableColumn>
      <BoardTableColumn>{item.createAt}</BoardTableColumn>
      <BoardTableColumn>{item.username}</BoardTableColumn>
    </BoardTableRow>
  ));

  return item;
}

function BoardVoc() {
  const item = GetData();

  return (<>
    <BoardTable headersName={['글번호', '제목', '등록일', '작성자']}>
      {item}
    </BoardTable>
  </>);
}
  
export default BoardVoc;