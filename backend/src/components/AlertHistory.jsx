import { MdOutlineNotificationsActive } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import {
  Card,
  CardContent,
  CardHeader,
  
  Typography
} from "@mui/material";

export default function AlertHistory() {
  const alerts = [
    { type: "Missing Tourist", location: "Marina Bay", severity: "High", time: "2 hours ago" },
    { type: "Crowd Surge", location: "Orchard Road", severity: "Medium", time: "5 hours ago" },
    { type: "Minor Incident", location: "Chinatown", severity: "Low", time: "8 hours ago" },
    { type: "Suspicious Activity", location: "Sentosa", severity: "High", time: "12 hours ago" },
  ];

  // Badge styling for severity
  const getSeverityClass = (severity) => {
    switch (severity) {
      case "Low":
        return "bg-green-100 text-green-700 px-2 py-1 rounded-lg";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 px-2 py-1 rounded-lg";
      case "High":
        return "bg-red-100 text-red-700 px-2 py-1 rounded-lg";
      default:
        return "bg-gray-100 text-gray-700 px-2 py-1 rounded-lg";
    }
  };

return(
     <Card sx={{ borderRadius: 3, 
            boxShadow: 3,
           
            display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
         }}>
      <CardHeader
        avatar={<MdOutlineNotificationsActive size={24} color="red" />}
        title={<Typography variant="h6">Alert History</Typography>}
      />
      <CardContent >

        <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b">
            <th className="p-2">Type</th>
            <th className="p-2">Location</th>
            <th className="p-2">Severity</th>
            <th className="p-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert) => (
            <tr key={uuidv4()} className="border-b">
              <td className="p-2">{alert.type}</td>
              <td className="p-2">{alert.location}</td>
              <td className="p-2">
                <span className={getSeverityClass(alert.severity)}>
                  {alert.severity}
                </span>
              </td>
              <td className="p-2 text-gray-600">{alert.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </CardContent>
      </Card>
)
}