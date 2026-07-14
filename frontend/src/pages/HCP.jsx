import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import api from "../services/api";

import HCPForm from "../components/HCPForm";
import HCPTable from "../components/HCPTable";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function HCP() {
  const [hcps, setHcps] = useState([]);
  const [search, setSearch] = useState("");

  const [editing, setEditing] = useState(false);
  const [selectedHCP, setSelectedHCP] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = 5;

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

  const filteredHCPs = hcps.filter((hcp) =>
    (
      (hcp.name || "") +
      (hcp.city || "") +
      (hcp.specialty || "")
    )
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(
    filteredHCPs.length / recordsPerPage
  );

  const indexOfLastRecord =
    currentPage * recordsPerPage;

  const indexOfFirstRecord =
    indexOfLastRecord - recordsPerPage;

  const currentRecords =
    filteredHCPs.slice(
      indexOfFirstRecord,
      indexOfLastRecord
    );

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const exportToExcel = () => {
    const worksheet =
      XLSX.utils.json_to_sheet(filteredHCPs);

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "HCP List"
    );

    const excelBuffer = XLSX.write(
      workbook,
      {
        bookType: "xlsx",
        type: "array",
      }
    );

    const file = new Blob(
      [excelBuffer],
      {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
      }
    );

    saveAs(file, "HCP_Report.xlsx");
  };

  return (
    <div style={{ padding: 20 }}>

      <h1>HCP Management</h1>

      <HCPForm
        loadHCPs={loadHCPs}
        editing={editing}
        setEditing={setEditing}
        selectedHCP={selectedHCP}
      />

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <TextField
          fullWidth
          label="Search by Name / City / Specialty"
          value={search}
          onChange={handleSearch}
        />

        <Button
          variant="contained"
          color="success"
          onClick={exportToExcel}
        >
          📥 Export Excel
        </Button>
      </div>

      <HCPTable
        hcps={currentRecords}
        loadHCPs={loadHCPs}
        setEditing={setEditing}
        setSelectedHCP={setSelectedHCP}
      />
            <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <Button
          variant="outlined"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </Button>

        {Array.from(
          { length: totalPages },
          (_, index) => (
            <Button
              key={index}
              variant={
                currentPage === index + 1
                  ? "contained"
                  : "outlined"
              }
              onClick={() =>
                setCurrentPage(index + 1)
              }
            >
              {index + 1}
            </Button>
          )
        )}

        <Button
          variant="outlined"
          disabled={
            currentPage === totalPages ||
            totalPages === 0
          }
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
}