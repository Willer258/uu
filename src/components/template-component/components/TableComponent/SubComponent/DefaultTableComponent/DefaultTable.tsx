import { Table } from "antd";
import React from "react";
import { fakelist1 } from "../../../../../../utils/fake-data/list-test";
import { DefaultTableColumns } from "./table-config";

function DefaultTable() {
  return (
    <div>
      {" "}
      <Table
        columns={DefaultTableColumns}
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
      />
    </div>
  );
}

export default DefaultTable;
