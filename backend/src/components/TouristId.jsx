import { BsFillPersonFill } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import {
  Card,
  CardContent,
  CardHeader,
  
  Typography
} from "@mui/material";

export default function TouristId(){
    const userdata = [
    { id: "TID001", name: "John Smith", country: "USA", status: "Safe", lastSeen: "2 hours ago" },
    { id: "TID002", name: "Maria Garcia", country: "Spain", status: "Missing", lastSeen: "6 hours ago" },
    { id: "TID003", name: "Chen Wei", country: "China", status: "Safe", lastSeen: "30 mins ago" },
    { id: "TID004", name: "Ahmed Hassan", country: "Egypt", status: "High Risk", lastSeen: "4 hours ago" },
    { id: "TID005", name: "Sophie Martin", country: "France", status: "Safe", lastSeen: "1 hour ago" },
  ];
  const getStatusClass = (status) => {
    switch (status) {
      case "Safe":
        return "bg-green-100 text-green-700 px-2 py-1 rounded-lg";
      case "Missing":
        return "bg-red-100 text-red-700 px-2 py-1 rounded-lg";
      case "High Risk":
        return "bg-orange-100 text-orange-700 px-2 py-1 rounded-lg";
      default:
        return "bg-gray-100 text-gray-700 px-2 py-1 rounded-lg";
    }
  };
    return (
        <Card sx={{ borderRadius: 3, 
            boxShadow: 3,
           
            display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
         }}>
      <CardHeader
        avatar={<BsFillPersonFill size={24} color="red" />}
        title={<Typography variant="h6">Tourist Ids</Typography>}
      />
      <CardContent >
        <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b">
            <th className="p-3 text-centre">ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Status</th>
            <th className="p-2">Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((user) => (
            <tr key={uuidv4()} className="border-b">
              <td className="p-2">{user.id}</td>
              <td className="p-2">
                {user.name} <br />
                <span className="text-sm text-gray-500">{user.country}</span>
              </td>
              <td className="p-2">
                <span className={getStatusClass(user.status)}>{user.status}</span>
              </td>
              <td className="p-2 text-gray-600">{user.lastSeen}</td>
            </tr>
          ))}
        </tbody>
      </table>

      </CardContent>

      </Card>
    )
}