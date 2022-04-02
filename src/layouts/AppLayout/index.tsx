import React, { createContext, useState } from "react";
import { Layout } from "antd";
import SideNav from "../../components/layout-component/SideNav";
import HeaderNav from "../../components/layout-component/HeaderNav";
import FooterApp from "../../components/layout-component/FooterApp";
import BreadcrumbApp from "../../components/layout-component/BreadcrumbApp";
import Test from "./Test";
import CollapsedContext from "../../utils/context/CollapsedContext";
import ThemeContext from "../../utils/context/ThemeContext";
import MainContent from "../../components/layout-component/MainContent";
import MobileContext from "../../utils/context/MobileContext";
function AppLayout() {
  // const [collapsed, setCollapsed] = useState(false);

  // const { SubMenu } = Menu;
  // const onCollapse = (collapsed: any) => {
  //   console.log(collapsed);
  //   setCollapsed(collapsed);
  // };

  const stateCollapse: any = useState(false);
  const stateTheme: any = useState(true);
  const stateMenuM: any = useState(false);
  const ContextValue = stateCollapse;
  const ContextTheme = stateTheme;
  const ContextMenuM = stateMenuM;

  return (
    <div>
      <ThemeContext.Provider value={ContextTheme}>
        <CollapsedContext.Provider value={ContextValue}>
          <MobileContext.Provider value={ContextMenuM}>
            <Layout className="h-screen">
              <HeaderNav />
              <Layout>
                <SideNav />
                <Layout>
                  <MainContent />
                  <FooterApp />
                </Layout>
              </Layout>
            </Layout>
          </MobileContext.Provider>
        </CollapsedContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default AppLayout;
