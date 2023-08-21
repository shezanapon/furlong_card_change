import { Box } from "@mui/material";
import React from "react";

const Incident = () => {
  return (
    <Box sx={{ width: "80%" }}>
      <p>
        <p style={{ color: "purple" }}>Incident Reporting</p>
        Incidents in the workplace include the following: - <br />
        <br />
        <ul>
          <li>Workplace Incidents / near misses</li>
          <li>Plant or Property damage to the workplace</li>
          <li>Chemical spills or exposure</li>
          <li>Potential unforeseen hazards at the workplace</li>
          <li>Workplace Injuries or onset of paint and discomfort</li>
        </ul>
        <br />
      ALL incidents, regardless of how small they may seem, must be
        reported to ensure that protective practicable control solutions can be
        identified to minimize the risk of a re-occurrence.
        <br />
        <br />A Furlong Painting Management representative must be contacted
        immediately in the event of any incident or unforeseen event occurs at
        the workplace ensuring responsive management and early notification to
        the client representative. Furlong Painting management need to assess
        all workplace incidents, to determine if the incident constitutes a
        notifying Worksafe Incident.
      </p>
    </Box>
  );
};

export default Incident;
