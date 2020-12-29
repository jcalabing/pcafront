import React from "react";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import SidePanel from "./SidePanel";

import Kcontent from "./Kcontent/Kcontent";

export default function Kaanib() {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={3}>
        <SidePanel />
      </GridItem>
      <GridItem xs={12} sm={12} md={9}>
        <Kcontent />
      </GridItem>
    </GridContainer>
  );
}
