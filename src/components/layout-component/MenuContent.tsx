import { Menu } from "antd";
import React, { useContext } from "react";

// import {
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
// } from "@ant-design/icons";
import navigationConfig from "../../config/NavConfig";
import utils from "../../utils";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { Link } from "react-router-dom";
import MaterialIcon from "../utils-component/MaterialIcon";
import ThemeContext from "../../utils/context/ThemeContext";

const setDefaultOpen = (key: any) => {
  let keyList = [];
  let keyString = "";
  if (key) {
    const arr = key.split("-");
    for (let index = 0; index < arr.length; index++) {
      const elm = arr[index];
      index === 0 ? (keyString = elm) : (keyString = `${keyString}-${elm}`);
      keyList.push(keyString);
    }
  }
  return keyList;
};
// const setLocale = (isLocaleOn: any, localeKey: string) => {
//   isLocaleOn ? <IntlMessage id={localeKey} /> : localeKey.toString();
// };
const SideNavContent = (props: any) => {
  const {
    // sideNavTheme,
    routeInfo,
    hideGroupTitle,
    // localization,
    onMobileNavToggle,
  }: any = props;
  const isMobile = !utils.getBreakPoint(useBreakpoint()).includes("lg");
  const closeMobileNav = () => {
    if (isMobile) {
      onMobileNavToggle(false);
    }
  };

  const [theme]: any = useContext(ThemeContext);
  const { SubMenu } = Menu;
  let themeMenu: any = theme === true ? "light" : "dark";
  return (
    <Menu
      theme={themeMenu}
      mode="inline"
      style={{ height: "100%", borderRight: 0 }}
      defaultSelectedKeys={[routeInfo?.key]}
      defaultOpenKeys={setDefaultOpen(routeInfo?.key)}
      className={hideGroupTitle ? "hide-group-title" : ""}
    >
      {navigationConfig.map((menu: any) =>
        menu.submenu.length > 0 && menu.supertitle !== "no-title" ? (
          <Menu.ItemGroup
            key={menu.key}
            title={<span className="font-bold">{menu.title}</span>}
          >
            {menu.submenu.map((subMenuFirst: any) =>
              subMenuFirst.submenu.length > 0 ? (
                <SubMenu
                  icon={
                    subMenuFirst.icon ? (
                      <MaterialIcon type={subMenuFirst?.icon} />
                    ) : null
                  }
                  key={subMenuFirst.key}
                  title={subMenuFirst.title}
                >
                  {subMenuFirst.submenu.map(
                    (subMenuSecond: {
                      key: React.Key | null | undefined;
                      icon: any;
                      title: any;
                      path: any;
                    }) => (
                      <Menu.Item key={subMenuSecond.key}>
                        {subMenuSecond.icon ? (
                          <MaterialIcon type={subMenuSecond?.icon} />
                        ) : null}
                        <span>{subMenuSecond.title}</span>
                        <Link
                          onClick={() => closeMobileNav()}
                          to={subMenuSecond.path}
                        />
                      </Menu.Item>
                    )
                  )}
                </SubMenu>
              ) : (
                <Menu.Item
                  key={subMenuFirst.key}
                  icon={
                    subMenuFirst.icon ? (
                      <MaterialIcon type={subMenuFirst.icon} />
                    ) : null
                  }
                >
                  <span>{subMenuFirst.title}</span>
                  <Link
                    onClick={() => closeMobileNav()}
                    to={subMenuFirst.path}
                  />
                </Menu.Item>
              )
            )}
          </Menu.ItemGroup>
        ) : menu.supertitle === "no-title" && menu.submenu.length > 0 ? (
          <SubMenu
            key={menu.key}
            icon={<MaterialIcon type={menu?.icon} />}
            title={menu.title}
          >
            {menu.submenu.map((subMenuFirst: any) =>
              subMenuFirst.submenu.length > 0 ? (
                <SubMenu
                  icon={
                    subMenuFirst.icon ? (
                      <MaterialIcon type={subMenuFirst?.icon} />
                    ) : null
                  }
                  key={subMenuFirst.key}
                  title={subMenuFirst.title}
                >
                  {subMenuFirst.submenu.map(
                    (subMenuSecond: {
                      key: React.Key | null | undefined;
                      icon: any;
                      title: any;
                      path: any;
                    }) => (
                      <Menu.Item key={subMenuSecond.key}>
                        {subMenuSecond.icon ? (
                          <MaterialIcon type={subMenuSecond?.icon} />
                        ) : null}
                        <span>{subMenuSecond.title}</span>
                        <Link
                          onClick={() => closeMobileNav()}
                          to={subMenuSecond.path}
                        />
                      </Menu.Item>
                    )
                  )}
                </SubMenu>
              ) : (
                <Menu.Item key={subMenuFirst.key}>
                  {subMenuFirst.icon ? (
                    <MaterialIcon type={subMenuFirst.icon} />
                  ) : null}
                  <span>{subMenuFirst.title}</span>
                  <Link
                    onClick={() => closeMobileNav()}
                    to={subMenuFirst.path}
                  />
                </Menu.Item>
              )
            )}
          </SubMenu>
        ) : (
          <Menu.Item
            key={menu.key}
            icon={menu.icon ? <MaterialIcon type={menu?.icon} /> : null}
          >
            <span> {menu?.title}</span>
            {menu.path ? (
              <Link onClick={() => closeMobileNav()} to={menu.path} />
            ) : null}
          </Menu.Item>
        )
      )}
    </Menu>
  );
};

function MenuContent() {
  return (
    <div className="h-full">
      <SideNavContent />
    </div>
  );
}

export default MenuContent;
