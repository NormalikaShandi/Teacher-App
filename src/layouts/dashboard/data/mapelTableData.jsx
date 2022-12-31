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
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { DialogContentText, TextField } from "@mui/material";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import axios from "axios";
import { useEffect } from "react";

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const [daata, setDaata] = React.useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3100/mapel")
      .then((response) => {
        // handle success
        setDaata(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [oopen, setOopen] = React.useState(false);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleKlose = () => {
    setOpen(false);
  };
  const handleClickOopen = () => {
    setOopen(true);
  };
  const handleKloose = () => {
    setOopen(false);
  };
  console.log("data: ", daata);
  return {
    columns: [
      { Header: "Daftar Mapel", accessor: "project", width: "30%", align: "left" },
      { Header: "opsi", accessor: "opsi", width: "20%", align: "left" },
    ],

    rows: daata.map((a) => [
      {
        project: <Project name={a.nama_mapel} />,
        opsi: (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <MDTypography
                  component={Link}
                  to="/kelas"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Lihat Kelas
                </MDTypography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <MDButton variant="gradient" color="light" onClick={handleClickOpen}>
                  &nbsp;edit
                </MDButton>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Edit data</DialogTitle>
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="name"
                      label="Mapel"
                      type="text"
                      fullWidth
                      variant="standard"
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleKlose}>Cancel</Button>
                    <Button onClick={handleKlose}>Edit</Button>
                  </DialogActions>
                </Dialog>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <MDButton variant="gradient" color="primary" onClick={handleClickOopen}>
                  &nbsp;hapus
                </MDButton>
                <Dialog open={oopen} onCloose={handleClose}>
                  <DialogTitle>Hapus data</DialogTitle>
                  <DialogContent>
                    <DialogContentText>Apakah anda yakin?</DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleKloose}>Cancel</Button>
                    <Button onClick={handleKloose}>Hapus</Button>
                  </DialogActions>
                  \
                </Dialog>
              </MenuItem>
            </Menu>
          </div>
        ),
      },
    ]),
  };
}
