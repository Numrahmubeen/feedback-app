import {createContext,useState, useEffect} from 'react'

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

    let [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
      fetchFeedback() },[])

    const fetchFeedback = async () =>{
      const response = await fetch('http://localhost:5000/feedback?_sort=id&_order=desc')
      const data = await response.json();
      setFeedbacks(data)
      setIsLoading(false)
    }

    const addFeedback = async (newFeedback)=>{
      setIsLoading = true
      const response = await fetch('/feedback',{
        method : 'POST',
        headers : {
          'Content-Type'  : 'application/json'
        },
        body : JSON.stringify(newFeedback),
      })
      const data = await response.json();
      setFeedbacks([data, ...feedbacks])
      setIsLoading = false
    }

    const updateFeedback =  async(updatedFeedback) =>{

      const response = await fetch(`/feedback/${updatedFeedback.id}`,{
        method : 'PUT',
        headers : {
          'Content-Type'  : 'application/json'
        },
        body : JSON.stringify(updatedFeedback),
      })
      const data = await response.json()
      setFeedbacks(
        feedbacks.map((item)=>(
            item.id === updatedFeedback.id ? {...item,...data}: item
        ))
      )
      setFeedbackEdit({
        item: {},
        edit: false,
      })
    }
    const deleteFeedback = async (id)=>{
        if(window.confirm('Are you sure to delete this item?'))
        {
          const response = await fetch(`/feedback/${id}`,{method:'DELETE'})
          console.log(response)
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
        isLoading:isLoading,
        editFeedback:editFeedback,
        feedbackEdit:feedbackEdit,
        updateFeedback:updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>

}

export default FeedbackContext