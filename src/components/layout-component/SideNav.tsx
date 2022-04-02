import { Layout } from "antd";
import { useContext } from "react";
import CollapsedContext from "../../utils/context/CollapsedContext";
import ThemeContext from "../../utils/context/ThemeContext";

import MenuContent from "./MenuContent";
import MobileNav from "./MobileNav";
function SideNav() {
  const { Sider } = Layout;

  const [mycollapsed]: any = useContext(CollapsedContext);

  const [theme]: any = useContext(ThemeContext);
  let themeMenu: any = theme === true ? "light" : "dark";
  return (
    <div
      style={
        theme === false ? { background: "#001529" } : { background: "#fff" }
      }
    >
      {console.log(mycollapsed)}

      <div className="lg:hidden">
        <MobileNav />
      </div>
      <div className=" hidden lg:block">
        <Sider collapsed={mycollapsed}>
          <MenuContent />
        </Sider>
      </div>
    </div>
  );
}

export default SideNav;
