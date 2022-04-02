import { Button } from "antd";
import React from "react";
import MaterialIcon from "../../../../../utils-component/MaterialIcon";

function ContentModal(props: any) {
  return (
    <div className="flex flex-col space-y-3">
      <span className="text-xl font-bold border-b-2">Suppression d'un item</span>

      <div className="">
        <div className="flex items-end">
          <MaterialIcon type="warning" className="text-yellow-500 text-2xl" />
          <h3 className="mb-2 space-x-3 ">
            La suppression est irreversible vous etes sur de votre choix
          </h3>
        </div>

        <div className=" space-x-3 text-right mt-5">
          <Button type="text" onClick={() => props.visible(false)}>
            Annuler
          </Button>{" "}
          <Button onClick={() => props.visible(false)}>Confirmer</Button>
        </div>
      </div>
    </div>
  );
}

export default ContentModal;
