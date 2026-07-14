import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import api from "../services/api";


export default function Dashboard() {

  const [hcps, setHcps] = useState([]);


  const loadHCPs = async () => {
    try {

      const res = await api.get("/hcp/");
      setHcps(res.data);

    } catch (err) {

      console.log(err);

    }
  };


  useEffect(() => {
    loadHCPs();
  }, []);



  const totalHCP = hcps.length;


  const totalCities = [
    ...new Set(
      hcps.map((hcp)=>hcp.city)
    )
  ].length;


  const totalSpecialties = [
    ...new Set(
      hcps.map((hcp)=>hcp.specialty)
    )
  ].length;



  return (

    <div style={{padding:20}}>


      <Typography variant="h4" gutterBottom>
        📊 AI First CRM Dashboard
      </Typography>


      <Typography>
        Welcome to AI First CRM
      </Typography>



      <Grid container spacing={3} sx={{mt:2}}>


        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Total HCPs
              </Typography>

              <Typography variant="h3">
                {totalHCP}
              </Typography>

            </CardContent>
          </Card>
        </Grid>




        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>

              <Typography variant="h6">
                Total Cities
              </Typography>

              <Typography variant="h3">
                {totalCities}
              </Typography>

            </CardContent>
          </Card>
        </Grid>




        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>

              <Typography variant="h6">
                Specialties
              </Typography>

              <Typography variant="h3">
                {totalSpecialties}
              </Typography>

            </CardContent>
          </Card>
        </Grid>


      </Grid>




      <Paper sx={{mt:4}}>

        <Typography
          variant="h6"
          sx={{p:2}}
        >
          Recent HCPs
        </Typography>


        <Table>

          <TableHead>
            <TableRow>

              <TableCell>Name</TableCell>
              <TableCell>Specialty</TableCell>
              <TableCell>City</TableCell>

            </TableRow>
          </TableHead>



          <TableBody>

            {hcps.slice(-5).map((hcp)=>(

              <TableRow key={hcp.id}>

                <TableCell>
                  {hcp.name}
                </TableCell>

                <TableCell>
                  {hcp.specialty}
                </TableCell>

                <TableCell>
                  {hcp.city}
                </TableCell>

              </TableRow>

            ))}


          </TableBody>

        </Table>

      </Paper>


    </div>

  );

}