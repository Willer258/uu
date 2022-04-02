import { Button, Layout } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import CollapsedContext from "../../utils/context/CollapsedContext";
import ThemeContext from "../../utils/context/ThemeContext";
import MaterialIcon from "../utils-component/MaterialIcon";
import MobileContext from "../../utils/context/MobileContext";
function HeaderNav() {
  const [collapsed, updateSetCollapsed]: any = useContext(CollapsedContext);
  const [theme, updateTheme]: any = useContext(ThemeContext);
  const [show, updateShow]: any = useContext(MobileContext);

  return (
    <header
      style={
        theme === false ? { background: "#001529" } : { background: "#fff" }
      }
      className="text-gray-600 body-font app-header  "
    >
      <div className="  flex flex-wrap p-3 flex-row justify-between items-center">
        <button
          className={`lg:hidden text-xl ${
            theme === false ? " text-white" : " text-black"
          } `}
          onClick={() => updateShow(!show)}
        >
          <MenuFoldOutlined
            className=" text-xl"
            style={{ verticalAlign: "0" }}
          />
        </button>
        <div className="flex items-center">
          <span className="hidden  lg:flex title-font font-medium items-center mx-3 text-gray-900 mb-4  md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>

            {collapsed === false ? (
              <span
                className={`ml-3 text-xl ${
                  theme === false ? " text-white" : " text-black"
                } `}
              >
                Tailblocks
              </span>
            ) : (
              ""
            )}
          </span>
        </div>
        <span
          className={`ml-3 hidden lg:inline text-xl   ${
            theme === false ? " text-white" : " text-black"
          }`}
          onClick={() => updateSetCollapsed(!collapsed)}
        >
          {collapsed === false ? (
            <MenuFoldOutlined className="ml-5" style={{ verticalAlign: "0" }} />
          ) : (
            <MenuUnfoldOutlined style={{ verticalAlign: "0" }} />
          )}
        </span>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center"></nav>

        <MaterialIcon
          onClick={() => updateTheme(!theme)}
          className={` border-0 focus:outline-none lg:self-auto self-end rounded text-base mt-0  md:mt-0 ${
            theme === false ? " text-white" : " text-black"
          }`}
          type={theme === false ? "dark_mode" : "light_mode"}
        />
      </div>
    </header>
  );
}

export default HeaderNav;

/* <div>
      {" "}
      <Header
        className={` p-0  drop-shadow-lg flex justify-between  ${
          theme === true ? " bg-white" : " bg-black"
        }`}
      >
        <div className="flex items-center">
          <div>
            <h1
              className={`text-xl w-20 text-center p-4 ${
                theme === false ? " text-white" : " text-black"
              }`}
            >
              {collapsed === false ? "Logo" : "L"}
            </h1>
          </div>
          <div>
            <span
              className={` ${theme === false ? " text-white" : " text-black"}`}
            >
              <button
                className={` ${collapsed === false ? " ml-28" : ""}`}
                onClick={() => updateSetCollapsed(!collapsed)}
              >
                <MaterialIcon
                  type={collapsed === false ? "menu_open" : "menu"}
                />
              </button>
            </span>
          </div>
        </div>

        <div>
          <p className={` ${theme === false ? " text-white" : " text-black"}`}>
            <button onClick={() => updateTheme(!theme)}>
              <MaterialIcon
                type={theme === false ? "dark_mode" : "light_mode"}
              />
            </button>
          </p>
        </div>
      </Header>
    </div>*/
