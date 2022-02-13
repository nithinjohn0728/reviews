

import { useState } from 'react';
import './App.css';
import Feedbackstats from './components/Feedbackstats';
import feedbackList from './components/feedbackList';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import {v4 as uuidv4} from 'uuid'


function App() {
const [feedback, setFeedback] = useState('')

const addFeedback= (newFeedback) =>{
  newFeedback.id = uuidv4()
  setFeedback(newFeedback,...feedback)

}

const deleteFeedback = (id) =>{
  setFeedback(feedback.filter((item) =>item.id!==id))
}
  
  return (
    <>
    <Header hello = {"Heelo"}/>
   
    <div className="Container">
    <FeedbackForm handleAdd = {addFeedback}
      <Feedbackstats feedback = {feedback}/> 
      
    
    <feedbackList/>
    </div>
    </>
  );
}

export default App;
