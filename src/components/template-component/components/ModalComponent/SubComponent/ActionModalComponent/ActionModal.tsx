import React, { useState } from "react";

import { Modal, Button } from "antd";
import ContentModal from "./ContentModal";

function ActionModal() {
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

export default ActionModal;

/*import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

ReactDOM.render(<App />, mountNode); */
