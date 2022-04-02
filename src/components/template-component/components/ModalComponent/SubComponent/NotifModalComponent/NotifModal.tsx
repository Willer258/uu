import { Button, Modal } from "antd";
import React, { useState } from "react";
import ContentModal from "./ContentModal";

function NotifModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        closable={false}
      >
        <div className="p-5">
          {<ContentModal visible={(item: any) => setIsModalVisible(item)} />}
        </div>
      </Modal>
    </>
  );
}

export default NotifModal;
