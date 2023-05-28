import {
  Box,
  CssBaseline,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import CardCom from "./components/CardCom";
import SelectType from "./components/Select";
import TextFields from "./components/TextFields";
import Main from "./components/secondpage/Main";
import Quiz from "./components/secondpage/Quiz";

function App() {
  return (
    <Box>
      <Typography
        p={2}
        sx={{ fontsize: "solid", paddingLeft: "30px" }}
        variant="h6"
      >
        Courses(3)
      </Typography>
      <Divider />
      <Box sx={{ paddingLeft: "30px", width: 500, maxWidth: "100%" }}>
        <TextFields fullWidth label="fullWidth" />
      </Box>
      <CardCom />
    </Box>
  );
}

export default App;
