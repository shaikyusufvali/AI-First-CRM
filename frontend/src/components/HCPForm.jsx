import { TextField, Button, Paper, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import api from "../services/api";

export default function HCPForm({
  loadHCPs,
  editing,
  setEditing,
  selectedHCP,
}) {

  const [form, setForm] = useState({
    name: "",
    specialty: "",
    hospital: "",
    city: "",
    email: "",
    phone: "",
  });


  useEffect(() => {

    if (editing && selectedHCP) {

      setForm({
        name: selectedHCP.name || "",
        specialty: selectedHCP.specialty || "",
        hospital: selectedHCP.hospital || "",
        city: selectedHCP.city || "",
        email: selectedHCP.email || "",
        phone: selectedHCP.phone || "",
      });

    }

  }, [editing, selectedHCP]);



  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };



  const clearForm = () => {

    setForm({
      name: "",
      specialty: "",
      hospital: "",
      city: "",
      email: "",
      phone: "",
    });

    setEditing(false);

  };



  const saveHCP = async () => {

    console.log("FORM DATA:", form);

    try {

      if (editing) {

        await api.put(
          `/hcp/${selectedHCP.id}`,
          form
        );

      } else {

        await api.post(
          "/hcp/",
          form
        );

      }


      clearForm();

      await loadHCPs();


    } catch (err) {

      console.log(
        err.response?.data || err.message
      );

    }

  };



  return (

    <Paper sx={{ p: 3, mb: 3 }}>

      <Grid container spacing={2}>


        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </Grid>



        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Specialty"
            name="specialty"
            value={form.specialty}
            onChange={handleChange}
          />
        </Grid>



        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Hospital"
            name="hospital"
            value={form.hospital}
            onChange={handleChange}
          />
        </Grid>



        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="City"
            name="city"
            value={form.city}
            onChange={handleChange}
          />
        </Grid>



        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Grid>



        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </Grid>



        <Grid item xs={12}>

          <Button
            variant="contained"
            onClick={saveHCP}
          >
            {editing ? "Update HCP" : "Save HCP"}
          </Button>



          {editing && (

            <Button
              sx={{ ml: 2 }}
              color="secondary"
              variant="outlined"
              onClick={clearForm}
            >
              Cancel
            </Button>

          )}

        </Grid>


      </Grid>


    </Paper>

  );

}