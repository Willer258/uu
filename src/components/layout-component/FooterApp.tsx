import { Layout } from "antd";
import React, { useContext } from "react";
import ThemeContext from "../../utils/context/ThemeContext";

function Footer() {
  const [theme]: any = useContext(ThemeContext);
  const { Footer } = Layout;
  return (
    <Footer
      className="border-t-2 "
      style={
        theme === false
          ? { background: "#111f2d", color: "#fff" }
          : { background: "#fff", color: "#000" }
      }
    >
      Footer
    </Footer>
  );
}

export default Footer;
