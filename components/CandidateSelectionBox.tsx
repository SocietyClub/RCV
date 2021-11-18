import React from "react";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import sharedStyles from "./shared.module.css";

type Props = {
  candidateName: string;
};

function CandidateSelectionBox({ candidateName }: Props) {
  return (
    <Box
      className={sharedStyles.candidateBoxSize + " " + sharedStyles.centered}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      sx={{
        boxShadow: 3,
      }}
    >
      <Typography variant="h5">{candidateName}</Typography>
      <MenuIcon />
    </Box>
  );
}

export default CandidateSelectionBox;
