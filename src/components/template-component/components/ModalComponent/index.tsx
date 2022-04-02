import { Card } from "antd";
import React from "react";
import ActionModal from "./SubComponent/ActionModalComponent/ActionModal";
import FormModal from "./SubComponent/FormModalComponent/FormModal";
import NotifModal from "./SubComponent/NotifModalComponent/NotifModal";

function ModalComponent() {
  return (
    <div className="container p-4 mx-auto ">
      <div className="flex border-b-2 p-4 items-center justify-between w-full mb-20 flex-wrap">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900  ">
          Modal
        </h1>
      </div>
      <div className="h-full">
        <div className="place-content-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full  gap-5">
          <Card title="Modal d'action (ActionModal) " className="w-full">
            <ActionModal />
          </Card>

          <Card title="Modal pour formulaire (FormModal) " className="w-full">
            {" "}
            <FormModal />
          </Card>
          <Card title="Modal de notification (NotifModal) " className="w-full">
            <NotifModal />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
