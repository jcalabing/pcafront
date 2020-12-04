import React from "react";
import Table from "components/Table/Table.js";
import ActionButton from "components/ActionButton";

import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";

export default function ProvinceCBO(props) {
  return (
    <>
      <div>
        <ActionButton
          variant="outlined"
          color="info"
          startIcon={<AddCircleRoundedIcon />}
        >
          Add New
        </ActionButton>
      </div>
      <Table
        tableHeaderColor="info"
        tableHead={[
          "CDO/Agriculturist",
          "CBO Name",
          "CBO Location",
          "No. Farmers Beneficiaries",
        ]}
        tableData={[
          [
            "Ma. Lyn Ferlina B. Galvan",
            "San Jose Farmers Association",
            "San Jose, Ibajay, Aklan",
            "92",
          ],
          [
            "Grace D. Acaño",
            "Palayamanan Farmers Enterprenuer Association",
            "Tambuan, Malinao, Aklan",
            "56",
          ],
          [
            "Menveluz T. De Joseph",
            "Batan Rural Improvement Club",
            "Mandong, Batan, Aklan",
            "50",
          ],
          [
            "Christian S. Luciano",
            "Kalipunan ng Maliliit na Nagniniyog (KAMANA) MPC",
            "Napaan, Malay, Aklan",
            "38",
          ],
          [
            "Maverick P. Delgado",
            "Janlud SCFO",
            "Janlud, Libacao, Aklan",
            "53",
          ],
          [
            "Maverick P. Delgado",
            "Guadalupe -Julita Uplanders Developer Association",
            "Julita, Libacao, Aklan",
            "50",
          ],
          [
            "Maverick P. Delgado",
            "Napnot Farmers Organization",
            "Napnot, Madalag, Aklan",
            "65",
          ],
          ["Grace D. Acaño", "Sebalew SCFO", "Sebalew, Banga, Aklan", "76"],
          ["Feelmer John R. Sasis", "Ibao SCFO", "Ibao, Lezo, Aklan", "90"],
          [
            "Jessa Mae E. Tayco",
            "Panayakan SCFO",
            "Panayakan, Tangalan, Aklan",
            "79",
          ],
          [
            "Christian S. Luciano",
            "Nabas Coconut Farmers Association",
            "Buenasuerte, Nabas, Aklan",
            "48",
          ],
          [
            "Dinabeth J. Onayan",
            "Man-up Multi-purpose Cooperative",
            "Man-up, Altavas, Aklan",
            80,
          ],
          [
            "Christian S. Luciano",
            "Buruanga Coconut Farmers Association",
            "Alegria, Buruanga,Aklan",
            56,
          ],
          ["Grace D. Acaño", "Libas SCFO", "Libas, Banga, Aklan", 28],
        ]}
      />
    </>
  );
}
