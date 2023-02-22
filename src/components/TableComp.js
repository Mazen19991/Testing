import { Table } from 'antd';
import ApiService from '../utils/ApiCalls';
import React, { useEffect, useState } from 'react';

const TableComp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const apiCall = await ApiService.getPosts();
      setData(apiCall.data);
    })();
  }, []);

  const columns = [
    {
      title: 'User Id',
      dataIndex: 'userId',
    },
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Body',
      dataIndex: 'body',
    },
  ];

  return (
    <>
      {data && data.length > 0 ? (
        <Table columns={columns} dataSource={data} rowKey={'id'} />
      ) : (
        <>No Data</>
      )}
    </>
  );
};

export default TableComp;
