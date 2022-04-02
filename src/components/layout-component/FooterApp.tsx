import { Layout } from "antd";
import React, { useContext } from "react";
import ThemeContext from "../../utils/context/ThemeContext";

function Footer() {
  const [theme]: any = useContext(ThemeContext);
  const { Footer } = Layout;
  return (
    <Footer
      style={
        theme === false
          ? { background: "#111f2d", color: "#fff" }
          : { background: "#f9f9f9", color: "#000" }
      }
    >
      Footer
    </Footer>
  );
}

export default Footer;
