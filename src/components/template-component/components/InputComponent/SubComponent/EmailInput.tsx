import { Form, AutoComplete } from "antd";
import { useState } from "react";

interface EmailInputProps {
  initialValue?: any;
  label: string;
  name: string;
  maxLength?: number;
  placeholder?: any;
  rules?: any;
  stateForm?: string | number | undefined;
  type: string;
}

function EmailInput({
  initialValue,
  label,
  name,
  maxLength,
  rules,
  stateForm,
  placeholder,
}: EmailInputProps) {
  const { Option } = AutoComplete;
  const [result, setResult] = useState<string[]>([]);
  const handleSearch = (value: string) => {
    let res: string[] = [];
    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = [
        "gmail.com",
        "yahoo.com",
        "hotmail.com",
        "outlook.com",
        "msn.com",
      ].map((domain) => `${value}@${domain}`);
    }
    setResult(res);
  };
  return stateForm !== undefined ? (
    <Form.Item label={label} name={name} initialValue={initialValue}>
      <AutoComplete maxLength={maxLength} onSearch={handleSearch}>
        {result.map((email: string) => (
          <Option key={email} value={email}>
            {email}
          </Option>
        ))}
      </AutoComplete>
    </Form.Item>
  ) : (
    <Form.Item label={label} name={name} rules={rules}>
      <AutoComplete
        maxLength={maxLength}
        onSearch={handleSearch}
        placeholder={placeholder}
      >
        {result.map((email: string) => (
          <Option key={email} value={email}>
            {email}
          </Option>
        ))}
      </AutoComplete>
    </Form.Item>
  );
}
export default EmailInput;
