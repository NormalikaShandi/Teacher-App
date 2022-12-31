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
      { Header: "H1", accessor: "h1", width: "20%", align: "left" },
      { Header: "H2", accessor: "h2", width: "20%", align: "left" },
      { Header: "H3", accessor: "h3", width: "20%", align: "left" },
      { Header: "H4", accessor: "h4", width: "20%", align: "left" },
      { Header: "UTS", accessor: "uts", width: "20%", align: "left" },
      { Header: "UAS", accessor: "uas", width: "20%", align: "left" },
    ],

    rows: [
      {
        nama: <Project name="Asana" />,
        h1: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            90
          </MDTypography>
        ),
        h2: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            78
          </MDTypography>
        ),
        h3: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            90
          </MDTypography>
        ),
        h4: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            78
          </MDTypography>
        ),
        uts: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            90
          </MDTypography>
        ),
        uas: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            78
          </MDTypography>
        ),
      },
    ],
  };
}
