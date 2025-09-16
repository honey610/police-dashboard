import React, { useState } from "react";
import ReportIcon from "@mui/icons-material/Description";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Button
} from "@mui/material";
import {Link} from 'react-router-dom';

export default function Efir() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <CardHeader
        avatar={<ReportIcon sx={{ color: "red" }} />}
        title={<Typography variant="h6">E-FIR Generate</Typography>}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary" paragraph>
          This section allows police officers to generate and manage electronic
          First Information Reports (E-FIRs) for incidents reported by tourists.
          The E-FIR system streamlines the reporting process, ensuring that all
          necessary information is captured accurately and efficiently.
        </Typography>

        {/* Bootstrap button can stay, but I added a MUI Button version for consistency */}
        <button
          type="button"
          className="btn btn-dark"
          onClick={increment}
          style={{ marginBottom: "10px" }}
        >
        <Link to='/efir'>  Generate E-FIR</Link>
        </button>

        {/* Alternative MUI Button (if you want consistency with MUI design system) */}
        {/* 
        <Button variant="contained" color="primary" onClick={increment}>
          Generate E-FIR
        </Button>
        */}

        <Typography variant="body1" sx={{ marginTop: 1 }}>
          Auto-generated E-FIRs: <strong>{count}</strong> today
        </Typography>
      </CardContent>
    </Card>
  );
}
