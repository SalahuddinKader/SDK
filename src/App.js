import React, { useState } from "react";
import { Box } from "@mui/material";
import Installed from "./Component/Installed/Installed";
import Uninstalled from "./Component/Uninstalled/Uninstalled";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
/**
 * App js display all state and functions
 * @state {boolean} installed
 * @state {boolean} uninstalled
 * @state {string} alignment
 * @func {function} installedChangeHandler  //Render all installed list
 * @func {function} unInstalledChangeHandler //Render all uninstalled list
 * @func {function} selectHandleChange // Select installed or uninstalled
 */

const App = () => {
  const [installed, setInstalled] = useState(true);
  const [uninstalled, setUninstalled] = useState(false);
  const [alignment, setAlignment] = useState("Installed");

  //HandleChange to select installed or uninstalled
  const selectHandleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  //Handler for select installedSdk
  const installedChangeHandler = () => {
    setInstalled(true);
    setUninstalled(false);
  };
  //Handler for select unInstalledSdk
  const unInstalledChangeHandler = () => {
    setUninstalled(true);
    setInstalled(false);
  };

  const buttons = [
    <ToggleButton
      key={Installed}
      value="Installed"
      onClick={installedChangeHandler}
    >
      Installed
    </ToggleButton>,
    <ToggleButton
      key={Uninstalled}
      value="Uninstalled"
      onClick={unInstalledChangeHandler}
    >
      Uninstalled
    </ToggleButton>,
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textTransform: "none",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ToggleButtonGroup
        color="primary"
        key={alignment}
        value={alignment}
        exclusive
        onChange={selectHandleChange}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "left",
        }}
        size="large"
        aria-label="large button group"
      >
        {buttons}
      </ToggleButtonGroup>
      {installed ? <Installed /> : null}
      {uninstalled ? <Uninstalled /> : null}
    </Box>
  );
};

export default App;
