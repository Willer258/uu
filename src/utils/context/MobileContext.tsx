import React from "react";

export default React.createContext({
  show: false,
  updateShow: (data: boolean) => {
    data = !data;
  },
});
