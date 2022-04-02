import { Button, Table } from "antd";
import React from "react";
import { fakelist1 } from "../../../../../../utils/fake-data/list-test";
import MaterialIcon from "../../../../../utils-component/MaterialIcon";
import { ExpandTableColumns } from "./table-config";
import ViewExpand from "./ViewExpand";

function ExpandTable() {
  return (
    <div>
      {" "}
      <Table
        columns={ExpandTableColumns}
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
        expandable={{
          expandedRowRender: (record) => (
            <ViewExpand location={record.address} company={record.company} />
          ),
          expandIcon: ({ expanded, onExpand, record }) =>
            !expanded ? (
              <Button
                className="text-black flex items-center"
                onClick={(e) => onExpand(record, e)}
                type="link"
              >
                Etendre <MaterialIcon type="expand_more" />
              </Button>
            ) : (
              <Button
                className="text-black flex items-center"
                onClick={(e) => onExpand(record, e)}
                type="link"
              >
                Fermer <MaterialIcon type="expand_less" />
              </Button>
            ),
        }}
        expandIconColumnIndex={3}
      />
    </div>
  );
}
export default ExpandTable;
