import Countdown from "antd/lib/statistic/Countdown";
import React from "react";
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

function TabsComponent() {
  return (
    <div>
      <Countdown title="Countdown" value={deadline} />
    </div>
  );
}

export default TabsComponent;
