import React from "react";

import Tooltip from "react-riq-tooltip";
import "react-riq-tooltip/dist/index.css";

const App = () => {
  return (
    <div style={{ marginTop: "250px", marginLeft: "250px" }}>
      <Tooltip data={"List options menu this click opening full sentence example"}>
        <div>element</div>
      </Tooltip>
    </div>
  );
}

export default App;
