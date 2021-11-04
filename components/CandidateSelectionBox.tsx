import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";

type Props = {
  candidateName: string;
};

function CandidateSelectionBox({ candidateName }: Props) {
  return (
    <Box
      style={{
        width: "360px",
        height: "56px",
        marginBottom: "1rem",
        padding: "0px 20px",

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",

        fontSize: "24px",
        lineHeight: "24px",
        fontFamily: "Roboto",
      }}
      sx={{
        boxShadow: 3,
      }}
    >
      {candidateName}
      <MenuIcon />
    </Box>
  );
}

export default CandidateSelectionBox;
