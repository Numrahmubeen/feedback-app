import Card from "./shared/Card"
import { useState,useContext,useEffect } from "react"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"


function FeedbackForm() {

  const [text,setText] = useState('')
  const [rating,setRating] = useState(10)
  const [btnDisabled,setBtnDisabled] = useState(true)
  const [message,setMessage] = useState('')

  const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)

  useEffect(()=>{
    if(feedbackEdit.edit === true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }

  },[feedbackEdit])
  const handleTextChange = ({ target: { value } })=>{
    if(value === ''){
      setMessage(null)
      setBtnDisabled(true)
    }else if(value !== '' && value.trim().length <= 10){
      setMessage('Text must be atleast 10 characters.')
      setBtnDisabled(true)
    }else {
      setMessage(null)
      setBtnDisabled(false)
      console.log('else run '+ btnDisabled)
    }
    setText(value)
      
  }
  const handleSubmit = (e)=>{
    e.preventDefault(); 
    if(text.trim().length >= 10){
    
      if(feedbackEdit.edit === true){
        const updatedFeedback = {
          id:feedbackEdit.item.id,
          rating,
          text
        }
        updateFeedback(updatedFeedback)
      }
      else{
        const newFeedback = {
          rating,
          text
        }
        addFeedback(newFeedback)
      }
      
      // NOTE: reset to default state after submission
    setBtnDisabled(true) // 👈  add this line to reset disabled
    setRating(10) //👈 add this line to set rating back to 10
    setText('')
      
  }
  }


  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={setRating} selected={rating} />
            <div className="input-group">
          
                <input type='text' value={text} onChange={handleTextChange} placeholder='Write a Review'/>
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm