import React from "react";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import sharedStyles from "./shared.module.css";

type Props = {
  candidateName: string;
  width?: string;
};

function CandidateSelectionBox({ candidateName, width }: Props) {
  const styleVals: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    background: "white",
    zIndex: 1,
    width: width
  };
  return (
    <Box
      className={sharedStyles.candidateBoxSize + " " + sharedStyles.centered}
      style={styleVals}
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
