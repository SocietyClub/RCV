import Button from "@mui/material/Button";
import React from "react";
import CandidateSelectionBox from "./CandidateSelectionBox";

type Props = {
    pollQuestion: string;
    pollCandidates: string[];
};

function ViewPoll({ pollQuestion, pollCandidates }: Props) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "5rem",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                        <h1>{pollQuestion}</h1>
                    </div>
                    <p>
                        Drag your selections to the ranked spots on the right.
                    </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Button variant="contained" color="primary">
                        Share
                    </Button>
                    <Button variant="contained">Edit Poll</Button>
                    <Button variant="contained">Close Poll</Button>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    {pollCandidates.map((candidate) => (
                        <div key={candidate}>
                            <CandidateSelectionBox candidateName={candidate} />
                        </div>
                    ))}
                </div>
                <div>
                    <div>First Choice</div>
                    <div>Second Choice</div>
                    <div>Third Choice</div>
                </div>
            </div>
        </div>
    );
}

export default ViewPoll;
