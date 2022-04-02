import React from "react";
import { Form, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

interface PhotoInputProps {
  defaultValue?: any;
  label: string;
  count?: number;
  action?: any;
  name: string;
  placeholder?: string;
  rules?: any;
  stateForm?: string | number | undefined;
}
function PhotoInput({
  defaultValue,
  label,
  count,
  name,
  rules,
  stateForm,
  placeholder,
}: PhotoInputProps) {
  const props = {
    name: "file",
    accept: ".jpeg, .png",
    multiple: false,
    headers: {
      authorization: "authorization-text",
    },
    beforeUpload: () => {
      return false;
    },
  };
  return stateForm !== undefined ? (
    <Form.Item label={label} name={name} valuePropName={name}>
      <Upload
        listType="picture-card"
        defaultFileList={[
          {
            uid: "1",
            name: `${defaultValue == null ? "Aucune photo" : ""}`,
            thumbUrl: `${defaultValue == null ? "" : defaultValue}`,
            status: "done",
          },
        ]}
        {...props}
        maxCount={count}
      >
        <UploadOutlined />
        {placeholder}
      </Upload>
    </Form.Item>
  ) : (
    <Form.Item label={label} name={name} rules={rules} valuePropName={name}>
      <Upload listType="picture-card" {...props} maxCount={count}>
        <span className="mr-1">
          <UploadOutlined />
        </span>{" "}
        {placeholder}
      </Upload>
    </Form.Item>
  );
}

export default PhotoInput;
