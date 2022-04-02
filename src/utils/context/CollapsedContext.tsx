import React from "react";

export default React.createContext({
  collapsed: false,
  updateSetCollapsed: (data: boolean) => {
    data = !data;
  },
});
