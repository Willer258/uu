import { DatePicker, Form } from "antd";
import moment from "moment";

interface DatePickerInputProps {
  label?: string;
  format?: string;
  rules?: any;
  help?: string;
  initialValue?: any;
  stateForm?: string | number | undefined;
  name: string;

  onChange?: (value: moment.Moment | null, dateString: string) => void;
}

export default function DatePickerInput({
  label,
  format,
  onChange,
  initialValue,
  name,
  stateForm,
  rules,
}: DatePickerInputProps) {
  return stateForm !== undefined ? (
    <Form.Item
      label={label}
      name={name}
      initialValue={moment(initialValue, format)}
    >
      <DatePicker format={format} onChange={onChange} />
    </Form.Item>
  ) : (
    <Form.Item label={label} name={name} rules={rules}>
      <DatePicker
        placeholder={"JJ-MM-AAAA"}
        format={format}
        onChange={onChange}
      />
    </Form.Item>
  );
}

//La date de fin de partenariat doit être supérieur à la date de début
