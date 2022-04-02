import { Layout } from "antd";
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import ThemeContext from "../../utils/context/ThemeContext";
import BreadcrumbApp from "./BreadcrumbApp";
import Dashboard from "../../pages/dashboard/index";
function MainContent() {
  const [theme]: any = useContext(ThemeContext);
  const { Content } = Layout;
  return (
    <Layout
      style={
        theme === false
          ? { background: "#111f2d", color: "#fff" }
          : { background: "#f9f9f9", color: "#000" }
      }
    >
      <BreadcrumbApp />
      <Content className="p-3 m-5 bg-white">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/" element={"essais"} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default MainContent;
