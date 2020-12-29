import React from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Data from "./Data.js";
import DateData from "./DateData.js";

export default function VCOTab() {
  return (
    <GridContainer>
      <GridItem xs={12} sm={2} md={2}>
        <DateData />
      </GridItem>
      <GridItem xs={12} sm={10} md={10}>
        <Data />
      </GridItem>
    </GridContainer>
  );
}
