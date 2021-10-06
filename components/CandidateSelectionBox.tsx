import React from "react"
import Box from '@mui/material/Box';

type Props = {
	candidateName: string
}

function CandidateSelectionBox ({candidateName}: Props) {
	return (
		<Box  sx={{ boxShadow: 1 }}>
			<div style={{ width:"22.5rem", height:"3.5rem"}} >
				{candidateName}
			</div>
		</Box>
	)
}

export default CandidateSelectionBox