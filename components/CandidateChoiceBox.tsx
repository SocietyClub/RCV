import sharedStyles from "./shared.module.css";
import Typography from "@mui/material/Typography";

type Props = {
  children: React.ReactNode;
};

function CandidateChoiceBox({ children }: Props) {
  return (
    <div
      className={sharedStyles.candidateBoxSize + " " + sharedStyles.centered}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.12)",
        color: "rgba(0, 0, 0, 0.38)",
        // border is darker than background because alpha channel is additive
        border: "1px solid rgba(0, 0, 0, 0.12)",

        borderRadius: "4px",
      }}
    >
      <Typography variant="h5">{children}</Typography>
    </div>
  );
}

export default CandidateChoiceBox;
