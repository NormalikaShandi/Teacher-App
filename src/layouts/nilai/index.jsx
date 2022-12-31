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
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import nilaiTableData from "layouts/nilai/data/nilaiTableData";
import MDButton from "components/MDButton";
import { Box, FormControl, Icon, InputLabel, NativeSelect } from "@mui/material";

function Tables() {
  const { columns: pColumns, rows: pRows } = nilaiTableData();
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
                  Nilai
                </MDTypography>
                <MDButton variant="gradient" color="dark" onClick={handleClickOpen}>
                  <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                  &nbsp;tambah
                </MDButton>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Tambah Nilai</DialogTitle>
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Masukian Nilai"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
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
                          <option value={10}>H1</option>
                          <option value={20}>H2</option>
                          <option value={30}>H3</option>
                          <option value={40}>H4</option>
                          <option value={50}>UTS</option>
                          <option value={60}>UAS</option>
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
