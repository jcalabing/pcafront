import React, { useState } from "react";
import ActionButton from "components/ActionButton/ActionButton";

import Table from "components/Table/Table.js";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import EditIcon from "@material-ui/icons/Edit";
import Popup from "components/Popup";
import ProvAdminBox from "lightbox/ProvAdminBox/ProvAdminBox";

export default function ProvinceAdmin(props) {
  const [openPopUp, setOpenPopUp] = useState(false);
  return (
    <>
      <div>
        <ActionButton
          variant="outlined"
          color="info"
          startIcon={<AddCircleRoundedIcon />}
          onClick={() => {
            setOpenPopUp(true);
          }}
        >
          Add New
        </ActionButton>
      </div>
      <Table
        tableHeaderColor="info"
        tableHead={["Admin User Name", "Full Name", "Status", "Edit"]}
        tableData={[
          ["LynFerlina", "Ma. Lyn Ferlina B. Galvan", "Active", <EditIcon />],
        ]}
      />
      <Popup
        title="Province Administrator"
        openPopup={openPopUp}
        setOpenPopup={setOpenPopUp}
        fullWidth="true"
      >
        <ProvAdminBox></ProvAdminBox>
      </Popup>
    </>
  );
}
