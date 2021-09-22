import { useRouter } from 'next/router'
import React from 'react'


function VotePage() {
  const router = useRouter()
  const { id } = router.query
  // useEffect, get the voting question and candidates by id

  return (
	<div>
	  <h1>Vote</h1>
	  <p>
		This is the page for voting on {id}.
	  </p>
	  <p>
		<a href="/">Go to the home page</a>
	  </p>
	</div>
  )
}

export default VotePage