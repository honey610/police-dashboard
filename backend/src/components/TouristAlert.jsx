
import {
  Card,
  CardContent,
  CardHeader,
  
} from "@mui/material";
import Alert from '@mui/material/Alert';



export default function TouristAlert(){
    return (
           <Card>
      <CardHeader title="Tourist Safety Alert" />
      <CardContent>
        <Alert severity="error">
          This is an error alert — please take immediate action!
        </Alert>
      </CardContent>
    </Card>
    )
}