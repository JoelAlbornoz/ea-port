import React, {useState} from 'react';
import Toolbar from './components/Toolbar'
import LandingCard from './components/LandingCard'
import AcademicCard from './components/AcademicCard';
import ProjectCard from './components/ProjectsCard'




function App() {
  
  const [currentCard, setCurrentCard] = useState("Landing")
  function RenderCond(props) {
    const currCard = props.currCard;
    if(currCard==="Landing"){
      return <LandingCard/>
    }else if(currCard === 'Academic'){
      return <AcademicCard/>
    }else if(currCard === 'Projects'){
      return <ProjectCard/>
    }
  }
  console.log(currentCard)
  console.log(currentCard)
  console.log(currentCard)
  return (
    <div style={{backgroundColor:'#2c2f33'}}>
      <Toolbar handleClick={setCurrentCard}/>
      <RenderCond currCard={currentCard}/>
      
    </div>
  );
}

export default App;
