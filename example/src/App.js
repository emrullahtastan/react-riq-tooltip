import React from "react";

import Tooltip from "react-riq-tooltip";
import "react-riq-tooltip/dist/index.css";

const App = () => {
  return (
    <div style={{ marginTop: "20px", display:"flex"/*, marginLeft: "200px"*/ }}>
      <Tooltip data={"List options menu this click opening full sentence example"}>
        <div style={{}}> element</div>
      </Tooltip>
    </div>
  );
};

export default App;
