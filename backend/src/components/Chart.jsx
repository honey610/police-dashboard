import { BsShield } from "react-icons/bs";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardHeader,
  CardContent,
  Typography
} from "@mui/material";

// Sample data
const data = [
  { time: "00:00", population: 100 },
  { time: "06:00", population: 400 },
  { time: "12:00", population: 800 },
  { time: "18:00", population: 1100 },
  { time: "24:00", population: 300 },
];

// Function to calculate risk
const getRiskLevel = (value) => {
  if (value < 400) return { level: "Low", color: "green" };
  if (value < 800) return { level: "Medium", color: "orange" };
  return { level: "High", color: "red" };
};

// Custom tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    const risk = getRiskLevel(value);
    return (
      <div
        style={{
          background: "white",
          border: "1px solid #ccc",
          padding: "8px",
          borderRadius: "6px",
        }}
      >
        <p><b>Time:</b> {label}</p>
        <p><b>Population:</b> {value}</p>
        <p style={{ color: risk.color }}>
          <b>Risk Level:</b> {risk.level}
        </p>
      </div>
    );
  }
  return null;
};

export default function Chart() {
  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3, marginTop: 2 }}>
      <CardHeader
        avatar={<BsShield size={24} color="red" />}
        title={<Typography variant="h6">Real Time Analytics</Typography>}
      />
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="population"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
