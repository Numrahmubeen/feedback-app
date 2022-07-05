import {useContext} from 'react'
import FeedbackContext from '../components/context/FeedbackContext'

function FeedbackStats() {

  const {feedbacks} = useContext(FeedbackContext)
    console.log(feedbacks)
    const average =
        feedbacks.reduce((sum,current)=>{
            return sum + current.rating
        },0)/feedbacks.length
    
  return (
    
    <div className="feedback-stats">
        <h4>{feedbacks.length} Reviews</h4>
        <h4>Average Ratings : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats