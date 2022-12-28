/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "nama siswa", accessor: "nama", align: "left" },
      { Header: "P1", accessor: "absen", width: "5%", align: "left" },
      { Header: "P2", accessor: "nilai", width: "5%", align: "left" },
    ],

    rows: [
      {
        nama: <Project name="Asana" />,
        absen: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            Lihat
          </MDTypography>
        ),
        nilai: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Lihat
          </MDTypography>
        ),
      },
    ],
  };
}
