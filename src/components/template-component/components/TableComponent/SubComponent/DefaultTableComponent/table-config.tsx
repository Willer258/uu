import utils from "../../../../../../utils";

export const DefaultTableColumns = [
  {
    title: "Nom",
    dataIndex: "name",
    sorter: (a: any, b: any) => utils.antdTableSorter(a, b, "name"),
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
];
