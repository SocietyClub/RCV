import { useRouter } from 'next/router'
import React from 'react'
import ViewPoll from '../../components/ViewPoll'


function VotePage() {
  const router = useRouter()
  const { id } = router.query
  // useEffect, get the voting question and candidates by id
  const question = "What Movie Should We Watch?"
  const pollCandidates = [
	  "Superman",
	  "Spiderman",
	  "Batman",
	  "Avengers",
	  "Joker",
	  "Captain Marvel"
  ]


  return (
	  <ViewPoll pollQuestion={question} pollCandidates={pollCandidates} />
  )
}

export default VotePage