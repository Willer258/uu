import { APP_PREFIX_PATH } from "./AppConfig";

const home = [
  {
    key: "home",
    path: `${APP_PREFIX_PATH}`,
    title: "Accueil",
    supertitle: "no-title",
    icon: "home",
    breadcrumb: true,
    submenu: [],
  },
];
const dashBoardNavTree = [
  {
    key: "link",
    path: `${APP_PREFIX_PATH}`,
    title: "Link",
    supertitle: "no-title",
    icon: "link",
    breadcrumb: true,
    submenu: [
      {
        key: "sub-link",
        path: `${APP_PREFIX_PATH}`,
        title: "SubLink",
        icon: "add_link",
        breadcrumb: true,
        submenu: [],
      },
    ],
  },
];

const templatePageTree = [
  {
    key: "template-component",
    path: ``,
    title: "TEMPLATE COMPONENT",
    supertitle: "title",
    icon: "",
    breadcrumb: true,
    submenu: [
      {
        key: "page-content",
        path: `${APP_PREFIX_PATH}/page-content-default`,
        title: "PageContent",
        icon: "description",
        breadcrumb: true,
        submenu: [],
      },
      {
        key: "design-system",
        path: ``,
        title: "Design system",
        icon: "style",
        breadcrumb: true,
        submenu: [
          {
            key: "color",
            path: `${APP_PREFIX_PATH}/couleur`,
            title: "Couleur",
            icon: "palette",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "typography",
            path: `${APP_PREFIX_PATH}/typographie`,
            title: "Typographie",
            icon: "text_format",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "size",
            path: `${APP_PREFIX_PATH}/taille`,
            title: "Taille",
            icon: "height",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "components",
        path: ``,
        title: "Components",
        icon: "grid_view",
        breadcrumb: true,
        submenu: [
          {
            key: "button",
            path: `${APP_PREFIX_PATH}/bouttons`,
            title: "Bouttons",
            icon: "smart_button",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "input",
            path: `${APP_PREFIX_PATH}/champs`,
            title: "Champs",
            icon: "check_box",
            breadcrumb: true,
            submenu: [],
          },
          // {
          //   key: "tabs",
          //   path: `${APP_PREFIX_PATH}/onglets`,
          //   title: "Onglets",
          //   icon: "tab",
          //   breadcrumb: true,
          //   submenu: [],
          // },
          {
            key: "table",
            path: `${APP_PREFIX_PATH}/listes`,
            title: "Listes",
            icon: "toc",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "modal",
            path: `${APP_PREFIX_PATH}/modal`,
            title: "Modal",
            icon: "filter_1",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
    ],
  },
];

const navigationConfig = [...home, ...dashBoardNavTree, ...templatePageTree];

export default navigationConfig;
