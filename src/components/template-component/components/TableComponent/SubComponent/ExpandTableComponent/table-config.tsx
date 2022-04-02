import { Button } from "antd";
import AvatarComponent from "../../../../../../shared/shared-components/AvatarComponent";
import utils from "../../../../../../utils";

interface TableInterface {
  id: number;
  username?: string;
  name: string | null | undefined;
  image?: string;
  address?: object;
  email?: string;
  phone?: string;
  website?: string;
  company?: object;
}
export const ExpandTableColumns = [
  {
    title: "Nom et prénoms",
    dataIndex: "name",
    sorter: (a: any, b: any) => utils.antdTableSorter(a, b, "name"),
    render: (_: any, record: TableInterface) => (
      <div className="d-flex">
        <AvatarComponent
          shape="circle"
          image={record?.image}
          name={record.name}
          size={54}
        />
      </div>
    ),
  },
  {
    title: "Nom d'utilisateur",
    dataIndex: "username",
    sorter: (a: any, b: any) => utils.antdTableSorter(a, b, "username"),
  },
  {
    title: "Contact",
    dataIndex: "phone",
    sorter: (a: any, b: any) => utils.antdTableSorter(a, b, "phone"),
  },
  {
    title: (_: any, elm: any) => null,
    render: () => (
      <div className="">
        <Button>Modifier</Button>
      </div>
    ),
  },
];
