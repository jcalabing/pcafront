import React from "react";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import SaveIcon from "@material-ui/icons/Save";

export default function ProvinceBox() {
  return (
    <div xs={10}>
      <GridContainer xs={12}>
        <GridItem xs={12}>
          <CustomInput
            labelText="Province Name"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12}>
          <CustomInput
            labelText="Simple province description"
            id="about-me"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              multiline: true,
              rows: 5,
            }}
          />
        </GridItem>
      </GridContainer>
      <br />
      <Button color="success" startIcon={<SaveIcon />}>
        Save
      </Button>
    </div>
  );
}
