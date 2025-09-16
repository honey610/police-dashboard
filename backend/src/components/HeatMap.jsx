 import { FaLocationDot } from 'react-icons/fa6';
 import { GoogleMap, HeatmapLayerF, useLoadScript } from "@react-google-maps/api";
import {
  Card,
  CardContent,
  CardHeader,
  Box,
  Typography
} from "@mui/material";
//  import './HeatMap.css';
export default function HeatMap() {
     const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY, // 🔑 Replace with your Google Maps API Key
    libraries: ["visualization"], // Required for Heatmap
  });
    if (!isLoaded) return <div>Loading...</div>;

    const points = [
    { location: new window.google.maps.LatLng(1.29027, 103.851959), weight: 1.0 },
    { location: new window.google.maps.LatLng(1.3521, 103.8198), weight: 0.6 },
    { location: new window.google.maps.LatLng(1.34, 103.963), weight: 0.3 },
  ];

  const gradient = [
    "rgba(0, 255, 0, 0)",   // Transparent
    "rgba(0, 255, 0, 1)",   // Green (Low)
    "rgba(255, 255, 0, 1)", // Yellow (Medium)
    "rgba(255, 165, 0, 1)", // Orange
    "rgba(255, 0, 0, 1)",   // Red (High)
  ];

    return(
     <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
      <CardHeader
        avatar={<FaLocationDot size={24} color="red" />}
        title={<Typography variant="h6">Tourist Density HeatMap</Typography>}
      />
      <CardContent>
        <Box sx={{ height: 400, width: "100%", position: "relative" }}>
          <GoogleMap
            center={{ lat: 1.29027, lng: 103.851959 }}
            zoom={12}
            mapContainerStyle={{ height: "100%", width: "100%" }}
          >
            <HeatmapLayerF
              data={points}
              options={{
                radius: 40,
                opacity: 0.8,
                gradient: gradient,
              }}
            />

            {/* Legend */}
            <Box
              sx={{
                position: "absolute",
                bottom: 10,
                left: 10,
                background: "white",
                p: 1.5,
                borderRadius: 2,
                boxShadow: 3,
                fontSize: "14px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <Box sx={{ background: "green", width: 15, height: 15, mr: 1 }} />
                Low Risk
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                <Box sx={{ background: "yellow", width: 15, height: 15, mr: 1 }} />
                Medium Risk
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ background: "red", width: 15, height: 15, mr: 1 }} />
                High Risk
              </Box>
            </Box>
          </GoogleMap>
        </Box>
      </CardContent>
    </Card>
)
}