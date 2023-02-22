import { Table } from "antd";
import React, { useEffect, useState } from "react";
import ApiService from "../utils/ApiCalls";

const TableComp = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      if (data.length === 0 && loading === true) {
        const apiCall = await ApiService.getPosts();
        setData(apiCall.data);
        setLoading(false);
      }
    })();
    return setLoading(false);
  }, []);
  console.log("data", data);

  const columns = [
    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      key: "body",
      dataIndex: "body",
    },
  ];
  return (
    <>
      {/* {data && data.length === 0 ? (
        <Table columns={columns} dataSource={data} />
      ) : (
        <>No Data</>
      )} */}
      {data &&
        data.lenght > 0 &&
        data.map((element) => {
          return <h1> whatever</h1>;
        })}
    </>
  );
};

export default TableComp;
