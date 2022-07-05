import {createContext,useState} from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    
    const [feedbacks,setFeedbacks] = useState([
        {
            id: 1,
            rating: 10,
            text: '1st Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
          {
            id: 2,
            rating: 9,
            text: '2nd Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          },
          {
            id: 3,
            rating: 8,
            text: '3rd Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
          }
    ])

    const [feedbackEdit,setFeedbackEdit] = useState({
        item: {},
        edit: false
    }
    )
    const addFeedback = (newFeedback)=>{
        setFeedbacks([newFeedback,...feedbacks])
    }
    const updateFeedback = (updatedFeedback) =>{
        console.log(updatedFeedback)
      setFeedbacks(
        feedbacks.map((item)=>(
            item.id === updatedFeedback.id ? {...item,...updatedFeedback}: item
        ))
      )
      setFeedbackEdit({
        item: {},
        edit: false,
      })
    }
    const deleteFeedback = (id)=>{
        if(window.confirm('Are you sure to delete this item?'))
        {
            setFeedbacks(feedbacks.filter(item =>item.id!==id))
        }
    }
    const editFeedback = (item)=>{
    setFeedbackEdit({
        item:item,
        edit:true
    })
    }
    return <FeedbackContext.Provider value={{
        feedbacks: feedbacks,
        addFeedback:addFeedback,
        deleteFeedback:deleteFeedback,
        editFeedback:editFeedback,
        feedbackEdit:feedbackEdit,
        updateFeedback:updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext