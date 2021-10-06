// import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import ViewPoll from '../../components/ViewPoll'


function VotePage() {
  // const router = useRouter()
  // const { id } = router.query
  const question = "What Movie Should We Watch?"
  type Hello = {
   foo: string,
   bar: string,
  }
  const aVar: Hello = {
    foo: "foo",
    bar: "bar"
  }
  
  console.log(aVar)

  const getPollUrl = 'https://societyclub-rcv-backend.uc.r.appspot.com/ranked-choice-vote/v1/poll/test-do-not-deleto'

  const [pollCandidates, setPollCandidates] = useState([])

  useEffect(() => {
    const func = async () => {
      const pollResponse: any = await fetch(getPollUrl)
      const pollResponseJson: any = await pollResponse.json()
      setPollCandidates(pollResponseJson.candidateList)
    };
    func()
  }, []);


  return (
    <ViewPoll pollQuestion={question} pollCandidates={pollCandidates} />
  )
}

export default VotePage

