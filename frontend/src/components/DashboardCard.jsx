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

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

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

  const totalCities = [...new Set(hcps.map((h) => h.city))].length;

  const totalSpecialties = [
    ...new Set(hcps.map((h) => h.specialty)),
  ].length;

  const cityData = Object.values(
    hcps.reduce((acc, h) => {
      const city = h.city || "Unknown";

      if (!acc[city]) {
        acc[city] = {
          city,
          count: 0,
        };
      }

      acc[city].count++;

      return acc;
    }, {})
  );

  const specialtyData = Object.values(
    hcps.reduce((acc, h) => {
      const sp = h.specialty || "Unknown";

      if (!acc[sp]) {
        acc[sp] = {
          name: sp,
          value: 0,
        };
      }

      acc[sp].value++;

      return acc;
    }, {})
  );

  const COLORS = [
    "#1976d2",
    "#43a047",
    "#ff9800",
    "#e53935",
    "#8e24aa",
  ];

  return (
    <div style={{ padding: 20 }}>

      <Typography variant="h4">
        📊 AI First CRM Dashboard
      </Typography>

      <Typography sx={{ mt: 1, mb: 3 }}>
        Welcome to AI First CRM
      </Typography>

      <Grid container spacing={3}>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography>Total HCPs</Typography>
              <Typography variant="h3">
                {totalHCP}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography>Total Cities</Typography>
              <Typography variant="h3">
                {totalCities}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography>Specialties</Typography>
              <Typography variant="h3">
                {totalSpecialties}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
            <Grid container spacing={3} sx={{ mt: 4 }}>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              📊 HCPs by City
            </Typography>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cityData}>
                <XAxis dataKey="city" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#1976d2" />
              </BarChart>
            </ResponsiveContainer>

          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              🥧 HCPs by Specialty
            </Typography>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={specialtyData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {specialtyData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

          </Paper>
        </Grid>

      </Grid>

      <Paper sx={{ mt: 4 }}>

        <Typography variant="h6" sx={{ p: 2 }}>
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

            {hcps
              .slice(-5)
              .reverse()
              .map((hcp) => (
                <TableRow key={hcp.id}>
                  <TableCell>{hcp.name}</TableCell>
                  <TableCell>{hcp.specialty}</TableCell>
                  <TableCell>{hcp.city}</TableCell>
                </TableRow>
              ))}

          </TableBody>

        </Table>

      </Paper>

    </div>
  );
}