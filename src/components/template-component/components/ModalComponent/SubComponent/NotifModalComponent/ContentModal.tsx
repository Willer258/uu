import { Button } from "antd";
import React from "react";
import MaterialIcon from "../../../../../utils-component/MaterialIcon";

function ContentModal(props: any) {
  return (
    <div className="flex flex-col space-y-3">
      <span className="text-xl font-bold border-b-2">Suppression d'un item</span>

      <div className="">
        <div className="flex items-end">
          <MaterialIcon type="done" className="text-green-500 text-2xl" />
          <h3 className="mb-2 space-x-3 ">La suppression a été effectué</h3>
        </div>

        <div className="text-right mt-5">
          <Button type="primary" onClick={() => props.visible(false)}>
            Compris
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ContentModal;
