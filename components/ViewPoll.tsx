import Button from "@mui/material/Button"
import React from "react"

type Props = {
	pollQuestion: string,
	pollCandidates: string[]
}

function ViewPoll ({pollQuestion, pollCandidates}: Props) {
	return (
		<div style={{display: "flex", flexDirection: "column", padding: "5rem 0 5rem 5rem" }}>
			<div style={{display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
				<div style={{display: "flex", flexDirection: "column" }}>
					<div>
					<h1>{pollQuestion}</h1>

					</div>
					<p>Drag your selections to the ranked spots on the right.</p>
				</div>
				<div style={{display: "flex", flexDirection: "column" }}>
				<Button variant="contained" color="primary">Share</Button>
				<Button variant="contained">Edit Poll</Button>
				<Button variant="contained">Close Poll</Button>
				</div>
			</div>
			{JSON.stringify(pollCandidates)}
			{pollCandidates.map((candidate) => {
				<div key={candidate}>
					{candidate}
				</div>
			})}
		</div>
	)

}


export default ViewPoll