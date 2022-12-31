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

import * as React from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import absenTableData from "layouts/absen/data/absenTableData";
import MDButton from "components/MDButton";
import { Icon, NativeSelect } from "@mui/material";

function Tables() {
  const { columns: pColumns, rows: pRows } = absenTableData();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                py={3}
                px={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Absen
                </MDTypography>
                <MDButton variant="gradient" color="dark" onClick={handleClickOpen}>
                  <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                  &nbsp;tambah
                </MDButton>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Absen</DialogTitle>
                  <DialogContent>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl fullWidth>
                        <InputLabel variant="standard" htmlFor="uncontrolled-native">
                          Keterangan
                        </InputLabel>
                        <NativeSelect
                          defaultValue={30}
                          inputProps={{
                            name: "ket",
                            id: "uncontrolled-native",
                          }}
                        >
                          <option value={10}>Hadir</option>
                          <option value={20}>Izin</option>
                          <option value={30}>Sakit</option>
                          <option value={40}>Alfa</option>
                        </NativeSelect>
                      </FormControl>
                    </Box>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Tambah</Button>
                  </DialogActions>
                </Dialog>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
