import FeedbackItem from "./FeedbackItem"
import { AnimatePresence,motion } from "framer-motion"
import {useContext} from 'react'
import FeedbackContext from "./context/FeedbackContext"

function FeedbackList() {

    const {feedbacks} = useContext(FeedbackContext)
    if(!feedbacks || feedbacks.length === 0)
        return <p> No Feedback Available</p>

    return (
    <AnimatePresence>
        <div className="feedback-list">
            {
                feedbacks.map(item =>(
                    <motion.div 
                        key={item.id}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}>
                        <FeedbackItem key={item.id} item={item} />
                    </motion.div>
                ))
            }
        </div>
    </AnimatePresence>
  )
//     return (
//     <div className="feedback-list">
//         {
//             feedbacks.map(item =>(
//                 <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
//             ))
//         }
//     </div>
//   )
}

export default FeedbackList