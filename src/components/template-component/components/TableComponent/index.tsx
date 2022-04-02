import { Card, Table } from "antd";
import React from "react";
import DefaultTable from "./SubComponent/DefaultTableComponent/DefaultTable";
import ExpandTable from "./SubComponent/ExpandTableComponent/ExpandTable";
import MainTable from "./SubComponent/MainTableComponent/MainTable";

function TableComponent() {
  return (
    <div className="container p-4 mx-auto ">
      <div className="flex border-b-2 p-4 items-center justify-between w-full mb-20 flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900  ">
          Listes (Table)
        </h1>
      </div>
      <div className="h-full">
        <div className="flex flex-col space-y-3 w-full  gap-5">
          <Card title="Liste par defaut(DefaultTable) " className="w-full">
            <DefaultTable />
          </Card>
          <Card title="Liste principal (MainTable) " className="w-full">
            <MainTable />
          </Card>

          <Card title="Liste a extensions (ExpandTable) " className="w-full">
            <ExpandTable />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TableComponent;
