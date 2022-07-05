import React, { useState } from "react";
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import FeedbackData from "./data/FeedbackData"
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import './index.css'
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from "./components/context/FeedbackContext"


function App(){
      
    return (
    <FeedbackProvider>
        <Router>
            <Header />

            <div className="container">
                <Routes>
                    <Route path="/" element={
                        <>
                            <FeedbackForm />
                            <FeedbackStats />
                            <FeedbackList  />
                        </>}>
                    </Route>
                    <Route path="/about" element={<About/>}/>
                </Routes>
                <AboutIconLink/>
            </div>
        </Router>
    </FeedbackProvider>       
    )
}
 export default App