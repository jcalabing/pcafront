import React from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import SidePanel from "./SidePanel";
import CHPContent from "./CHPContent";

export default function CHP() {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={3}>
        <SidePanel />
      </GridItem>
      <GridItem xs={12} sm={12} md={9}>
        <CHPContent />
      </GridItem>
    </GridContainer>
  );
}
