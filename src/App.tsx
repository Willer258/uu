/* eslint-disable no-unreachable */
import React from "react";

import { Routes, Route } from "react-router-dom";
import PagesViews from "./pages";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<PagesViews />} />
      </Routes>
    </div>
  );
  // eslint-disable-next-line no-lone-blocks
  {
    /* <Routes>
  <Route path="/">
    <Route index element={"<Home />"} />
    <Route path="teams">
      <Route path=":teamId" element={"<Team />"} />
      <Route path="new" element={"<NewTeamForm />"} />
      <Route index element={"<LeagueStandings />"} />
    </Route>
  </Route>
  </Routes> */
  }
}

export default App;
