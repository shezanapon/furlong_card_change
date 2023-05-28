import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddIcon from "@mui/icons-material/Add";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 1,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Quiz() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : true);
  };
  const { handleSubmit, reset, setValue, control } = useForm();
  const handleFinalSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box p={4}>
      <Accordion
        sx={{ borderRadius: "8px" }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Quiz Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion
        sx={{ borderRadius: "8px" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Questions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <Box sx={{ flexGrow: 1 }} p={2}>
              <Grid container spacing={2}>
                <Grid xs={6}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {" "}
                    Questions 1/7
                  </Typography>
                </Grid>
                <Grid xs={6}>
                  <Button size="small" variant="outlined">
                    <CloudUploadIcon sx={{ paddingRight: "4px" }} /> Upload
                  </Button>
                  <Button
                    sx={{ marginLeft: "8px" }}
                    size="small"
                    variant="outlined"
                  >
                    <AddIcon sx={{ paddingRight: "4px" }} /> New Questions
                  </Button>
                  <Button
                    sx={{ marginLeft: "8px" }}
                    size="small"
                    variant="outlined"
                  >
                    <ArrowDownwardIcon sx={{ paddingRight: "4px" }} /> Import
                    From Question Bank
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <Divider />
            <Typography>
              Do you fully understand and are prepared to abide by the
              Conditions of Engagement?
            </Typography>
            <br />
            <section>
              <Controller
                render={({ field }) => (
                  <RadioGroup aria-label="gender" {...field}>
                    <FormControlLabel
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                )}
                name="RadioGroup"
                control={control}
              />
            </section>
            <br />
            <Typography variant="body2" sx={{ paddingBottom: "15px" }}>
              Order: 1, Type: Single Correct Option, Topic: Do you fully
              understand and are prepared to abide by the Conditions of
              Engagement?, Tags: +1 , -0
            </Typography>

            <Divider />
            <br />
            <Box textAlign={"right"}>
              <Button>
                {" "}
                <KeyboardArrowLeftIcon /> Previous
              </Button>
              <Button>
                Next
                <ChevronRightIcon />
              </Button>
            </Box>
          </>
        </AccordionDetails>
      </Accordion>
      <br />
      <Typography variant="h5">Explanation:</Typography>
      <Typography variant="body2" sx={{ color: "#000000" }}>
        No explanation Available
      </Typography>
    </Box>
  );
}
