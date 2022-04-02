import React, { useContext, useState } from "react";

import { Drawer } from "antd";
import MenuContent from "./MenuContent";
import MobileContext from "../../utils/context/MobileContext";
import ThemeContext from "../../utils/context/ThemeContext";

function MobileNav() {
  const [drawer, SetDrawer]: any = useContext(MobileContext);
  const [theme]: any = useContext(ThemeContext);

  const onClose = () => {
    SetDrawer(false);
  };
  console.log(drawer);
  return (
    <div>
      <Drawer
        placement={"left"}
        closable={false}
        onClose={onClose}
        visible={drawer}
        key={"left"}
        width={250}
      >
        <span className="flex title-font font-medium items-center mx-3 text-gray-900 mb-4  md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span
            className={`ml-3 text-xl ${
              theme === false ? " text-white" : " text-black"
            } `}
          >
            Tailblocks
          </span>
        </span>

        <MenuContent />
      </Drawer>
    </div>
  );
}

export default MobileNav;
