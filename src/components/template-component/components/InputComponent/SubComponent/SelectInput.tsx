import { Form, Select } from "antd";
interface SelectInputComponentProps {
  initialValue?: string;
  defaultValue?: number | undefined;
  label?: string;
  name?: string;
  disableSelect?: boolean;
  placeholder: any;
  stateForm?: string | number | undefined;
  size?: any;
  style?: object;
  loading?: boolean;
  valueOption: any;
  optionFilterProp?: string;
  filterOption?: boolean;
  filterSort?: boolean;
  showArrow?: boolean;
  showSearch?: boolean;
  rules?: any;
}

//
function SelectInput({
  initialValue,
  label,
  rules,
  loading,
  name,
  placeholder,
  size,
  style,
  disableSelect,
  valueOption,
  optionFilterProp,
  filterOption,
  filterSort,
  showSearch,
  stateForm,
}: SelectInputComponentProps) {
  const { Option } = Select;
  const filterOptionActive = filterOption
    ? (input: any, option: any) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    : false;

  const filterSortActive = filterSort
    ? (optionA: any, optionB: any) =>
        optionA.children
          .toLowerCase()
          .localeCompare(optionB.children.toLowerCase())
    : undefined;
  return stateForm !== undefined ? (
    <Form.Item label={label} name={name} initialValue={initialValue}>
      <Select
        placeholder={placeholder}
        loading={loading}
        style={style}
        showSearch={showSearch}
        size={size}
        disabled={disableSelect}
        showArrow={true}
        optionFilterProp={optionFilterProp}
        filterOption={filterOptionActive}
        filterSort={filterSortActive}
      >
        {valueOption.map((item: any, index: any) => (
          <Option value={item.id} key={index}>
            {item.name}
          </Option>
        ))}
      </Select>
    </Form.Item>
  ) : (
    <Form.Item label={label} name={name} rules={rules}>
      <Select
        placeholder={placeholder}
        style={style}
        showSearch={showSearch}
        loading={loading}
        disabled={disableSelect}
        size={size}
        showArrow={true}
        optionFilterProp={optionFilterProp}
        filterOption={filterOptionActive}
        filterSort={filterSortActive}
      >
        {valueOption.map((item: any, index: any) => (
          <Option value={item.id} key={index}>
            {item.name}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
}
export default SelectInput;
