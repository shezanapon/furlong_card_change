import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import FeedIcon from "@mui/icons-material/Feed";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./main.css";
import { ListItemSecondaryAction, ListItemText } from "@mui/material";

const lineStyle = {
  marginLeft: ".5rem",
  marginTop: 0,
  marginBottom: 0,
  display: "inline-block",
  width: "70%",
};
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
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
}));

export default function SideBar({ history, setHistory }) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleHistory = () => {
    setHistory(true);
    setChange(true);
  };
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [change, setChange] = React.useState("false");

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{ fontWeight: "bold" }}>
            Furlong Painting Outline Contractor induction Program
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <li
            style={{
              display: "flex",
              marginBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Introduction Program</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              marginBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p
              onClick={(e) => handleHistory()}
              style={lineStyle}
              className="pointer"
              color={change ? "rgb(41, 28, 182)" : "red"}
            >
              History and Mission
            </p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              marginBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Interpretative Statements</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Contractor Standards and Expectations</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Personal and Business Documents</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography sx={{ fontWeight: "bold" }}>
            Module 1 - Human Resources
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Conditions of Engagement</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Code of Conduct</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Duty of Care</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Suitability for Work</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Fatigue Management</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Bullying and Harassment</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Incident Reporting</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>QUIZ : Module 1</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ fontWeight: "bold" }}>
            Module 1 - Human Resources
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Conditions of Engagement</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Code of Conduct</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Duty of Care</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Suitability for Work</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Fatigue Management</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Bullying and Harassment</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Incident Reporting</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
          <li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>QUIZ : Module 1</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
