import { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import api from "../services/api";

export default function HCPTable({
  hcps,
  loadHCPs,
  setEditing,
  setSelectedHCP,
}) {

  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [viewOpen, setViewOpen] = useState(false);
  const [selectedView, setSelectedView] = useState(null);

  const openDeleteDialog = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const closeDeleteDialog = () => {
    setOpen(false);
    setSelectedId(null);
  };

  const confirmDelete = async () => {
    try {
      await api.delete(`/hcp/${selectedId}`);
      loadHCPs();
      closeDeleteDialog();
    } catch (err) {
      console.log(err);
    }
  };

  const editHCP = (hcp) => {
    setEditing(true);
    setSelectedHCP(hcp);
  };

  const viewHCP = (hcp) => {
    setSelectedView(hcp);
    setViewOpen(true);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Specialty</TableCell>
              <TableCell>Hospital</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>

            {hcps.map((hcp) => (

              <TableRow key={hcp.id}>

                <TableCell>{hcp.name}</TableCell>
                <TableCell>{hcp.specialty}</TableCell>
                <TableCell>{hcp.hospital}</TableCell>
                <TableCell>{hcp.city}</TableCell>
                <TableCell>{hcp.email}</TableCell>
                <TableCell>{hcp.phone}</TableCell>

                <TableCell align="center">

                  <IconButton
                    color="success"
                    onClick={() => viewHCP(hcp)}
                  >
                    <VisibilityIcon />
                  </IconButton>

                  <IconButton
                    color="primary"
                    onClick={() => editHCP(hcp)}
                  >
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    color="error"
                    onClick={() => openDeleteDialog(hcp.id)}
                  >
                    <DeleteIcon />
                  </IconButton>

                </TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>

      </TableContainer>
            <Dialog
        open={viewOpen}
        onClose={() => setViewOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          👨‍⚕️ HCP Details
        </DialogTitle>

        <DialogContent>
          {selectedView && (
            <>
              <p><b>Name:</b> {selectedView.name}</p>
              <p><b>Specialty:</b> {selectedView.specialty}</p>
              <p><b>Hospital:</b> {selectedView.hospital}</p>
              <p><b>City:</b> {selectedView.city}</p>
              <p><b>Email:</b> {selectedView.email}</p>
              <p><b>Phone:</b> {selectedView.phone}</p>
            </>
          )}
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => setViewOpen(false)}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open}
        onClose={closeDeleteDialog}
      >
        <DialogTitle>
          ⚠ Delete HCP
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this HCP?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={closeDeleteDialog}
          >
            Cancel
          </Button>

          <Button
            color="error"
            variant="contained"
            onClick={confirmDelete}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

    </>
  );
}