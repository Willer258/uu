import { Table } from "antd";
import React from "react";
import { fakelist1 } from "../../../../../../utils/fake-data/list-test";
import { MainTableColumns } from "./table-config";

function MainTable() {
  return (
    <div>
      {" "}
      <Table
        columns={MainTableColumns}
        dataSource={fakelist1}
        rowKey="id"
        footer={() => (
          <div style={{ textAlign: "left" }}>
            <b>Total :</b> {fakelist1.length + " items"}
          </div>
        )}
        pagination={{
          pageSize: 10,

          showSizeChanger: false,
        }}
        rowSelection={{}}
      />
    </div>
  );
}

export default MainTable;
