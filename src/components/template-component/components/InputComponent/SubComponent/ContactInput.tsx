import { Form } from "antd";
import { MaskedInput } from "antd-mask-input";

interface ContactInputProps {
  initialValue?: any;
  label: string;
  name: string;
  mask: string;
  placeholder?: any;
  rules?: any;
  stateForm?: string | number | undefined;
  type: string;
}

function ContactInput({
  initialValue,
  label,
  name,
  mask,
  rules,
  stateForm,
  type,
}: ContactInputProps) {
  return stateForm !== undefined ? (
    <Form.Item label={label} name={name} initialValue={initialValue}>
      <MaskedInput type={type} name={name} mask={mask} />
    </Form.Item>
  ) : (
    <Form.Item name={name} label={label} rules={rules}>
      <MaskedInput type={type} name={name} mask={mask} />
    </Form.Item>
  );
}

export default ContactInput;
