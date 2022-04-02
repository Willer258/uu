import { Layout } from "antd";
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import ThemeContext from "../../utils/context/ThemeContext";
import BreadcrumbApp from "./BreadcrumbApp";
import Dashboard from "../../pages/dashboard/index";
import PageContent from "../../pages/dashboard/page-template/PageContent";
import PageColor from "../../pages/dashboard/page-template/design-system/PageColor";
import PageTypography from "../../pages/dashboard/page-template/design-system/PageTypography";
import PageSize from "../../pages/dashboard/page-template/design-system/PageSize";
import ButtonPage from "../../pages/dashboard/page-template/components/ButtonPage";
import InputPage from "../../pages/dashboard/page-template/components/InputPage";
import TabsPage from "../../pages/dashboard/page-template/components/TabsPage";
import TablePage from "../../pages/dashboard/page-template/components/TablePage";
import ModalPage from "../../pages/dashboard/page-template/components/ModalPage";
import CollapsedContext from "../../utils/context/CollapsedContext";
import FooterApp from "./FooterApp";
function MainContent() {
  const [theme]: any = useContext(ThemeContext);
  const { Content } = Layout;

  const [collapsed]: any = useContext(CollapsedContext);
  console.log(collapsed);
 
  return (
    <Layout
      className= {` bg-white ${
        collapsed === false ? " collapsed" : " no-collapsed"
      } `}
     
    >
     
      <Content className="app-content">
      <BreadcrumbApp />
        <div className="  bg-white p-3 h-full m-5">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/page-content-default" element={<PageContent />} />
            <Route path="/couleur" element={<PageColor />} />
            <Route path="/typographie" element={<PageTypography />} />
            <Route path="/taille" element={<PageSize />} />
            <Route path="/bouttons" element={<ButtonPage />} />
            <Route path="/champs" element={<InputPage />} />
            <Route path="/onglets" element={<TabsPage />} />
            <Route path="/listes" element={<TablePage />} />
            <Route path="/modal" element={<ModalPage />} />
          </Routes>
        </div>
      </Content>
      <FooterApp />
    </Layout>
  );
}

export default MainContent;
