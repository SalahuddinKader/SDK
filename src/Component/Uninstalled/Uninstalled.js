import React from "react";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { orderBy, groupBy } from "lodash";
import moment from "moment";
import UninstalledData from "../../uninstalled.json";
const { uninstalledSdks } = UninstalledData.data;
/**
 * Uninstalled js
 * @func {function} renderData // groupBy by lodash and map through the list
 */
const Uninstalled = () => {
  const newUninstalledSdks = orderBy(uninstalledSdks, "categories", "asc"); //UninstaslledSdk orderBy lodash
  const data = groupBy(newUninstalledSdks, "categories"); //UninstaslledSdk GroupBy lodash
  return (
    <Card
      sx={{
        width: "50%",
        border: "3px solid #42a5f5",
        height: "100%",
        overflow: "hidden",
        margin: "10px",
        padding: "10px",
      }}
    >
      <CardContent>
        <Typography color="#42a5f5">Uninstalled SDK's</Typography>

        {/* Latest Update date */}
        <Typography
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
          color="#42a5f5"
        >
          {uninstalledSdks.length}
        </Typography>
        <Typography sx={{}} color="#42a5f5">
          {` Latest Update: ${moment
            .utc(uninstalledSdks[0].lastSeenDate)
            .local()
            .format("ll")}`}
        </Typography>
        <Typography
          sx={{ width: "100%", mt: 1.5, borderBottom: "1px solid #42a5f5" }}
          color="#42a5f5"
        ></Typography>

        {/* Call renderData to display installedSdk's list */}
        <Box>
          {Object.keys(data).map((category) => (
            <React.Fragment key={category}>
              <Box
                sx={{
                  marginTop: "20px",
                  color: "#42a5f5",
                }}
              >
                <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                  {category}
                </Typography>
                {data[category].map((order, i) => {
                  const { lastSeenDate, name } = order;
                  //Used moment to get currentDate and lastSeenDate
                  const currentDate = moment(new Date());
                  const lastSeenInstalledDate = moment(lastSeenDate);
                  return (
                    <Typography key={i}>
                      {name}{" "}
                      {`${Math.floor(
                        currentDate.diff(lastSeenInstalledDate, "years", true)
                      )} years ago`}
                    </Typography>
                  );
                })}
              </Box>
            </React.Fragment>
          ))}
        </Box>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
};

export default Uninstalled;
