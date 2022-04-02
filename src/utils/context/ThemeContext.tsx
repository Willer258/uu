import React from "react";

export default React.createContext({
  theme: false,
  updateTheme: (data: boolean) => {
    data = !data;
  },
});
