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

export default function SideBar({
  setHistory,
  setEngage,
  setQuiz,
  setDuty,
  setConduct,
  setWork,
  setFatigue,
  setBully,
  setIncident,
}) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleHistory = () => {
    setHistory(true);
    setEngage(false);
    setQuiz(false);
    setDuty(false);
    setConduct(false);
    setWork(false);
    setFatigue(false);
    setBully(false);
    setIncident(false);
  };
  const handleEngage = () => {
    setEngage(true);
    setHistory(false);
    setQuiz(false);
    setDuty(false);
    setConduct(false);
    setWork(false);
    setFatigue(false);
    setBully(false);
    setIncident(false);
  };
  const handleQuiz=()=>{
    setEngage(false);
    setHistory(false);
    setQuiz(true);
    setDuty(false);
    setConduct(false);
    setWork(false);
    setFatigue(false);
    setBully(false);
    setIncident(false);
  };
  const handleDuty = () => {
    setEngage(false);
    setHistory(false);
    setQuiz(false);
    setDuty(true);
    setConduct(false);
    setWork(false);
    setFatigue(false);
    setBully(false);
    setIncident(false);
  };
  const handleConduct = () => {
    setEngage(false);
    setHistory(false);
    setQuiz(false);
    setDuty(false);
    setConduct(true);
    setWork(false);
    setFatigue(false);
    setBully(false);
    setIncident(false);
  };
  const handleWork = () => {
    setEngage(false);
    setHistory(false);
    setQuiz(false);
    setDuty(false);
    setConduct(false);
    setWork(true);
    setFatigue(false);
    setBully(false);
    setIncident(false);
  };
  const handleFatigue = () => {
    setEngage(false);
    setHistory(false);
    setQuiz(false);
    setDuty(false);
    setConduct(false);
    setWork(false);
    setFatigue(true);
    setBully(false);
    setIncident(false);
  };
  const handleBully = () => {
    setEngage(false);
    setHistory(false);
    setQuiz(false);
    setDuty(false);
    setConduct(false);
    setWork(false);
    setFatigue(false);
    setBully(true);
    setIncident(false);
  };
  const handleIncident = () => {
    setEngage(false);
    setHistory(false);
    setQuiz(false);
    setDuty(false);
    setConduct(false);
    setWork(false);
    setFatigue(false);
    setBully(false);
    setIncident(true);
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
            <p
              onClick={(e) => handleEngage()}
              style={lineStyle}
              className="pointer"
              color={change ? "rgb(41, 28, 182)" : "red"}
            >
              Conditions of Engagement
            </p>
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
            <p
              onClick={(e) => handleConduct()}
              style={lineStyle}
              className="pointer"
            >
              Code of Conduct
            </p>
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
            <p
              onClick={(e) => handleDuty()}
              style={lineStyle}
              className="pointer"
            >
              Duty of Care
            </p>
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
            <p
              onClick={(e) => handleWork()}
              style={lineStyle}
              className="pointer"
            >
              Suitability for Work
            </p>
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
            <p
              onClick={(e) => handleFatigue()}
              style={lineStyle}
              className="pointer"
            >
              Fatigue Management
            </p>
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
            <p
              onClick={(e) => handleBully()}
              style={lineStyle}
              className="pointer"
            >
              Bullying and Harassment
            </p>
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
            <p
              onClick={(e) => handleIncident()}
              style={lineStyle}
              className="pointer"
            >
              Incident Reporting
            </p>
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
            <p onClick={(e) => handleQuiz()}
              style={lineStyle}
              className="pointer">QUIZ : Module 1</p>
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
          Module 2 – Workplace Health, Safety and Wellbeing
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
            <p style={lineStyle}>On-Site Works Process</p>
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
            <p style={lineStyle}>Safe Work Method Statement</p>
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
            <p style={lineStyle}>Stop Work</p>
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
            <p style={lineStyle}>Personal Protective Equipment</p>
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
            <p style={lineStyle}>Manual Handling</p>
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
            <p style={lineStyle}>Working at Heights</p>
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
            <p style={lineStyle}>Electrical</p>
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
            <p style={lineStyle}>Confined Spaces</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li><li
            style={{
              display: "flex",
              paddingBottom: "14px",
              fontSize: "16px",
            }}
          >
            <FeedIcon />
            <p style={lineStyle}>Housekeeping- Slips, Trips and Falls</p>
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
            <p style={lineStyle}>Driver Safety</p>
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
            <p style={lineStyle}>QUIZ : Module 2</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ fontWeight: "bold" }}>
          Module 3 – Dangerous / Hazardous Goods
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
            <p style={lineStyle}>Dangerous / Hazardous Goods</p>
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
            <p style={lineStyle}>Lead</p>
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
            <p style={lineStyle}>Asbestos</p>
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
            <p style={lineStyle}>QUIZ : Module 3</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography sx={{ fontWeight: "bold" }}>
          Module 4 – Environmental          </Typography>
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
            <p style={lineStyle}>Company Environment Objective</p>
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
            <p style={lineStyle}>Waste Management</p>
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
            <p style={lineStyle}>QUIZ : Module 4</p>
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
            <p style={lineStyle}>Acceptance</p>
            <MoreVertIcon sx={{ ml: "auto" }} />
          </li>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
