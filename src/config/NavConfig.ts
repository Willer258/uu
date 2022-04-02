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

const navigationConfig = [...home, ...dashBoardNavTree];

export default navigationConfig;
