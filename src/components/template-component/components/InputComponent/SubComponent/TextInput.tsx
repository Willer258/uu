import React from "react";
import { Form, Input } from "antd";

interface TextInputProps {
  initialValue?: any;
  label: string;
  name: string;
  maxLength?: number;
  placeholder?: any;
  rules?: any;
  stateForm?: string | number | undefined;
  type: string;
}
function TextInput({
  initialValue,
  label,
  name,
  rules,
  maxLength,
  stateForm,
  placeholder,
  type,
}: TextInputProps) {
  return stateForm !== undefined ? (
    <Form.Item label={label} name={name} initialValue={initialValue}>
      <Input maxLength={maxLength} />
    </Form.Item>
  ) : (
    <Form.Item label={label} name={name} rules={rules}>
      <Input maxLength={maxLength} type={type} placeholder={placeholder} />
    </Form.Item>
  );
}

export default TextInput;
